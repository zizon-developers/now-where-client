import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, className, ...props }) => {
  return (
    <input
      className={`border rounded-lg w-full py-3 px-3 mr-1 focus:outline-none focus:border-primary ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
