import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import TourCard from '../components/TourCard';
import { tours } from '../data/tours';
import { Compass, MapPin, Star, Plane } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms for hero
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const blurHero = useTransform(scrollYProgress, [0, 0.4], ["blur(0px)", "blur(30px)"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  // Parallax transforms for background blobs
  const yBlob1 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const yBlob3 = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const yBlob4 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  // Horizontal scroll for decorative text
  const xTextLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xTextRight = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <SEO 
        title="Emilio's Tours | Los Mejores Tours en Medellín, Colombia"
        description="Experimenta la magia de Medellín con Emilio's Tours. Ofrecemos los mejores tours a la Comuna 13, Guatapé y tours privados por la ciudad. Más que tours, vendemos sueños."
        keywords="Tours en Medellín, mejores tours Medellín, Comuna 13 tour, Guatapé tour, tour privado Medellín, qué hacer en Medellín"
        schema={{
          "@context": "https://schema.org",
          "@type": "TourAgency",
          "name": "Emilio's Tours",
          "description": "Experiencia turística galardonada en Medellín, Colombia.",
          "url": "https://emiliostours.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Medellín",
            "addressRegion": "Antioquia",
            "addressCountry": "CO"
          }
        }}
      />

      {/* Continuous Animated Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-beige pointer-events-none">
        <motion.div 
          style={{ y: yBlob1 }}
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-coral/20 rounded-full blur-[120px] animate-blob mix-blend-multiply" 
        />
        <motion.div 
          style={{ y: yBlob2 }}
          className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-gold/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply" 
        />
        <motion.div 
          style={{ y: yBlob3 }}
          className="absolute bottom-[-20%] left-[20%] w-[1000px] h-[1000px] bg-vine/15 rounded-full blur-[150px] animate-blob animation-delay-4000 mix-blend-multiply" 
        />
        <motion.div 
          style={{ y: yBlob4 }}
          className="absolute top-[60%] right-[20%] w-[700px] h-[700px] bg-coral-light/30 rounded-full blur-[130px] animate-blob mix-blend-multiply" 
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: opacityHero, filter: blurHero }}
        className="relative h-screen overflow-hidden flex items-center justify-center"
      >
        <motion.div 
          style={{ y: yBg, scale: scaleImage }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/seed/medellin-hero/1920/1080" 
            alt="Paisaje de Medellín" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Gradient mask to blend hero into the rest of the page */}
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/50 via-coffee-dark/30 to-beige"></div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 z-10 opacity-70"
        >
          <Plane className="w-20 h-20 text-sand/60 drop-shadow-xl" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 40, 0], x: [0, 15, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/4 z-10 opacity-70"
        >
          <Compass className="w-32 h-32 text-gold/40 drop-shadow-2xl" />
        </motion.div>

        <motion.div 
          style={{ y: yText }}
          className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl text-white font-bold mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] leading-tight"
          >
            Más Que Tours.<br/>
            <span className="gradient-text drop-shadow-none">
              Vendemos Sueños.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-xl md:text-3xl text-sand/90 mb-12 max-w-3xl mx-auto drop-shadow-lg font-light"
          >
            Descubre el corazón de Medellín, Colombia. Experiencias inolvidables creadas por apasionados expertos locales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link 
              to="/medellin-tours"
              className="inline-block glass bg-coral/80 text-coffee-dark px-12 py-5 rounded-full uppercase tracking-[0.2em] font-bold hover:bg-coral transition-all duration-500 hover:scale-110 shadow-[0_0_40px_rgba(240,201,12,0.6)] relative overflow-hidden group"
            >
              <span className="relative z-10">Explorar Medellín</span>
              <div className="absolute inset-0 bg-gradient-to-r from-coral-light to-coral opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-sand/80 flex flex-col items-center gap-3"
        >
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold">Desliza para descubrir</span>
          <div className="w-px h-16 bg-gradient-to-b from-coral via-gold to-transparent"></div>
        </motion.div>
      </motion.section>

      {/* Introduction Section - Floating Glass */}
      <section className="py-32 px-6 relative z-10 overflow-hidden">
        {/* Decorative scrolling text background */}
        <motion.div 
          style={{ x: xTextLeft }}
          className="absolute top-1/4 left-0 whitespace-nowrap opacity-5 pointer-events-none z-0"
        >
          <span className="font-display text-[15rem] font-bold text-coffee-dark">MEDELLÍN COLOMBIA</span>
        </motion.div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="glass bg-white/40 p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden"
          >
            {/* Inner decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-vine via-coral to-gold opacity-50"></div>
            
            <h2 className="font-display text-4xl md:text-6xl text-coffee-dark font-bold mb-8 drop-shadow-sm">
              Bienvenidos a la Ciudad de la Eterna Primavera
            </h2>
            <p className="font-sans text-xl md:text-2xl text-coffee/80 leading-relaxed mb-12 font-light">
              Emilio's Tours es tu principal puerta de entrada para experimentar la verdadera esencia de Medellín y Antioquia. Creemos que viajar no se trata solo de ver lugares, sino de sentirlos. Desde el vibrante arte callejero de la Comuna 13 hasta las impresionantes vistas de Guatapé, nuestros guías expertos dan vida a la historia, la cultura y el alma de Colombia.
            </p>
            <div className="flex flex-wrap justify-center gap-12 mt-12">
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 rounded-full glass bg-coral/20 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-coral/30 transition-all duration-500">
                  <Star className="w-10 h-10" />
                </div>
                <span className="font-sans font-bold text-coffee-dark tracking-wider uppercase text-sm">5 Estrellas</span>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 rounded-full glass bg-vine/20 flex items-center justify-center text-vine group-hover:scale-110 group-hover:bg-vine/30 transition-all duration-500">
                  <MapPin className="w-10 h-10" />
                </div>
                <span className="font-sans font-bold text-coffee-dark tracking-wider uppercase text-sm">Expertos Locales</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-32 px-6 relative z-10 overflow-hidden">
        {/* Decorative scrolling text background */}
        <motion.div 
          style={{ x: xTextRight }}
          className="absolute top-1/3 right-0 whitespace-nowrap opacity-5 pointer-events-none z-0"
        >
          <span className="font-display text-[15rem] font-bold text-coffee-dark">EXPERIENCIAS ÚNICAS</span>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-7xl text-coffee-dark font-bold mb-6 drop-shadow-sm">
              Nuestras Experiencias Exclusivas
            </h2>
            <p className="font-sans text-coffee/70 text-xl md:text-2xl max-w-3xl mx-auto font-light">
              Viajes cuidadosamente diseñados para sumergirte en la belleza, historia y cultura de Medellín.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {tours.slice(0, 3).map((tour, index) => (
              <TourCard key={tour.id} tour={tour} index={index} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-24"
          >
            <Link 
              to="/medellin-tours"
              className="inline-block glass bg-white/50 border-2 border-coral text-gold px-10 py-4 rounded-full uppercase tracking-widest font-bold hover:bg-coral hover:text-coffee-dark transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(240,201,12,0.4)]"
            >
              Ver Todos los Tours
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SEO Content Section - Blended into the flow */}
      <section className="py-32 px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto glass bg-white/30 p-12 md:p-16 rounded-[3rem] prose prose-lg prose-headings:font-display prose-p:font-sans prose-a:text-gold"
        >
          <h2 className="text-4xl font-bold text-coffee-dark mb-6">¿Por qué elegir Emilio's Tours en Medellín?</h2>
          <p className="text-coffee/80 mb-4 font-light text-xl leading-relaxed">
            Al buscar los <strong>mejores tours en Medellín</strong>, los viajeros buscan autenticidad, seguridad y un profundo conocimiento local. En Emilio's Tours, nos enorgullecemos de ofrecer los <strong>city tours en Medellín</strong> más completos y atractivos disponibles.
          </p>
          <h3 className="text-3xl font-bold text-coffee-dark mt-12 mb-6">Las Mejores Cosas para Hacer en Medellín</h3>
          <p className="text-coffee/80 mb-4 font-light text-xl leading-relaxed">
            Ya sea que estés interesado en la inspiradora transformación que se ve en nuestro <strong>tour a la Comuna 13</strong>, los impresionantes paisajes del <strong>tour a Guatapé</strong>, o en comprender la compleja historia a través de nuestro <strong>tour de Pablo Escobar en Medellín</strong>, tenemos una experiencia diseñada para ti. También ofrecemos exclusivos <strong>tours cafeteros en Medellín</strong> y <strong>tours privados</strong> totalmente personalizables para aquellos que buscan una experiencia VIP.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
