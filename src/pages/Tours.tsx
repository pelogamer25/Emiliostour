import { motion } from 'motion/react';
import SEO from '../components/SEO';
import TourCard from '../components/TourCard';
import { tours } from '../data/tours';

export default function Tours() {
  return (
    <div className="bg-beige min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <SEO 
        title="Los Mejores Tours y Experiencias en Medellín | Emilio's Tours"
        description="Explora nuestra gama completa de tours en Medellín. Desde la vibrante Comuna 13 hasta el impresionante Guatapé y El Peñol. Reserva tu inolvidable aventura colombiana hoy."
        keywords="Tours en Medellín, Comuna 13 tour, Guatapé tour, Pablo Escobar tour Medellín, tour cafetero Medellín, tours privados Medellín, city tour Medellín"
        url="https://emiliostours.com/medellin-tours"
      />

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-coral/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vine/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-7xl text-coffee-dark font-bold mb-6">
            Descubre Medellín
          </h1>
          <p className="font-sans text-xl text-coffee/80 max-w-3xl mx-auto leading-relaxed">
            Explora nuestra cuidadosa selección de los mejores tours en Medellín. Ya sea que busques historia, naturaleza, cultura o una experiencia privada a medida, tenemos el viaje perfecto para ti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
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
          <h2 className="text-4xl font-bold text-coffee-dark mb-8 text-center">¿Por qué reservar un tour en Medellín?</h2>
          <p className="text-coffee/80 mb-6 font-light">
            Medellín, Colombia, a menudo conocida como la "Ciudad de la Eterna Primavera", es una metrópolis vibrante enclavada en el Valle de Aburrá. En las últimas dos décadas, ha experimentado una transformación milagrosa, convirtiéndose en uno de los destinos más innovadores y emocionantes de Sudamérica.
          </p>
          <p className="text-coffee/80 mb-6 font-light">
            Nuestros <strong>tours en Medellín</strong> están diseñados para mostrar la increíble resiliencia de la ciudad, sus impresionantes paisajes y su cálida cultura. Desde explorar las coloridas calles en nuestro <strong>tour a la Comuna 13</strong> hasta escalar la enorme roca en nuestro <strong>tour a Guatapé</strong>, cada experiencia está diseñada para dejarte recuerdos inolvidables.
          </p>
          <h3 className="text-3xl font-bold text-coffee-dark mt-12 mb-6">Opciones de Tours Populares</h3>
          <ul className="list-disc pl-6 space-y-4 text-coffee/80 font-light">
            <li><strong>Tour Comuna 13:</strong> Sé testigo del poder del arte y la comunidad en lo que alguna vez fue el barrio más peligroso de la ciudad.</li>
            <li><strong>Tour a Guatapé:</strong> Una excursión de día completo al colorido pueblo de Guatapé y la icónica piedra de El Peñol.</li>
            <li><strong>Tour Pablo Escobar Medellín:</strong> Una mirada histórica y objetiva al oscuro pasado de la ciudad y su increíble recuperación.</li>
            <li><strong>Tour Cafetero Medellín:</strong> Experimenta la rica tradición de la elaboración del café colombiano en las exuberantes montañas de Antioquia.</li>
            <li><strong>Tours Privados Medellín:</strong> Experiencias hechas a medida para aquellos que desean un itinerario personalizado y un guía dedicado.</li>
            <li><strong>City Tour Medellín:</strong> La introducción perfecta a las principales atracciones de la ciudad, incluyendo la Plaza Botero y el Metrocable.</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}
