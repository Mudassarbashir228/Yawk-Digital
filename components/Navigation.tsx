
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavigationProps {
  onCtaClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-950/90 backdrop-blur-xl py-3 border-b border-white/10 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Results', 'Process', 'Insights'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative text-slate-400 hover:text-white transition-all text-sm font-semibold tracking-wide uppercase group py-2 hover:-translate-y-0.5"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button 
          onClick={onCtaClick}
          className="btn-interactive shimmer-btn bg-white text-slate-950 px-7 py-3 rounded-full text-sm font-black hover:bg-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all"
        >
          Get Free Growth Plan
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
