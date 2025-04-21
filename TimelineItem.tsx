import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isEven: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  description,
  isEven
}) => {
  return (
    <div className={`relative flex flex-col md:flex-row items-start mb-12 ${
      isEven ? 'md:flex-row-reverse' : ''
    }`}>
      <div className="md:w-1/2 mb-4 md:mb-0 md:px-8">
        <div className="card animate-fade-in">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold rounded-full bg-[var(--primary-color)] bg-opacity-20 text-[var(--primary-color)]">
            {year}
          </span>
          <p className="text-[var(--text-gray)]">{description}</p>
        </div>
      </div>
      
      {/* Círculo no centro da linha */}
      <div className="absolute left-[-8px] md:left-1/2 transform md:translate-x-[-50%] w-4 h-4 rounded-full bg-[var(--primary-color)] animate-pulse"></div>
    </div>
  );
};

export default TimelineItem;
