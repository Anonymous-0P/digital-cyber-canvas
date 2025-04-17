
import React, { useState } from 'react';
import { Code, Server, Shield, ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'SecureScanner',
    description: 'An automated web vulnerability scanner with detailed reporting capabilities. Identifies OWASP Top 10 vulnerabilities with minimal false positives.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['Python', 'JavaScript', 'Docker'],
    category: 'Tool',
    icon: <Code className="h-6 w-6" />,
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'NetworkGuardian',
    description: 'Real-time network traffic analyzer that detects suspicious patterns and potential intrusions. Leverages machine learning to minimize false alerts.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
    technologies: ['C++', 'Python', 'TensorFlow'],
    category: 'Tool',
    icon: <Server className="h-6 w-6" />,
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'HackTheBox Challenges',
    description: 'Documented solutions for 50+ HackTheBox challenges, demonstrating expertise in various exploitation techniques and vulnerability assessments.',
    image: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    technologies: ['CTF', 'Penetration Testing', 'Exploitation'],
    category: 'CTF',
    icon: <Shield className="h-6 w-6" />,
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'CryptoShield',
    description: 'Open-source encryption tool for secure communications and file storage. Features include AES-256 encryption, zero-knowledge architecture, and cross-platform support.',
    image: 'https://images.unsplash.com/photo-1639322537231-2fefa6ac2389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    technologies: ['Rust', 'WebAssembly', 'React'],
    category: 'Tool',
    icon: <Code className="h-6 w-6" />,
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);
  
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  return (
    <section id="projects" className="py-20 bg-cyber-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">
          <span className="glitch-effect" data-text="Projects">Projects</span>
        </h2>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-10 flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md font-mono text-sm transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-cyber-neon-green text-cyber-background' 
                  : 'bg-cyber-dark text-cyber-text hover:border-cyber-neon-green border border-cyber-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="card-gradient border border-cyber-dark hover:border-cyber-neon-green rounded-lg overflow-hidden transition-all duration-500 group hover:shadow-lg hover:shadow-cyber-neon-green/10 reveal opacity-0"
            >
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-background to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-cyber-darker/80 rounded-full p-2 border border-cyber-neon-green z-20">
                  <span className="text-cyber-neon-green">{project.icon}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyber-neon-blue mb-2 font-mono">{project.title}</h3>
                <p className="text-cyber-text/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="badge">{tech}</span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github} 
                    className="flex items-center text-cyber-text hover:text-cyber-neon-green transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center text-cyber-text hover:text-cyber-neon-blue transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
