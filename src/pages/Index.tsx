
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "HackEthics - Ethical Hacker & Cybersecurity Professional";
    
    // Initialize any scroll animations or observers here if needed
    const handleScrollAnimations = () => {
      const reveals = document.querySelectorAll('.reveal:not(.animate-fade-in-up)');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('animate-fade-in-up');
          el.classList.remove('opacity-0');
        }
      });
    };
    
    window.addEventListener('scroll', handleScrollAnimations);
    // Call once to check if elements are already in view on load
    handleScrollAnimations();
    
    return () => window.removeEventListener('scroll', handleScrollAnimations);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
