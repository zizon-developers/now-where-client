import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type, text, onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary hover:bg-red-400 text-white py-2 px-6 rounded-md ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
