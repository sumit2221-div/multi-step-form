import React from 'react';

function OptionField({ src, text, additionalText,className }) {
  return (
    <div className={`flex items-center  max-w-[500px] shadow-xl rounded-xl px-4 py-5 hover:bg-gray-100 hover:px-6 transition-all duration-300 ease-in-out ${className}`}>
      <img src={src} alt="Option" className="w-8 h-8 mr-2 rounded-full" />
      <span>{text}</span>
      <span className="hidden px-2 sm:inline">{additionalText}</span>
    </div>
  );
}

export default OptionField;
