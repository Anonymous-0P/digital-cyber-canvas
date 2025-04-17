
import React, { useEffect } from 'react';
import { Shield, Lock, UserCheck, Server, RefreshCw, Search } from 'lucide-react';

const skills = [
  { name: 'Penetration Testing', level: 95, icon: <Shield className="h-5 w-5" /> },
  { name: 'Network Security', level: 90, icon: <Server className="h-5 w-5" /> },
  { name: 'Vulnerability Assessment', level: 85, icon: <Search className="h-5 w-5" /> },
  { name: 'Red Teaming', level: 80, icon: <UserCheck className="h-5 w-5" /> },
  { name: 'Security Auditing', level: 85, icon: <RefreshCw className="h-5 w-5" /> },
  { name: 'Cryptography', level: 75, icon: <Lock className="h-5 w-5" /> },
];

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">
          <span className="glitch-effect" data-text="About Me">About Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Profile Image and Bio */}
          <div className="reveal opacity-0 flex flex-col justify-center">
            <div className="relative mb-8 mx-auto lg:mx-0 w-64 h-64 rounded-lg overflow-hidden border-2 border-cyber-neon-green">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon-blue/20 to-cyber-neon-green/20"></div>
              <img 
                src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                alt="Ethical Hacker Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 border-t-2 border-l-2 border-cyber-neon-green w-4 h-4"></div>
              <div className="absolute top-0 right-0 border-t-2 border-r-2 border-cyber-neon-green w-4 h-4"></div>
              <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-cyber-neon-green w-4 h-4"></div>
              <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-cyber-neon-green w-4 h-4"></div>
            </div>
            
            <div className="terminal-box mt-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-cyber-neon-green mr-2"></div>
                <span className="text-xs text-cyber-gray">user_profile.exe</span>
              </div>
              <p className="terminal-text text-sm">
                &gt; <span className="text-cyber-text">Name:</span> John Doe<br />
                &gt; <span className="text-cyber-text">Location:</span> San Francisco, CA<br />
                &gt; <span className="text-cyber-text">Experience:</span> 8+ years<br />
                &gt; <span className="text-cyber-text">Current_Status:</span> Available for hire_
              </p>
            </div>
          </div>
          
          {/* Bio and Skills */}
          <div className="reveal opacity-0 delay-200">
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-mono text-cyber-neon-blue mb-4">Background</h3>
              <p className="text-cyber-text/80 mb-4">
                With over 8 years of experience in cybersecurity, I specialize in identifying and 
                mitigating security vulnerabilities across diverse digital infrastructures. My approach 
                combines technical expertise with strategic insight to strengthen security postures.
              </p>
              <p className="text-cyber-text/80">
                As an ethical hacker, I've helped organizations protect their critical assets by 
                emulating real-world attack scenarios. My commitment is to stay ahead of emerging 
                threats and employ cutting-edge techniques to safeguard your digital environment.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-mono text-cyber-neon-blue mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="reveal opacity-0" style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <span className="text-cyber-neon-green mr-2">{skill.icon}</span>
                        <span className="text-cyber-text">{skill.name}</span>
                      </div>
                      <span className="text-cyber-neon-green">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
