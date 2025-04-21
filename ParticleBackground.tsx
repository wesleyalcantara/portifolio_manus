import React from 'react';

interface ParticleBackgroundProps {
  particleCount?: number;
  color?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 50,
  color = 'var(--primary-color)'
}) => {
  // Gera posições aleatórias para as partículas
  const particles = Array.from({ length: particleCount }).map((_, index) => ({
    id: index,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    animationDuration: Math.random() * 20 + 10
  }));

  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            opacity: Math.random() * 0.5 + 0.1,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
