import { Link, useLocation } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Servicios', path: '/services' },
    { name: 'Equipo', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contact' },
  ];

  return (
    <nav className={clsx(
      'fixed top-0 w-full z-50 transition-all duration-500',
      scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-fuchsia-600 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Scissors className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">VOGUE<span className="text-fuchsia-500">.</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                'text-sm font-semibold tracking-wide transition-colors duration-300 relative group',
                location.pathname === link.path ? 'text-fuchsia-400' : 'text-slate-300 hover:text-white'
              )}
            >
              {link.name}
              <span className={clsx(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all duration-300 group-hover:w-full",
                location.pathname === link.path ? "w-full" : ""
              )}></span>
            </Link>
          ))}
          <Link to="/contact" className="px-6 py-2 border border-fuchsia-500/50 rounded-full text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white transition-all duration-300">
            Reservar Cita
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-lg font-medium text-slate-300 hover:text-fuchsia-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};