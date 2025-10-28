import React from 'react';

interface OptionsAreaProps {
    options: string[];
    onSelect: (option: string) => void;
    disabled: boolean;
}

const OptionsArea: React.FC<OptionsAreaProps> = ({ options, onSelect, disabled }) => {
    return (
        <div className="options-area">
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => onSelect(option)}
                    disabled={disabled}
                    className="option-button"
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default OptionsArea;