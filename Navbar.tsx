import React, { useState } from 'react';

interface NavbarProps {
  onNavClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    onNavClick(section);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-90 bg-gray-900 z-50 py-4">
      <div className="container mx-auto flex justify-center md:justify-start items-center">
        <div className="flex space-x-6">
          <a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'text-[var(--primary-color)]' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            Home
          </a>
          <a 
            href="#sobre" 
            className={`nav-link ${activeSection === 'sobre' ? 'text-[var(--primary-color)]' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('sobre');
            }}
          >
            Sobre
          </a>
          <a 
            href="#timeline" 
            className={`nav-link ${activeSection === 'timeline' ? 'text-[var(--primary-color)]' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('timeline');
            }}
          >
            Timeline
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
