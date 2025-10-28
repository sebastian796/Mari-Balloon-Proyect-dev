import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { CotizacionPreview } from '../../../types/ChatTypes';
import axios from 'axios';
import type { ChatRequest, ChatResponse, ChatMessage, FlowStatus } from '../../../types/ChatTypes'; 
import Message from './Message';
import InputArea from './InputArea';
import OptionsArea from './OptionsArea';
import './Chatbot.scss'; 
import PaymentModal from './PaymentModal';

const API_URL = 'http://localhost:8080/api/chat/dialog'; 


const initialSessionId = `session_${Date.now()}`;

const ChatbotContainer: React.FC = () => {
    const [sessionId] = useState<string>(initialSessionId);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);
    const [currentStatus, setCurrentStatus] = useState<FlowStatus>('INITIAL');
    const [options, setOptions] = useState<string[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null); 
    const messageIdCounter = useRef<number>(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [finalPreview, setFinalPreview] = useState<CotizacionPreview | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const sendMessage = useCallback(async (input: string) => {
        if (isLoading) return; 

        if (input.trim() !== '') {
            messageIdCounter.current++;
             setMessages(prev => [...prev, { id: Date.now(), text: input, sender: 'user' }]);
        }

        setIsLoading(true);
        setOptions(null); 

        const request: ChatRequest = {
            sessionId: sessionId,
            userInput: input
        };

        try {
            const { data } = await axios.post<ChatResponse>(API_URL, request);

            const botMessageId = messageIdCounter.current++;
            const botMessage: ChatMessage = {
                id: botMessageId,
                text: data.nextQuestion, 
                sender: 'bot'
            };

            setMessages(prev => [...prev, botMessage]);
            setCurrentStatus(data.status);
            setOptions(data.options);

            if (input.trim() === '' && !isInitialized && data.status !== 'ERROR_INVALID_INPUT') {
                 setIsInitialized(true);
            }

            if (data.status === 'COTIZACION_FINALIZADA' && data.cotizacionPreview) {
                if (data.cotizacionPreview) {setFinalPreview(data.cotizacionPreview);
    }
                const preview =data.cotizacionPreview;
                const summaryMessageId = messageIdCounter.current++;
                 const summaryText = `¡Cotización Lista! Tipo: ${preview.tipoEvento}, Paquete: ${preview.nombrePaquete}. Precio Total: S/. ${data.cotizacionPreview.precioTotal.toFixed(2)}`;
                 setMessages(prev => [...prev, { id: summaryMessageId + 2, text: summaryText, sender: 'bot', cotizacionPreview: data.cotizacionPreview }]);
            }

        } catch (error) {
            console.error("Error al comunicarse con el chatbot:", error);
             setMessages(prev => [...prev, { id: Date.now() + 1, text: "Lo siento, la conexión falló. Intenta de nuevo.", sender: 'bot' }]);
             setCurrentStatus('ERROR_INVALID_INPUT');
        } finally {
            setIsLoading(false);
        }
    }, [sessionId, isLoading, isInitialized]); 


    useEffect(() => {
        if (!isInitialized) { 
            sendMessage(''); 
        }
    }, [isInitialized, sendMessage]); 

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleOptionClick = (option: string) => {
        sendMessage(option);
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <Message key={msg.id || index} message={msg} />
                ))}
                {isLoading && <div className="loading-indicator">Escribiendo...</div>}
                <div ref={messagesEndRef} />
            </div>

            {options && currentStatus === 'QUESTION_ACTIVE' && (
                <OptionsArea options={options} onSelect={handleOptionClick} disabled={isLoading} />
            )}
            
            {!options && currentStatus === 'QUESTION_ACTIVE' && (
                <InputArea onSend={sendMessage} disabled={isLoading} />
            )}

            {currentStatus === 'COTIZACION_FINALIZADA' && finalPreview && (
                <div className="chatbot-actions-footer">
                    <div className="final-message">
                        ✅ ¡Cotización Completada! Revisa el resumen arriba.
                    </div>
                    
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="confirm-pay-button" 
                        disabled={isLoading}
                    >
                        Confirmar y Pagar S/. {finalPreview.precioTotal.toFixed(2)}
                    </button>
                </div>
            )}
            <PaymentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                preview={finalPreview}
            />
        </div>
    );
};

export default ChatbotContainer;