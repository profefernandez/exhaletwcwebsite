import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#953fcf] text-white hover:bg-[#8b54d7] focus:ring-[#953fcf] shadow-md hover:shadow-lg',
  secondary:
    'bg-[#8b54d7] text-white hover:bg-[#787ee7] focus:ring-[#8b54d7] shadow-md hover:shadow-lg',
  outline:
    'border-2 border-[#953fcf] text-[#953fcf] hover:bg-[#edd2ff] focus:ring-[#953fcf] bg-transparent',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  asChild: _asChild,
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
