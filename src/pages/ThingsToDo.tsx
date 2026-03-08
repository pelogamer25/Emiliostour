import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const activities = [
  {
    title: "Ride the Metrocable",
    description: "Medellín's innovative public transport system offers breathtaking panoramic views of the city nestled in the Aburrá Valley. It's an essential experience for any visitor.",
    image: "https://picsum.photos/seed/metrocable/800/600",
    link: "/medellin-city-tour"
  },
  {
    title: "Explore Comuna 13",
    description: "Once considered dangerous, this neighborhood is now a vibrant hub of street art, hip-hop culture, and community resilience. The outdoor escalators are a marvel of urban planning.",
    image: "https://picsum.photos/seed/comuna13art/800/600",
    link: "/comuna-13-tour"
  },
  {
    title: "Visit Plaza Botero",
    description: "Located in the heart of downtown, this plaza features 23 larger-than-life bronze sculptures donated by Medellín's most famous artist, Fernando Botero.",
    image: "https://picsum.photos/seed/botero/800/600",
    link: "/medellin-city-tour"
  },
  {
    title: "Day Trip to Guatapé",
    description: "Just two hours away, climb the massive El Peñol rock for incredible views of the man-made lakes, then wander the colorful, zócalo-adorned streets of Guatapé town.",
    image: "https://picsum.photos/seed/guatapetown/800/600",
    link: "/guatape-tour"
  },
  {
    title: "Discover Colombian Coffee",
    description: "Antioquia is a premier coffee-growing region. Visit a traditional finca (farm) to learn about the entire process from bean to cup, and taste some of the world's best coffee.",
    image: "https://picsum.photos/seed/coffeefarm/800/600",
    link: "/coffee-tour-medellin"
  },
  {
    title: "Experience the Nightlife in El Poblado",
    description: "Medellín is famous for its vibrant nightlife. Head to Parque Lleras or Provenza in El Poblado for incredible restaurants, rooftop bars, and salsa clubs.",
    image: "https://picsum.photos/seed/poblado/800/600",
    link: "/private-tours-medellin"
  }
];

export default function ThingsToDo() {
  return (
    <div className="bg-beige min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <SEO 
        title="Things to Do in Medellín | Top Attractions & Tours"
        description="Discover the best things to do in Medellín, Colombia. From riding the Metrocable and exploring Comuna 13 to day trips to Guatapé and coffee farms."
        keywords="things to do in Medellín, Medellín attractions, what to do in Medellín, Medellín city tour, Comuna 13, Guatapé"
        url="https://emiliostours.com/things-to-do-medellin"
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-b from-sand/50 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-7xl text-coffee-dark font-bold mb-6">
            Things to Do in Medellín
          </h1>
          <p className="font-sans text-xl text-coffee/80 max-w-3xl mx-auto leading-relaxed">
            The City of Eternal Spring offers an incredible array of experiences. Whether you're an adventure seeker, a history buff, or a foodie, here are our top recommendations for your visit.
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
              className="group glass bg-white/80 rounded-3xl overflow-hidden border border-coffee/10 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
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
              
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-display text-2xl text-coffee-dark font-bold mb-4 group-hover:text-coral transition-colors">
                  {activity.title}
                </h2>
                <p className="font-sans text-coffee/80 leading-relaxed mb-8 flex-grow">
                  {activity.description}
                </p>
                
                <Link 
                  to={activity.link}
                  className="inline-flex items-center gap-2 text-coral font-bold uppercase tracking-widest text-sm hover:text-coral-light transition-colors group/link"
                >
                  View Related Tour
                  <span className="w-8 h-px bg-coral group-hover/link:w-12 transition-all duration-300"></span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO Content Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto prose prose-lg prose-headings:font-display prose-p:font-sans prose-a:text-coral"
        >
          <h2 className="text-4xl font-bold text-coffee-dark mb-8 text-center">Planning Your Medellín Itinerary</h2>
          <p className="text-coffee/80 mb-6">
            When deciding on <strong>things to do in Medellín</strong>, it's important to balance city exploration with day trips into the beautiful Antioquian countryside. We recommend spending at least 3-4 days in the city to truly appreciate its transformation and culture.
          </p>
          <p className="text-coffee/80 mb-6">
            Start your trip with a comprehensive <strong>Medellín city tour</strong> to get your bearings and understand the public transport system. Dedicate a half-day to the inspiring <strong>Comuna 13 tour</strong> to see the power of social urbanism. Finally, no trip is complete without a full-day excursion on the <strong>Guatapé tour</strong> to climb El Peñol rock.
          </p>
          <p className="text-coffee/80 mb-6">
            If you have specific interests, consider booking one of our <strong>private tours in Medellín</strong>, which can be tailored to focus on gastronomy, art, or deeper historical context like the <strong>Pablo Escobar tour Medellín</strong> (focused on the victims and the city's resilience).
          </p>
        </motion.section>
      </div>
    </div>
  );
}
