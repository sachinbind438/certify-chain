"use client";

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-500 to-[#00ABE4] text-white hover:from-blue-600 hover:to-[#0098cb] transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25',
    secondary: 'bg-[#E9F1FA] text-blue-600 hover:bg-blue-50 hover:-translate-y-1 transform hover:scale-105 shadow-md hover:shadow-lg',
    outline: 'border-2 border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-[#E9F1FA] transform hover:scale-105 hover:-translate-y-1',
    ghost: 'text-blue-600 hover:bg-[#E9F1FA] transform hover:scale-105 hover:-translate-y-0.5'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
