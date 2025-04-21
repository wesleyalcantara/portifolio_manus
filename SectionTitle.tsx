import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  className = '',
  centered = false
}) => {
  return (
    <h2 className={`section-title ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
