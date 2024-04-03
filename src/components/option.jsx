import React, { useState } from 'react';

function OptionField({ src, text, additionalText, className, isSelected, onClick, style }) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div
            className={`flex items-center max-w-[500px] shadow-xl rounded-xl px-4 py-5 hover:bg-gray-100 hover:px-6 transition-all duration-300 ease-in-out ${isSelected ? 'bg-gray-300' : 'bg-white'} ${className}`}
            onClick={handleClick}
            style={style} 
        >
            <img src={src} alt="Option" className="w-8 h-8 mr-2 rounded-full" />
            <span>{text}</span>
            <span className="hidden px-2 sm:inline">{additionalText}</span>
        </div>
    );
}

export default OptionField;
