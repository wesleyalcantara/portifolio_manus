import React from 'react';

interface SocialIconProps {
  icon: string;
  href: string;
  label: string;
  color?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ 
  icon, 
  href, 
  label,
  color = 'var(--primary-color)'
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link flex items-center gap-2 p-2 rounded-md transition-all duration-300 hover:bg-opacity-10 hover:bg-white"
      aria-label={label}
    >
      <span 
        className="w-6 h-6" 
        dangerouslySetInnerHTML={{ 
          __html: icon.replace('fill="#00DBDE"', `fill="${color}"`) 
        }} 
      />
      <span>{label}</span>
    </a>
  );
};

export default SocialIcon;
