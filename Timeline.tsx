import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ title, items }) => {
  return (
    <section id="timeline" className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title gradient-text">{title}</h2>
        <div className="relative">
          {/* Linha vertical do timeline */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-[var(--primary-color)]"></div>
          
          {/* Items do timeline */}
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2 mb-4 md:mb-0 md:px-8">
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold rounded-full bg-[var(--primary-color)] bg-opacity-20 text-[var(--primary-color)]">
                    {item.year}
                  </span>
                  <p className="text-[var(--text-gray)]">{item.description}</p>
                </div>
              </div>
              
              {/* Círculo no centro da linha */}
              <div className="absolute left-[-8px] md:left-1/2 transform md:translate-x-[-50%] w-4 h-4 rounded-full bg-[var(--primary-color)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
