import React from 'react';

interface AboutProps {
  title: string;
  content: string;
}

const About: React.FC<AboutProps> = ({ title, content }) => {
  return (
    <section id="sobre" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="section-title gradient-text">{title}</h2>
        <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg">
          <p className="text-lg leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
