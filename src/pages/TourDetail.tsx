import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import SEO from '../components/SEO';
import { tours } from '../data/tours';
import { Clock, DollarSign, CheckCircle2, ArrowLeft, Calendar } from 'lucide-react';

export default function TourDetail() {
  const { slug } = useParams<{ slug: string }>();
  const tour = tours.find(t => t.slug === slug);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  if (!tour) {
    return <Navigate to="/medellin-tours" replace />;
  }

  return (
    <div ref={containerRef} className="bg-beige min-h-screen">
      <SEO 
        title={`${tour.title} | Emilio's Tours Medellín`}
        description={tour.description}
        keywords={`${tour.title}, ${tour.slug.replace(/-/g, ' ')}, Tours en Medellín, Colombia`}
        url={`https://emiliostours.com/${tour.slug}`}
        image={tour.image}
        schema={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": tour.title,
          "description": tour.description,
          "provider": {
            "@type": "TourAgency",
            "name": "Emilio's Tours"
          },
          "offers": {
            "@type": "Offer",
            "price": tour.price.replace(/[^0-9.]/g, ''),
            "priceCurrency": "USD"
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={tour.image} 
            alt={tour.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-beige via-coffee-dark/60 to-coffee-dark/30"></div>
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/medellin-tours" className="inline-flex items-center gap-2 text-sand/80 hover:text-coral transition-colors mb-8 font-sans uppercase tracking-widest text-sm font-bold">
              <ArrowLeft className="w-4 h-4" /> Volver a los Tours
            </Link>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl text-white font-bold mb-4 drop-shadow-xl"
          >
            {tour.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-xl md:text-2xl text-coral-light drop-shadow-md tracking-wide font-light"
          >
            {tour.tagline}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 relative z-20 -mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Details */}
          <div className="lg:col-span-2 glass bg-white/60 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/50">
            <h2 className="font-display text-4xl text-coffee-dark font-bold mb-8">Sobre el Tour</h2>
            <div className="prose prose-lg prose-p:font-sans prose-p:text-coffee/80 max-w-none">
              <p className="text-xl leading-relaxed mb-8 font-light">{tour.description}</p>
              
              <h3 className="font-display text-3xl text-coffee-dark mt-12 mb-6">Lo Más Destacado</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                {tour.highlights.map((highlight, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-coffee/80 font-sans"
                  >
                    <CheckCircle2 className="w-6 h-6 text-vine shrink-0 mt-0.5" />
                    <span className="text-lg font-light">{highlight}</span>
                  </motion.li>
                ))}
              </ul>

              {/* SEO Content Injection based on slug */}
              {slug === 'comuna-13-tour' && (
                <div className="mt-16 pt-8 border-t border-coffee/10">
                  <h2 className="font-display text-3xl text-coffee-dark mb-4">¿Es seguro el tour a la Comuna 13?</h2>
                  <p className="font-light">Sí, absolutamente. Hoy en día, la Comuna 13 es una de las áreas más seguras y vibrantes para los turistas en Medellín. Nuestros guías locales son profundamente respetados en la comunidad, asegurando una experiencia segura, acogedora y auténtica.</p>
                </div>
              )}
              {slug === 'guatape-tour' && (
                <div className="mt-16 pt-8 border-t border-coffee/10">
                  <h2 className="font-display text-3xl text-coffee-dark mb-4">¿Cuánto dura el tour a Guatapé?</h2>
                  <p className="font-light">El tour a Guatapé es una experiencia de día completo, que generalmente dura alrededor de 10 horas. Esto incluye el tiempo de viaje desde Medellín, subir la piedra de El Peñol, explorar el colorido pueblo de Guatapé y disfrutar de un almuerzo tradicional colombiano.</p>
                </div>
              )}
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="sticky top-32 glass-dark bg-coffee-dark/80 p-10 rounded-[3rem] shadow-2xl border border-white/10 text-sand"
            >
              <h3 className="font-display text-3xl text-white mb-8 border-b border-white/10 pb-6">Detalles del Tour</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-sand/60 uppercase tracking-wider font-bold">Duración</p>
                    <p className="font-sans text-xl font-light">{tour.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-sand/60 uppercase tracking-wider font-bold">Precio</p>
                    <p className="font-sans text-xl font-light">{tour.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-vine/20 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-vine" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-sand/60 uppercase tracking-wider font-bold">Disponibilidad</p>
                    <p className="font-sans text-xl font-light">Salidas Diarias</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-coral text-white py-4 rounded-full uppercase tracking-widest font-bold text-lg hover:bg-coral-light transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,142,101,0.5)] relative overflow-hidden group">
                <span className="relative z-10">Reservar Ahora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-coral-light to-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <p className="text-center font-sans text-sm text-sand/50 mt-6 font-light">
                No se requiere pago para reservar.
              </p>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
