// Button.js
import React from 'react';

function Button({ onClick, type, children, className, disabled }) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled} 
      className={`bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}

export default Button;
