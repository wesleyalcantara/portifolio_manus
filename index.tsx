import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fundo geométrico */}
      <div className="geometric-background"></div>
      
      {/* Navegação */}
      <Navbar />
      
      {/* Conteúdo principal */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default MainLayout;
