// Button.js
import React from 'react';

function Button({ onClick, type, children, className }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
