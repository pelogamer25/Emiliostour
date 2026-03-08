import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const activities = [
  {
    title: "Viajar en el Metrocable",
    description: "El innovador sistema de transporte público de Medellín ofrece impresionantes vistas panorámicas de la ciudad enclavada en el Valle de Aburrá. Es una experiencia esencial para cualquier visitante.",
    image: "https://picsum.photos/seed/metrocable/800/600",
    link: "/medellin-city-tour"
  },
  {
    title: "Explorar la Comuna 13",
    description: "Alguna vez considerado peligroso, este vecindario es ahora un vibrante centro de arte callejero, cultura hip-hop y resiliencia comunitaria. Las escaleras mecánicas al aire libre son una maravilla de la planificación urbana.",
    image: "https://picsum.photos/seed/comuna13art/800/600",
    link: "/comuna-13-tour"
  },
  {
    title: "Visitar la Plaza Botero",
    description: "Ubicada en el corazón del centro de la ciudad, esta plaza cuenta con 23 esculturas de bronce más grandes que la vida real donadas por el artista más famoso de Medellín, Fernando Botero.",
    image: "https://picsum.photos/seed/botero/800/600",
    link: "/medellin-city-tour"
  },
  {
    title: "Excursión de un Día a Guatapé",
    description: "A solo dos horas de distancia, sube la enorme piedra de El Peñol para disfrutar de increíbles vistas de los lagos artificiales, luego pasea por las coloridas calles adornadas con zócalos del pueblo de Guatapé.",
    image: "https://picsum.photos/seed/guatapetown/800/600",
    link: "/guatape-tour"
  },
  {
    title: "Descubrir el Café Colombiano",
    description: "Antioquia es una de las principales regiones productoras de café. Visita una finca tradicional para aprender sobre todo el proceso, desde el grano hasta la taza, y prueba uno de los mejores cafés del mundo.",
    image: "https://picsum.photos/seed/coffeefarm/800/600",
    link: "/coffee-tour-medellin"
  },
  {
    title: "Experimentar la Vida Nocturna en El Poblado",
    description: "Medellín es famosa por su vibrante vida nocturna. Dirígete al Parque Lleras o Provenza en El Poblado para disfrutar de increíbles restaurantes, bares en azoteas y clubes de salsa.",
    image: "https://picsum.photos/seed/poblado/800/600",
    link: "/private-tours-medellin"
  }
];

export default function ThingsToDo() {
  return (
    <div className="bg-beige min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <SEO 
        title="Qué Hacer en Medellín | Principales Atracciones y Tours"
        description="Descubre las mejores cosas para hacer en Medellín, Colombia. Desde viajar en el Metrocable y explorar la Comuna 13 hasta excursiones de un día a Guatapé y fincas cafeteras."
        keywords="qué hacer en Medellín, atracciones en Medellín, city tour Medellín, Comuna 13, Guatapé"
        url="https://emiliostours.com/things-to-do-medellin"
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-b from-coral/10 to-transparent rounded-full blur-[150px] -z-10 animate-blob mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-vine/10 rounded-full blur-[120px] -z-10 animate-blob animation-delay-4000 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-7xl text-coffee-dark font-bold mb-6">
            Qué Hacer en Medellín
          </h1>
          <p className="font-sans text-xl text-coffee/80 max-w-3xl mx-auto leading-relaxed font-light">
            La Ciudad de la Eterna Primavera ofrece una increíble variedad de experiencias. Ya seas un buscador de aventuras, un aficionado a la historia o un amante de la comida, aquí están nuestras principales recomendaciones para tu visita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group glass bg-white/60 rounded-[2.5rem] overflow-hidden border border-coffee/10 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <h2 className="font-display text-2xl text-coffee-dark font-bold mb-4 group-hover:text-coral transition-colors">
                  {activity.title}
                </h2>
                <p className="font-sans text-coffee/80 leading-relaxed mb-8 flex-grow font-light">
                  {activity.description}
                </p>
                
                <Link 
                  to={activity.link}
                  className="inline-flex items-center gap-2 text-coral font-bold uppercase tracking-widest text-sm hover:text-coral-light transition-colors group/link"
                >
                  Ver Tour Relacionado
                  <span className="w-8 h-px bg-coral group-hover/link:w-12 transition-all duration-300"></span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO Content Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 max-w-4xl mx-auto glass bg-white/40 p-12 rounded-[3rem] prose prose-lg prose-headings:font-display prose-p:font-sans prose-a:text-coral"
        >
          <h2 className="text-4xl font-bold text-coffee-dark mb-8 text-center">Planificando tu Itinerario en Medellín</h2>
          <p className="text-coffee/80 mb-6 font-light">
            Al decidir <strong>qué hacer en Medellín</strong>, es importante equilibrar la exploración de la ciudad con excursiones de un día al hermoso campo antioqueño. Recomendamos pasar al menos 3-4 días en la ciudad para apreciar verdaderamente su transformación y cultura.
          </p>
          <p className="text-coffee/80 mb-6 font-light">
            Comienza tu viaje con un completo <strong>city tour por Medellín</strong> para orientarte y comprender el sistema de transporte público. Dedica medio día al inspirador <strong>tour de la Comuna 13</strong> para ver el poder del urbanismo social. Finalmente, ningún viaje está completo sin una excursión de día completo en el <strong>tour a Guatapé</strong> para subir la piedra de El Peñol.
          </p>
          <p className="text-coffee/80 mb-6 font-light">
            Si tienes intereses específicos, considera reservar uno de nuestros <strong>tours privados en Medellín</strong>, que pueden adaptarse para enfocarse en la gastronomía, el arte o un contexto histórico más profundo como el <strong>tour de Pablo Escobar en Medellín</strong> (enfocado en las víctimas y la resiliencia de la ciudad).
          </p>
        </motion.section>
      </div>
    </div>
  );
}
