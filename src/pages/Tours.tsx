import { motion } from 'motion/react';
import SEO from '../components/SEO';
import TourCard from '../components/TourCard';
import { tours } from '../data/tours';

export default function Tours() {
  return (
    <div className="bg-beige min-h-screen pt-32 pb-24 px-6">
      <SEO 
        title="Best Medellín Tours & Experiences | Emilio's Tours"
        description="Explore our full range of Medellín tours. From the vibrant Comuna 13 to the breathtaking Guatapé and El Peñol. Book your unforgettable Colombian adventure today."
        keywords="Medellín tours, Comuna 13 tour, Guatapé tour, Pablo Escobar tour Medellín, coffee tour Medellín, private tours Medellín, Medellín city tour"
        url="https://emiliostours.com/medellin-tours"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-7xl text-coffee-dark font-bold mb-6">
            Discover Medellín
          </h1>
          <p className="font-sans text-xl text-coffee/80 max-w-3xl mx-auto leading-relaxed">
            Browse our carefully curated selection of the best tours in Medellín. Whether you're looking for history, nature, culture, or a private tailored experience, we have the perfect journey for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
          ))}
        </div>

        {/* SEO Content Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto prose prose-lg prose-headings:font-display prose-p:font-sans prose-a:text-coral"
        >
          <h2 className="text-4xl font-bold text-coffee-dark mb-8 text-center">Why Book a Tour in Medellín?</h2>
          <p className="text-coffee/80 mb-6">
            Medellín, Colombia, often referred to as the "City of Eternal Spring," is a vibrant metropolis nestled in the Aburrá Valley. Over the past two decades, it has undergone a miraculous transformation, becoming one of South America's most innovative and exciting destinations.
          </p>
          <p className="text-coffee/80 mb-6">
            Our <strong>Medellín tours</strong> are designed to showcase the city's incredible resilience, stunning landscapes, and warm culture. From exploring the colorful streets on our <strong>Comuna 13 tour</strong> to climbing the massive rock on our <strong>Guatapé tour</strong>, every experience is crafted to leave you with unforgettable memories.
          </p>
          <h3 className="text-3xl font-bold text-coffee-dark mt-12 mb-6">Popular Tour Options</h3>
          <ul className="list-disc pl-6 space-y-4 text-coffee/80">
            <li><strong>Comuna 13 Tour:</strong> Witness the power of art and community in what was once the city's most dangerous neighborhood.</li>
            <li><strong>Guatapé Tour:</strong> A full-day excursion to the colorful town of Guatapé and the iconic El Peñol rock.</li>
            <li><strong>Pablo Escobar Tour Medellín:</strong> A historical, objective look at the city's dark past and its incredible recovery.</li>
            <li><strong>Coffee Tour Medellín:</strong> Experience the rich tradition of Colombian coffee making in the lush mountains of Antioquia.</li>
            <li><strong>Private Tours Medellín:</strong> Tailor-made experiences for those who want a personalized itinerary and dedicated guide.</li>
            <li><strong>Medellín City Tour:</strong> The perfect introduction to the city's main attractions, including Plaza Botero and the Metrocable.</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}
