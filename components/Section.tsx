import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'gray';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children,
  background = 'white'
}) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';
  
  return (
    <section id={id} className={`py-20 md:py-32 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
};