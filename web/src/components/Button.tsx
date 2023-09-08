import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-primary hover:bg-red-400 text-white py-2 px-6 rounded-md ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
