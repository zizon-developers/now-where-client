import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-primary hover:bg-red-400 text-white py-2 px-6 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
