import React from 'react';

interface HeroProps {
  name: string;
  title: string;
  description: string;
  profileImage: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, description, profileImage }) => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Eleve seu negócio digital a outro nível{' '}
              <span className="gradient-text">com um site de qualidade!</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-gray)] mt-6">
              Olá! Sou {name}, {title} com especialidade em {description}. 
              Ajudo pequenos negócios e designers a colocarem em prática boas ideias. 
              Vamos conversar?
            </p>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden profile-image">
                <img 
                  src={profileImage} 
                  alt={`Foto de ${name}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
