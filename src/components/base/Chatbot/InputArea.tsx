import React, { useState } from 'react';

interface InputAreaProps {
    onSend: (input: string) => void;
    disabled: boolean;
}

const InputArea: React.FC<InputAreaProps> = ({ onSend, disabled }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() === '') return;
        onSend(input);
        setInput('');
    };

    return (
        <form className="input-area" onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                disabled={disabled}
            />
            <button type="submit" disabled={disabled || input.trim() === ''}>
                Enviar
            </button>
        </form>
    );
};

export default InputArea;