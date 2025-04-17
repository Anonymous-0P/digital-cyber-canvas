
import React, { useEffect } from 'react';
import { Award, Calendar, ChevronRight } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: 'December 2021',
    description: 'Advanced certification in security tools and techniques used by ethical hackers.',
    icon: <Award className="h-10 w-10" />
  },
  {
    id: 2,
    title: 'Offensive Security Certified Professional (OSCP)',
    issuer: 'Offensive Security',
    date: 'March 2022',
    description: 'Hands-on penetration testing certification requiring successful exploitation of vulnerable systems.',
    icon: <Award className="h-10 w-10" />
  },
  {
    id: 3,
    title: 'Certified Information Systems Security Professional (CISSP)',
    issuer: 'ISC²',
    date: 'August 2023',
    description: 'Advanced-level certification for IT professionals responsible for designing and managing cybersecurity programs.',
    icon: <Award className="h-10 w-10" />
  },
  {
    id: 4,
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: 'May 2020',
    description: 'Baseline cybersecurity certification covering network security, compliance, and operations.',
    icon: <Award className="h-10 w-10" />
  }
];

const Certifications = () => {
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

    document.querySelectorAll('.cert-item').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.cert-item').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="certifications" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">
          <span className="glitch-effect" data-text="Certifications">Certifications</span>
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line for timeline */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-cyber-neon-green/30"></div>
          
          {/* Certification items */}
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className={`cert-item opacity-0 mb-12 md:mb-24 relative flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cyber-darker border-2 border-cyber-neon-green z-10 animate-pulse-glow"></div>
              
              {/* Card */}
              <div className={`ml-10 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="card-gradient border border-cyber-neon-green/50 rounded-lg p-6 hover:shadow-lg hover:shadow-cyber-neon-green/20 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-cyber-neon-green">{cert.icon}</div>
                    <div className="flex items-center text-sm text-cyber-gray">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-cyber-neon-blue mb-2 font-mono">{cert.title}</h3>
                  <p className="text-cyber-text/90 text-sm mb-3">Issued by: {cert.issuer}</p>
                  <p className="text-cyber-text/70">{cert.description}</p>
                  
                  <button className="mt-4 flex items-center text-cyber-neon-green text-sm font-mono hover:underline">
                    <span>View credential</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
