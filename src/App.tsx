import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Cpu, Database, Layout, Server, Send, Menu, X, Quote } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Feedback', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-neon-cyan text-glow-cyan"
        >
          PRAYAS<span className="text-neon-purple">.EXE</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-neon-cyan transition-colors mx-4"
            >
              {link.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-6 py-2 border border-neon-purple text-neon-purple rounded-sm text-sm uppercase tracking-widest hover:bg-neon-purple hover:text-white transition-all duration-300 neon-shadow-purple"
          >
            Resume
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-neon-cyan" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass absolute top-full left-0 w-full p-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg uppercase tracking-widest hover:text-neon-cyan"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-3 border border-neon-purple text-neon-purple rounded-sm uppercase tracking-widest">
            Resume
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: mousePos.x * 50, 
            y: mousePos.y * 50,
            rotate: mousePos.x * 10
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: mousePos.x * -50, 
            y: mousePos.y * -50,
            rotate: mousePos.y * 10
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-neon-cyan tracking-[0.5em] uppercase text-xs mb-4"
        >
          System Initialized // MERN Stack Developer
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none"
        >
          BUILDING THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">FUTURE</span> WITH MERN
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg mb-10"
        >
          Crafting high-performance web applications with obsidian precision and neon soul. 
          Specializing in scalable full-stack solutions.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-4 bg-neon-cyan text-obsidian font-bold uppercase tracking-widest hover:bg-white transition-all neon-shadow-cyan">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-4 border border-white/20 hover:border-neon-purple transition-all uppercase tracking-widest">
            Establish Connection
          </a>
        </motion.div>
      </div>

      {/* Digital Rain Overlay */}
      <div className="digital-rain" />
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, color: 'from-green-500/20 to-green-500/5', borderColor: 'border-green-500/30' },
    { name: 'Express', icon: <Server className="w-8 h-8" />, color: 'from-gray-500/20 to-gray-500/5', borderColor: 'border-gray-500/30' },
    { name: 'React', icon: <Layout className="w-8 h-8" />, color: 'from-neon-cyan/20 to-neon-cyan/5', borderColor: 'border-neon-cyan/30' },
    { name: 'Node.js', icon: <Cpu className="w-8 h-8" />, color: 'from-neon-purple/20 to-neon-purple/5', borderColor: 'border-neon-purple/30' },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">CORE_MODULES</h2>
            <div className="h-1 w-24 bg-neon-cyan" />
          </div>
          <p className="text-gray-500 font-mono text-sm mt-4 md:mt-0">STATUS: OPTIMIZED</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group p-8 glass border-t-2 ${skill.borderColor} overflow-hidden hover:neon-shadow-cyan transition-all duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="scanline group-hover:block hidden" />
              
              <div className="relative z-10">
                <div className="text-neon-cyan mb-6 group-hover:scale-110 transition-transform duration-500">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold tracking-widest uppercase mb-2">{skill.name}</h3>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '90%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-neon-cyan"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'DEV_CONNECT',
      desc: 'A professional social network for developers to showcase portfolios, share code snippets, and collaborate on open-source projects.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'https://picsum.photos/seed/devconnect/800/600',
    },
    {
      title: 'TASK_PULSE',
      desc: 'Real-time project management suite featuring interactive Kanban boards, team performance analytics, and integrated chat systems.',
      tech: ['Next.js', 'Express', 'PostgreSQL', 'Redux'],
      image: 'https://picsum.photos/seed/taskpulse/800/600',
    },
    {
      title: 'ECO_TRACKER',
      desc: 'Full-stack sustainability platform that calculates personal carbon footprints and provides data-driven insights for eco-friendly living.',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      image: 'https://picsum.photos/seed/ecotracker/800/600',
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">DATA_TERMINALS</h2>
          <p className="text-neon-purple font-mono text-sm tracking-widest uppercase">Executing stored procedures...</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Terminal Frame */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 blur"></div>
              
              <div className="relative bg-obsidian border border-white/10 p-1 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold tracking-tighter mb-2 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 h-12">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 border border-white/10 text-gray-500 uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="flex-1 py-3 bg-white/5 border border-white/10 hover:border-neon-cyan hover:text-neon-cyan transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold">
                      <ExternalLink size={14} /> Live Demo
                    </button>
                    <button className="p-3 bg-white/5 border border-white/10 hover:border-neon-purple hover:text-neon-purple transition-all">
                      <Github size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const feedbacks = [
    {
      name: "Alex Sterling",
      role: "CEO, Cyberdyne Systems",
      text: "The MERN stack implementation exceeded our expectations. The performance optimization is unmatched in the sector.",
      avatar: "https://picsum.photos/seed/client1/100/100"
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer, Ghost Protocol",
      text: "Prayas delivered a high-security interface that feels like it's from 2077. Exceptional attention to detail.",
      avatar: "https://picsum.photos/seed/client2/100/100"
    },
    {
      name: "Marcus Vane",
      role: "Product Manager, Neuralink",
      text: "Smooth animations and robust backend logic. A true full-stack wizard who understands the future of web tech.",
      avatar: "https://picsum.photos/seed/client3/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-right">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">CLIENT_FEEDBACK</h2>
          <p className="text-neon-cyan font-mono text-sm tracking-widest uppercase">Decrypted communications...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 border-l-4 border-neon-cyan relative group hover:neon-shadow-cyan transition-all"
            >
              <Quote className="absolute top-4 right-4 text-neon-cyan/20 group-hover:text-neon-cyan/50 transition-colors" size={40} />
              <p className="text-gray-300 italic mb-8 relative z-10">"{f.text}"</p>
              <div className="flex items-center gap-4">
                <img src={f.avatar} alt={f.name} className="w-12 h-12 rounded-full border border-neon-cyan p-0.5" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="text-neon-cyan font-bold tracking-widest text-sm uppercase">{f.name}</h4>
                  <p className="text-gray-500 text-[10px] uppercase">{f.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
          >
            ESTABLISH_CONNECTION
          </motion.h2>
          <p className="text-gray-400 font-mono">Awaiting incoming transmission...</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass p-8 md:p-12 border-t-4 border-neon-purple neon-shadow-purple"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Sender_Identity</label>
                <input 
                  type="text" 
                  placeholder="NAME"
                  className="w-full bg-black/50 border border-white/10 p-4 focus:border-neon-cyan focus:outline-none transition-colors text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Return_Address</label>
                <input 
                  type="email" 
                  placeholder="EMAIL"
                  className="w-full bg-black/50 border border-white/10 p-4 focus:border-neon-cyan focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Transmission_Payload</label>
              <textarea 
                rows={5}
                placeholder="YOUR MESSAGE..."
                className="w-full bg-black/50 border border-white/10 p-4 focus:border-neon-cyan focus:outline-none transition-colors text-sm resize-none"
              />
            </div>
            <button className="w-full py-4 bg-neon-purple text-white font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-obsidian transition-all flex items-center justify-center gap-3 group">
              Send Signal <Send size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </motion.div>

        <div className="mt-16 flex justify-center gap-8">
          {[
            { icon: <Github />, label: 'GITHUB' },
            { icon: <Linkedin />, label: 'LINKEDIN' },
            { icon: <Twitter />, label: 'TWITTER' },
            { icon: <Mail />, label: 'EMAIL' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href="#"
              whileHover={{ y: -5, color: '#00f3ff' }}
              className="flex flex-col items-center gap-2 text-gray-500 transition-colors"
            >
              <div className="p-3 border border-white/10 rounded-full hover:border-neon-cyan transition-colors">
                {social.icon}
              </div>
              <span className="text-[8px] font-mono tracking-widest">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center">
      <p className="text-gray-600 text-[10px] font-mono tracking-widest uppercase">
        © 2024 PRAYAS CHAKMA // ALL RIGHTS RESERVED // DESIGNED FOR THE FUTURE
      </p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Global Grainy Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>
  );
}
