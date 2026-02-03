'use client';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGithub, FaRobot } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress } from "react-icons/si";
import { SiMongodb, SiPostgresql } from "react-icons/si";
import { SiTailwindcss, SiKubernetes, SiGithubactions } from "react-icons/si";
import { SiOpenai, SiGooglegemini, SiLangchain, SiFastapi } from "react-icons/si";
import { TbBrain, TbRobot, TbAutomation } from "react-icons/tb";

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, ExternalLink, ChevronDown, Heart, Menu, X, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // EmailJS states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Show notification
  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 5000);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation - check if all fields are filled
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showNotification('error', 'Please enter all the required data!');
      return;
    }

    setSending(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_mpzx0da',        
         'template_cke7wv7',       
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Aniket Singh',
        },
        '5J4LnSxHgifTIoxdY'        
      );
      
      // Success notification
      showNotification('success', 'Message sent successfully! I will get back to you soon.');
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      showNotification('error', 'Failed to send message. Please try again or email me directly.');
    } finally {
      setSending(false);
    }
  };

  const projects = [
  {
    title: 'Lizard-Trade',
    description: 'A multi-frontend trading platform with real-time market data, advanced charting, and buy/sell functionalities.',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
    image: '/lizard.png',
    link: 'https://github.com/aniiketsinghh/Lizard-A-Trading-Platform'
  },
  {
    title: 'VCHUB',
    description: 'A custom version control system that performs all its basic commands locally and save it in the cloud.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Yargs', 'Tailwind CSS'],
    image: '/vc.jpg',
    link: 'https://github.com/aniiketsinghh/VCHUB'
  },
  {
    title: 'Codesia.com',
    description: 'A collaborative coding platform that allows developers to code together in real-time with chat and video features.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    image: '/codesia.png',
    link: 'https://github.com/aniiketsinghh/codesia.com'
  }
];

  const skills = {
    fullStackSkills: [
      { name: "React", color: "#61DAFB", Icon: FaReact },
      { name: "Next.js", color: "#000000", Icon: SiNextdotjs },
      { name: "TypeScript", color: "#3178C6", Icon: SiTypescript },
      { name: "JavaScript", color: "#F7DF1E", Icon: SiJavascript },
      { name: "Node.js", color: "#339933", Icon: FaNodeJs },
      { name: "Express.js", color: "#000000", Icon: SiExpress },
      { name: "MongoDB", color: "#47A248", Icon: SiMongodb },
      { name: "PostgreSQL", color: "#4169E1", Icon: SiPostgresql },
      { name: "Tailwind CSS", color: "#06B6D4", Icon: SiTailwindcss },
    ],

    devopsSkills: [
      { name: "Docker", color: "#2496ED", Icon: FaDocker },
      { name: "AWS", color: "#FF9900", Icon: FaAws },
      { name: "GitHub Actions", color: "#2088FF", Icon: SiGithubactions },
      { name: "Kubernetes", color: "#326CE5", Icon: SiKubernetes },
    ],

    aiSkills: [
      { name: "ChatGPT", color: "#10A37F", Icon: SiOpenai },
      { name: "Claude", color: "#CC785C", Icon: TbBrain },
      { name: "Gemini", color: "#8E75FF", Icon: SiGooglegemini },
      { name: "OpenAI API", color: "#412991", Icon: SiOpenai },
      { name: "LangChain", color: "#1C3C3C", Icon: SiLangchain },
      { name: "FastAPI", color: "#009688", Icon: SiFastapi },
      { name: "AI Automation", color: "#FF6B6B", Icon: TbAutomation },
      { name: "Agentic AI", color: "#4ECDC4", Icon: TbRobot },
      { name: "AI Models", color: "#9B59B6", Icon: FaRobot },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      {/* Notification Toast - ABOVE NAVBAR */}
      {notification.show && (
        <div className={`fixed top-4 left-4 right-4 sm:left-auto sm:right-4 z-[9999] max-w-md sm:w-96 animate-slideIn ${
          notification.type === 'success' ? 'bg-green-900/90' : 'bg-red-900/90'
        } backdrop-blur-sm border ${
          notification.type === 'success' ? 'border-green-700' : 'border-red-700'
        } rounded-lg shadow-2xl p-4`}>
          <div className="flex items-start gap-3">
            {notification.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium break-words ${
                notification.type === 'success' ? 'text-green-100' : 'text-red-100'
              }`}>
                {notification.message}
              </p>
            </div>
            <button 
              onClick={() => setNotification({ show: false, type: '', message: '' })}
              className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gray-500/10"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-2xl shadow-gray-900/50' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Aniket Singh
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 lg:gap-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-gray-300 text-sm lg:text-base ${
                    activeSection === item.toLowerCase() ? 'text-gray-300' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-zinc-800/50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-sm border-t border-zinc-800/50">
            <div className="px-4 py-2 space-y-1">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'bg-zinc-800/50 text-gray-300' 
                      : 'hover:bg-zinc-800/30'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 pt-20 sm:pt-0">
        <div className="text-center z-10 animate-fadeIn max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            Hi, I am <span className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
              Aniket Singh
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-8">
            Full Stack & Gen AI Developer
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            I build exceptional digital experiences that combine beautiful design with powerful functionality. 
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 sm:px-8 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg shadow-black/50"
            >
              View My Work <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 sm:px-8 py-3 border-2 border-zinc-700 hover:bg-zinc-800/50 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Contact Me <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          <div className="flex gap-4 sm:gap-6 justify-center">
            <a href="https://github.com/aniiketsinghh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors p-2">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/aniketsinghdev07" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors p-2">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="mailto:aniketsingh2004ak@gmail.com" className="hover:text-gray-300 transition-colors p-2">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img 
                src="/aboutme.jpg"
                alt="Developer workspace"
                className="relative rounded-lg shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(82,82,82,0.5)] w-full"
              />
            </div>
            <div className="space-y-4 sm:space-y-6 text-gray-300 order-1 md:order-2">
              <p className="text-base sm:text-lg leading-relaxed">
                I'm a passionate GEN-AI full-stack developer with a keen eye for creating elegant solutions to complex problems. 
                With expertise in modern web technologies, I specialize in building scalable applications that deliver 
                exceptional user experiences.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or 
                sharing knowledge with the developer community. I'm always excited to take on new challenges and collaborate 
                on meaningful projects.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 rounded-lg transition-all transform hover:scale-105 font-medium text-sm sm:text-base w-full sm:w-auto justify-center shadow-lg shadow-black/50"
              >
                Hire Me as a Freelancer
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-4 sm:px-6 py-16 sm:py-20">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center">Projects</h2>
    <p className="text-gray-400 text-center mb-10 sm:mb-16 text-sm sm:text-base">Here are some of my recent works</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {projects.map((project, index) => (
        <div 
          key={index}
          className="group bg-zinc-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_20px_60px_rgba(39,39,42,0.5)]"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative overflow-hidden">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-48 object-cover transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
            <div className="mb-3 sm:mb-4">
              <div className="text-xs text-gray-400 font-semibold mb-2">TECH STACK</div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 sm:px-3 py-1 bg-zinc-800/50 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 w-full bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition-colors shadow-md shadow-black/50"
            >
              <Code className="w-4 h-4" /> View Code
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* GitHub CTA Section */}
      <section className="px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-zinc-900/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-zinc-800 hover:border-zinc-600 transition-all">
            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
              These are just a few highlights! Want to see more of my work?
            </p>
            <a 
              href="https://github.com/aniiketsinghh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all transform hover:scale-105 font-medium text-sm sm:text-base shadow-lg shadow-black/50"
            >
              <FaGithub className="w-5 h-5" />
              Visit My GitHub for More Projects
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Skills</h2>
            <p className="text-gray-400 text-sm sm:text-base">Technologies & tools I actually work with</p>
          </div>

          {/* Full Stack Skills */}
          <div className="mb-10 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-8 text-gray-300">Full-Stack Development</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.fullStackSkills.map((skill, index) => {
                const IconComponent = skill.Icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-semibold text-xs sm:text-sm transition-transform hover:scale-105"
                    style={{ 
                      backgroundColor: skill.color,
                      color: skill.color === '#F7DF1E' || skill.color === '#339933' ? '#000000' : '#FFFFFF'
                    }}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DevOps Skills */}
          <div className="mb-10 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-8 text-gray-300">DevOps & Cloud</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.devopsSkills.map((skill, index) => {
                const IconComponent = skill.Icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-semibold text-xs sm:text-sm transition-transform hover:scale-105"
                    style={{ 
                      backgroundColor: skill.color,
                      color: '#FFFFFF'
                    }}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI & GenAI Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-8 text-gray-300">AI / Automation / Agentic Systems</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.aiSkills.map((skill, index) => {
                const IconComponent = skill.Icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-semibold text-xs sm:text-sm transition-transform hover:scale-105"
                    style={{ 
                      backgroundColor: skill.color,
                      color: '#FFFFFF'
                    }}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center">Contact Me</h2>
          <p className="text-gray-400 text-center mb-10 sm:mb-16 text-sm sm:text-base">Let's work together on your next project</p>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out!
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-gray-400">Email</div>
                    <div className="text-sm sm:text-base break-all">aniketsingh2004ak@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400">Phone</div>
                    <div className="text-sm sm:text-base">+91 8949171874</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400">Location</div>
                    <div className="text-sm sm:text-base">Rajasthan, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/30 backdrop-blur-sm rounded-xl p-5 sm:p-8 border border-zinc-800">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={sending}
                  className="w-full py-2.5 sm:py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all transform hover:scale-105 text-sm sm:text-base font-medium shadow-lg shadow-black/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-zinc-800/50 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center space-y-4 sm:space-y-6">
            {/* Call to Action */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-gray-400 text-sm sm:text-lg px-4">
                Looking for a skilled developer to bring your ideas to life?
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6 justify-center pt-2 sm:pt-4">
              <a href="https://github.com/aniiketsinghh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors p-2" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aniketsinghdev07" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors p-2" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:aniketsingh2004ak@gmail.com" className="hover:text-gray-300 transition-colors p-2" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-gray-300 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 fill-red-500 animate-pulse" />
                <span>by</span>
              </div>
              <span className="font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                Aniket Singh
              </span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        /* Prevent horizontal scroll on mobile */
        html, body {
          overflow-x: hidden;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Better touch targets for mobile */
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </div>
  );
}