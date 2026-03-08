import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-beige min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <SEO 
        title="Contact Us | Emilio's Tours Medellín"
        description="Get in touch with Emilio's Tours to book your Medellín city tour, Comuna 13 experience, or private Colombian adventure."
        keywords="contact Emilio's Tours, book Medellín tour, Medellín travel agency"
        url="https://emiliostours.com/contact"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-7xl text-coffee-dark font-bold mb-6">
            Get in Touch
          </h1>
          <p className="font-sans text-xl text-coffee/80 max-w-2xl mx-auto leading-relaxed">
            Ready to explore Medellín? Have questions about our tours? We're here to help you plan the perfect Colombian adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="glass bg-white/60 p-10 rounded-3xl border border-coffee/10 shadow-xl">
              <h2 className="font-display text-3xl text-coffee-dark font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-coffee-dark text-lg mb-1">Location</h3>
                    <p className="font-sans text-coffee/80 leading-relaxed">
                      Medellín, Antioquia<br/>
                      Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-vine/10 flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7 text-vine" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-coffee-dark text-lg mb-1">Phone / WhatsApp</h3>
                    <p className="font-sans text-coffee/80 leading-relaxed">
                      +57 300 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-coffee-dark text-lg mb-1">Email</h3>
                    <p className="font-sans text-coffee/80 leading-relaxed">
                      hello@emiliostours.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass bg-coffee-dark p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <h2 className="font-display text-3xl text-white font-bold mb-8">Send us a Message</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block font-sans text-sm text-sand/80 uppercase tracking-widest mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-coral transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-sans text-sm text-sand/80 uppercase tracking-widest mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-coral transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="tour" className="block font-sans text-sm text-sand/80 uppercase tracking-widest mb-2">Interested In</label>
                <select 
                  id="tour" 
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-coral transition-colors appearance-none"
                >
                  <option value="" className="text-coffee-dark">Select a Tour...</option>
                  <option value="comuna13" className="text-coffee-dark">Comuna 13 Tour</option>
                  <option value="guatape" className="text-coffee-dark">Guatapé Tour</option>
                  <option value="escobar" className="text-coffee-dark">Pablo Escobar Tour</option>
                  <option value="coffee" className="text-coffee-dark">Coffee Tour</option>
                  <option value="private" className="text-coffee-dark">Private Tour</option>
                  <option value="city" className="text-coffee-dark">Medellín City Tour</option>
                  <option value="other" className="text-coffee-dark">Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-sm text-sand/80 uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-coral transition-colors resize-none"
                  placeholder="Tell us about your trip..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-coral text-white py-4 rounded-xl uppercase tracking-widest font-bold text-lg hover:bg-coral-light transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,142,101,0.5)] flex items-center justify-center gap-3 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
