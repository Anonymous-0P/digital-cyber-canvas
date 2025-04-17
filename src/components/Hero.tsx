
import React, { useEffect, useState } from 'react';
import { Terminal, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTypingComplete(true);
    }, 4000); // Wait for typing animation to complete
    
    return () => clearTimeout(timeout);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 grid-pattern overflow-hidden"
    >
      {/* Background animated particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute h-2 w-2 rounded-full bg-cyber-neon-green/30 top-1/4 left-1/3 animate-pulse"></div>
        <div className="absolute h-2 w-2 rounded-full bg-cyber-neon-green/30 top-2/3 left-1/2 animate-pulse"></div>
        <div className="absolute h-3 w-3 rounded-full bg-cyber-neon-blue/30 top-1/2 left-1/4 animate-pulse"></div>
        <div className="absolute h-3 w-3 rounded-full bg-cyber-neon-blue/30 top-3/4 left-3/4 animate-pulse"></div>
        <div className="absolute h-2 w-2 rounded-full bg-cyber-neon-purple/30 top-1/3 left-2/3 animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        <div className="mb-6 inline-block">
          <Terminal className="h-10 w-10 md:h-14 md:w-14 text-cyber-neon-green mx-auto" />
        </div>
        
        <div className="mb-4 overflow-hidden">
          <h1 className="font-mono text-2xl md:text-4xl lg:text-5xl font-bold text-cyber-text animate-typing whitespace-nowrap overflow-hidden">
            <span className="text-cyber-neon-green">&gt;</span> Ethical Hacker<span className="text-cyber-neon-green animate-cursor-blink">_</span>
          </h1>
        </div>
        
        <div className={`mt-6 transition-opacity duration-1000 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-lg md:text-xl text-cyber-text/80 max-w-2xl mx-auto mb-8">
            Cybersecurity professional specializing in penetration testing, 
            vulnerability assessment, and securing digital infrastructures.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a 
              href="#contact" 
              className="button-glow hover:bg-cyber-neon-green hover:text-cyber-background"
            >
              Hire Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-cyber-dark text-cyber-text border border-cyber-dark rounded-md font-medium transition-all duration-300 hover:border-cyber-neon-blue hover:text-cyber-neon-blue"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <ChevronDown className="h-8 w-8 text-cyber-neon-green" />
      </div>
    </section>
  );
};

export default Hero;
