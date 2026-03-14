import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-beige min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <SEO 
        title="Contacto | Emilio's Tours Medellín"
        description="Ponte en contacto con Emilio's Tours para reservar tu city tour por Medellín, la experiencia en la Comuna 13 o tu aventura privada colombiana."
        keywords="contacto Emilio's Tours, reservar tour Medellín, agencia de viajes Medellín"
        url="https://emiliostours.com/contact"
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-coral/10 rounded-full blur-[120px] -z-10 animate-blob mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000 mix-blend-multiply"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-7xl text-coffee-dark font-bold mb-6">
            Ponte en Contacto
          </h1>
          <p className="font-sans text-xl text-coffee/80 max-w-2xl mx-auto leading-relaxed font-light">
            ¿Listo para explorar Medellín? ¿Tienes preguntas sobre nuestros tours? Estamos aquí para ayudarte a planificar la aventura colombiana perfecta.
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
            <div className="glass bg-white/40 p-12 rounded-[3rem] border border-coffee/10 shadow-xl">
              <h2 className="font-display text-3xl text-coffee-dark font-bold mb-10">Información de Contacto</h2>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-full glass bg-coral/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="w-8 h-8 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-coffee-dark text-lg mb-1">Ubicación</h3>
                    <p className="font-sans text-coffee/80 leading-relaxed font-light">
                      Medellín, Antioquia<br/>
                      Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-full glass bg-vine/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-8 h-8 text-vine" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-coffee-dark text-lg mb-1">Teléfono / WhatsApp</h3>
                    <p className="font-sans text-coffee/80 leading-relaxed font-light">
                      +57 300 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-full glass bg-gold/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-coffee-dark text-lg mb-1">Correo Electrónico</h3>
                    <p className="font-sans text-coffee/80 leading-relaxed font-light">
                      hola@emiliostours.com
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
            className="glass-dark bg-coffee-dark/80 p-12 rounded-[3rem] border border-white/10 shadow-2xl"
          >
            <h2 className="font-display text-3xl text-white font-bold mb-8">Envíanos un Mensaje</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block font-sans text-sm text-sand/80 uppercase tracking-widest mb-2 font-bold">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-coral transition-colors font-light"
                  placeholder="Tu Nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-sans text-sm text-sand/80 uppercase tracking-widest mb-2 font-bold">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-coral transition-colors font-light"
                  placeholder="tu@correo.com"
                />
              </div>

              <div>
                <label htmlFor="tour" className="block font-sans text-sm text-sand/80 uppercase tracking-widest mb-2 font-bold">Interesado En</label>
                <select 
                  id="tour" 
                  className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-coral transition-colors appearance-none font-light"
                >
                  <option value="" className="text-coffee-dark">Selecciona un Tour...</option>
                  <option value="graffiti" className="text-coffee-dark">Graffiti Tour</option>
                  <option value="guatape" className="text-coffee-dark">Tour a Guatapé</option>
                  <option value="cafe" className="text-coffee-dark">Tour del Café</option>
                  <option value="parapente" className="text-coffee-dark">Vuelo en Parapente</option>
                  <option value="cuatrimotos" className="text-coffee-dark">Aventura en Cuatrimotos</option>
                  <option value="ebike" className="text-coffee-dark">Tour en Bicicleta Eléctrica</option>
                  <option value="escobar" className="text-coffee-dark">Tour Pablo Escobar (Histórico)</option>
                  <option value="napoles" className="text-coffee-dark">Hacienda Nápoles (2 Días)</option>
                  <option value="cabalgata" className="text-coffee-dark">Cabalgata</option>
                  <option value="trekking" className="text-coffee-dark">Trekking Envigado</option>
                  <option value="gastronomico" className="text-coffee-dark">Tour Gastronómico</option>
                  <option value="other" className="text-coffee-dark">Otro / Consulta General</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-sm text-sand/80 uppercase tracking-widest mb-2 font-bold">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-coral transition-colors resize-none font-light"
                  placeholder="Cuéntanos sobre tu viaje..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-coral text-white py-5 rounded-full uppercase tracking-widest font-bold text-lg hover:bg-coral-light transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,142,101,0.5)] flex items-center justify-center gap-3 group mt-8"
              >
                <span className="relative z-10">Enviar Mensaje</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-coral-light to-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
