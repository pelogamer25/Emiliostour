import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Guía Definitiva para Visitar la Comuna 13",
    excerpt: "Descubre la historia de transformación, el arte urbano y los mejores consejos para disfrutar al máximo tu visita a la Comuna 13 de Medellín.",
    image: "https://picsum.photos/seed/comuna13blog/800/500",
    date: "12 Mar 2026",
    author: "Emilio",
    category: "Cultura"
  },
  {
    id: 2,
    title: "5 Platos Típicos que Debes Probar en Antioquia",
    excerpt: "Desde la famosa Bandeja Paisa hasta las arepas de chócolo. Un viaje gastronómico por los sabores más auténticos de nuestra región.",
    image: "https://picsum.photos/seed/foodblog/800/500",
    date: "05 Mar 2026",
    author: "María",
    category: "Gastronomía"
  },
  {
    id: 3,
    title: "¿Qué empacar para tu viaje a Medellín?",
    excerpt: "La Ciudad de la Eterna Primavera tiene un clima único. Te contamos exactamente qué ropa y accesorios necesitas para estar cómodo.",
    image: "https://picsum.photos/seed/packing/800/500",
    date: "28 Feb 2026",
    author: "Carlos",
    category: "Consejos de Viaje"
  },
  {
    id: 4,
    title: "La Historia Detrás de la Piedra del Peñol en Guatapé",
    excerpt: "Conoce el origen geológico y las leyendas locales que rodean a este impresionante monolito de 220 metros de altura.",
    image: "https://picsum.photos/seed/penol/800/500",
    date: "15 Feb 2026",
    author: "Emilio",
    category: "Naturaleza"
  },
  {
    id: 5,
    title: "Aventura Extrema: Parapente y Cuatrimotos",
    excerpt: "Si buscas adrenalina, Medellín y sus alrededores ofrecen los mejores paisajes para volar en parapente o recorrer senderos en cuatrimoto.",
    image: "https://picsum.photos/seed/adventure/800/500",
    date: "02 Feb 2026",
    author: "Juan",
    category: "Aventura"
  },
  {
    id: 6,
    title: "El Renacer de Medellín: De los 90s a la Innovación",
    excerpt: "Un análisis profundo de cómo nuestra ciudad superó su época más oscura para convertirse en un referente mundial de innovación y urbanismo social.",
    image: "https://picsum.photos/seed/medellinrenacer/800/500",
    date: "20 Ene 2026",
    author: "Emilio",
    category: "Historia"
  }
];

export default function Blog() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yBlob1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div ref={containerRef} className="bg-beige min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <SEO 
        title="Blog de Viajes | Emilio's Tours Medellín"
        description="Lee nuestros últimos artículos sobre qué hacer en Medellín, consejos de viaje, historia, cultura y gastronomía colombiana."
        keywords="blog Medellín, consejos viaje Medellín, historia Comuna 13, comida típica Antioquia"
        url="https://emiliostours.com/blog"
      />

      {/* Decorative Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: yBlob1 }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-coral/10 rounded-full blur-[120px] animate-blob mix-blend-multiply" 
        />
        <motion.div 
          style={{ y: yBlob2 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply" 
        />
      </div>

      {/* Decorative scrolling text background */}
      <motion.div 
        style={{ x: xText }}
        className="absolute top-40 left-0 whitespace-nowrap opacity-5 pointer-events-none z-0"
      >
        <span className="font-display text-[12rem] font-bold text-coffee-dark">BLOG DE VIAJES</span>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-7xl text-coffee-dark font-bold mb-6">
            Nuestro Blog
          </h1>
          <p className="font-sans text-xl text-coffee/80 max-w-2xl mx-auto leading-relaxed font-light">
            Historias, consejos y guías locales para que vivas la mejor experiencia en Medellín y Antioquia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group glass bg-white/60 rounded-[2.5rem] overflow-hidden border border-coffee/10 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
                  <span className="font-sans text-xs font-bold text-gold uppercase tracking-wider">{post.category}</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-coffee/60 text-sm font-sans mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h2 className="font-display text-2xl text-coffee-dark font-bold mb-4 group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="font-sans text-coffee/80 leading-relaxed mb-8 flex-grow font-light">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm hover:text-gold transition-colors group/link mt-auto"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
