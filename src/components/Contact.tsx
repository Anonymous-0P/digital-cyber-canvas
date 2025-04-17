
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully",
        description: "Thanks for reaching out! I'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-cyber-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">
          <span className="glitch-effect" data-text="Contact Me">Contact Me</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Card */}
          <div className="lg:col-span-1">
            <div className="terminal-box h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-cyber-neon-green mr-2"></div>
                  <span className="text-xs text-cyber-gray">contact_info.sh</span>
                </div>
                
                <h3 className="terminal-text text-lg mb-6">
                  &gt; Get In Touch<span className="animate-cursor-blink">_</span>
                </h3>
                
                <p className="text-cyber-text/80 mb-8">
                  Have a project in mind or want to discuss cybersecurity needs? 
                  Feel free to reach out using the form or direct contact methods.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-cyber-text/80">
                  <Mail className="h-5 w-5 text-cyber-neon-blue mr-3" />
                  <span>contact@hackethics.com</span>
                </div>
                <div className="flex items-center text-cyber-text/80">
                  <MessageSquare className="h-5 w-5 text-cyber-neon-blue mr-3" />
                  <span>Available for consultations</span>
                </div>
                <div className="mt-6 pt-6 border-t border-cyber-neon-green/20">
                  <p className="text-xs text-cyber-gray">
                    All messages are encrypted and handled securely.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-cyber-text mb-2 font-mono text-sm">NAME</label>
                  <div className={`relative ${errors.name ? 'animate-shake' : ''}`}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-cyber-darker border ${
                        errors.name ? 'border-red-500' : 'border-cyber-neon-green/30'
                      } rounded-md px-4 py-3 text-cyber-text focus:outline-none focus:border-cyber-neon-green transition-colors`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <div className="absolute right-3 top-3 text-red-500">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                  {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                </div>
                
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-cyber-text mb-2 font-mono text-sm">EMAIL</label>
                  <div className={`relative ${errors.email ? 'animate-shake' : ''}`}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-cyber-darker border ${
                        errors.email ? 'border-red-500' : 'border-cyber-neon-green/30'
                      } rounded-md px-4 py-3 text-cyber-text focus:outline-none focus:border-cyber-neon-green transition-colors`}
                      placeholder="Your Email"
                    />
                    {errors.email && (
                      <div className="absolute right-3 top-3 text-red-500">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                  {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>
              
              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-cyber-text mb-2 font-mono text-sm">SUBJECT</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-cyber-darker border border-cyber-neon-green/30 rounded-md px-4 py-3 text-cyber-text focus:outline-none focus:border-cyber-neon-green transition-colors"
                  placeholder="Subject (Optional)"
                />
              </div>
              
              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-cyber-text mb-2 font-mono text-sm">MESSAGE</label>
                <div className={`relative ${errors.message ? 'animate-shake' : ''}`}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full bg-cyber-darker border ${
                      errors.message ? 'border-red-500' : 'border-cyber-neon-green/30'
                    } rounded-md px-4 py-3 text-cyber-text focus:outline-none focus:border-cyber-neon-green transition-colors`}
                    placeholder="Your Message"
                  ></textarea>
                  {errors.message && (
                    <div className="absolute right-3 top-3 text-red-500">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                  )}
                </div>
                {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
              </div>
              
              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center space-x-2 px-6 py-3 bg-cyber-neon-green text-cyber-darker rounded-md font-medium transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-cyber-neon-green/90'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-cyber-darker border-t-transparent rounded-full"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
