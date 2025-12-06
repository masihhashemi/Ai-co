import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 border border-transparent shadow-sm focus:ring-slate-900",
    secondary: "bg-white text-slate-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm focus:ring-gray-200",
    outline: "bg-transparent text-slate-900 border border-slate-900 hover:bg-slate-50 focus:ring-slate-900",
    ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-gray-100 focus:ring-gray-200",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5 rounded-md",
    md: "text-sm px-5 py-2.5 rounded-lg",
    lg: "text-base px-8 py-3.5 rounded-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};