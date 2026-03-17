import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Todos los Tours', path: '/medellin-tours' },
    { name: 'Qué Hacer', path: '/things-to-do-medellin' },
    { name: 'Blog', path: '/blog' },
    { name: 'Preguntas Frecuentes', path: '/faq' },
    { name: 'Contacto', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col text-coffee-dark overflow-x-hidden selection:bg-coral selection:text-white">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isScrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="https://i.imgur.com/DJ8zMkI.png" 
              alt="Emilio's Tours Logo" 
              className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-sm"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-sans text-sm uppercase tracking-widest hover:text-gold transition-colors relative group font-bold drop-shadow-sm"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-coral transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/medellin-tours"
              className="bg-coral/90 backdrop-blur-md text-coffee-dark px-6 py-2 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-coral transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(240,201,12,0.4)]"
            >
              Reservar Ahora
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-coffee-dark drop-shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
              className="absolute top-full left-0 w-full glass flex flex-col items-center py-8 gap-6 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-sans text-lg uppercase tracking-widest font-bold hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content with Page Transitions */}
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer - Now Glassmorphic to blend with the continuous page */}
      <footer className="relative z-10 glass-dark mt-auto border-t border-white/10 text-sand py-16 overflow-hidden">
        {/* Decorative vines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vine via-coral to-gold opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img 
                src="https://i.imgur.com/DJ8zMkI.png" 
                alt="Emilio's Tours Logo" 
                className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105 brightness-0 invert opacity-90"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="font-sans text-sand/80 max-w-md leading-relaxed mb-6">
              Más que tours. Vendemos sueños, experiencias y aventuras inolvidables en Medellín, Colombia. Descubre la magia de Antioquia con nuestros guías locales expertos.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-xl text-white mb-6 drop-shadow-md">Enlaces Rápidos</h4>
            <ul className="space-y-4 font-sans text-sand/80">
              <li><Link to="/medellin-tours" className="hover:text-gold transition-colors">Todos los Tours</Link></li>
              <li><Link to="/comuna-13-tour" className="hover:text-gold transition-colors">Tour Comuna 13</Link></li>
              <li><Link to="/guatape-tour" className="hover:text-gold transition-colors">Tour a Guatapé</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contáctanos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl text-white mb-6 drop-shadow-md">Contacto</h4>
            <ul className="space-y-4 font-sans text-sand/80">
              <li>Medellín, Antioquia</li>
              <li>Colombia</li>
              <li>hola@emiliostours.com</li>
              <li>+57 300 123 4567</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center font-sans text-sm text-sand/60">
          <p>&copy; {new Date().getFullYear()} Emilio's Tours Medellín. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
