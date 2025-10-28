
import React from 'react';
import ChatbotContainer from '../Chatbot/ChatbotContainer'; 
import '../Modal/ChatModal.scss'; 

interface ChatModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}> 
            <div className="modal-content" onClick={(e) => e.stopPropagation()}> 
                <button className="modal-close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="chatbot-header">Chat de Cotizaciones Mari Balloon</div>
                
                <ChatbotContainer /> 
                
            </div>
        </div>
    );
};

export default ChatModal;