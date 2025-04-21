import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true
}) => {
  return (
    <div className={`card ${hoverEffect ? 'hover:transform hover:translate-y-[-5px] hover:shadow-lg' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
