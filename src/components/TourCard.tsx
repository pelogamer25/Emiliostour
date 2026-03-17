import { Link } from 'react-router-dom';
import { Tour } from '../data/tours';
import { motion } from 'motion/react';
import { Clock, DollarSign, CheckCircle2 } from 'lucide-react';

interface TourCardProps {
  key?: string;
  tour: Tour;
  index: number;
}

export default function TourCard({ tour, index }: TourCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group perspective-1000 w-full h-[500px] cursor-pointer"
    >
      <div className="relative w-full h-full transition-transform duration-1000 transform-style-3d group-hover:rotate-y-180">
        
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <img 
            src={tour.image} 
            alt={tour.title} 
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/90 via-coffee-dark/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <h3 className="font-display text-3xl text-white font-bold mb-2 drop-shadow-lg">
              {tour.title}
            </h3>
            <p className="font-sans text-sand/90 text-lg uppercase tracking-wider drop-shadow-md">
              {tour.tagline}
            </p>
          </div>
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-coral/50 rounded-2xl transition-colors duration-500"></div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl glass-dark p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-2xl text-coral font-bold mb-4">
              {tour.title}
            </h3>
            <p className="font-sans text-sand/80 text-sm leading-relaxed mb-6 line-clamp-4">
              {tour.description}
            </p>
            
            <ul className="space-y-3 mb-6">
              {tour.highlights.slice(0, 3).map((highlight, i) => (
                <li key={i} className="flex items-center gap-2 text-sand/90 text-sm font-sans">
                  <CheckCircle2 className="w-4 h-4 text-vine" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center text-sand">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold" />
                <span className="font-sans text-sm">{tour.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-5 h-5 text-gold" />
                <span className="font-sans font-bold text-lg">{tour.price}</span>
              </div>
            </div>
            
            <Link 
              to={`/${tour.slug}`}
              className="block w-full text-center bg-coral text-coffee-dark py-3 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-coral-light transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(240,201,12,0.4)] relative overflow-hidden group/btn"
            >
              <span className="relative z-10">Reservar Este Tour</span>
              <div className="absolute inset-0 bg-gradient-to-r from-coral-light to-coral opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
