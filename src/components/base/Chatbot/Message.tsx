import React from 'react';
import type { ChatMessage } from '../../../types/ChatTypes';

interface MessageProps {
    message: ChatMessage;
}

const Message: React.FC<MessageProps> = ({ message }) => {
    const isBot = message.sender === 'bot';
    return (
        <div className={`message-row ${isBot ? 'bot' : 'user'}`}>
            <div className={`message-bubble ${isBot ? 'bot-bubble' : 'user-bubble'}`}>
                {message.text}
            </div>
        </div>
    );
};

export default Message;