
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-darker py-10 border-t border-cyber-neon-green/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="text-2xl font-mono font-bold text-cyber-neon-green mb-6">
            <span className="mr-1 text-cyber-neon-blue">&gt;</span>
            Hack<span className="text-cyber-neon-blue">Ethics</span>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-cyber-dark flex items-center justify-center text-cyber-text hover:text-cyber-neon-green hover:bg-cyber-dark/80 transition-colors duration-300"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-cyber-dark flex items-center justify-center text-cyber-text hover:text-cyber-neon-blue hover:bg-cyber-dark/80 transition-colors duration-300"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-cyber-dark flex items-center justify-center text-cyber-text hover:text-cyber-neon-green hover:bg-cyber-dark/80 transition-colors duration-300"
              aria-label="Twitter Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@hackethics.com" 
              className="w-10 h-10 rounded-full bg-cyber-dark flex items-center justify-center text-cyber-text hover:text-cyber-neon-blue hover:bg-cyber-dark/80 transition-colors duration-300"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-wrap justify-center space-x-6 mb-8">
            {['Home', 'About', 'Projects', 'Certifications', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-cyber-text hover:text-cyber-neon-green transition-colors duration-300 mb-2"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-cyber-gray text-sm">
            <p className="mb-1">&copy; {currentYear} HackEthics. All rights reserved.</p>
            <p className="flex items-center justify-center">
              <Globe className="h-4 w-4 mr-1" />
              <span>Ethical Hacking & Cybersecurity Services</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
