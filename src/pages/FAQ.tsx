import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuáles son los mejores tours en Medellín?",
    answer: "Los mejores tours en Medellín dependen de tus intereses. Para historia y transformación, el tour a la Comuna 13 es imprescindible. Para una naturaleza impresionante, el tour a Guatapé es muy recomendable. Si deseas una visión general completa, nuestro city tour por Medellín cubre todos los aspectos esenciales."
  },
  {
    question: "¿Es seguro el tour a la Comuna 13?",
    answer: "Sí, absolutamente. Hoy en día, la Comuna 13 es una de las áreas más seguras y vibrantes para los turistas en Medellín. Nuestros guías locales son profundamente respetados en la comunidad, asegurando una experiencia segura, acogedora y auténtica."
  },
  {
    question: "¿Cuánto dura el tour a Guatapé?",
    answer: "El tour a Guatapé es una experiencia de día completo, que generalmente dura alrededor de 10 horas. Esto incluye el tiempo de viaje desde Medellín, subir los 740 escalones de la piedra de El Peñol, explorar el colorido pueblo de Guatapé y disfrutar de un almuerzo tradicional colombiano."
  },
  {
    question: "¿Qué debo llevar para un tour en Medellín?",
    answer: "Medellín es la 'Ciudad de la Eterna Primavera', así que vístete cómodamente en capas. Lleva zapatos cómodos para caminar, protector solar, un sombrero, una chaqueta impermeable ligera (el clima puede cambiar rápidamente) y una botella de agua reutilizable."
  },
  {
    question: "¿Hay tours privados disponibles en Medellín?",
    answer: "¡Sí! Ofrecemos tours privados totalmente personalizables en Medellín. Ya sea que desees un itinerario a medida, transporte privado o un guía experto dedicado para tu grupo, podemos diseñar la experiencia perfecta para ti."
  },
  {
    question: "¿Necesito reservar los tours con anticipación?",
    answer: "Aunque aceptamos reservas de última hora sujetas a disponibilidad, recomendamos encarecidamente reservar tus tours en Medellín con al menos unos días de anticipación, especialmente durante las temporadas altas de turismo (diciembre-enero, Semana Santa y julio-agosto)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yBlob1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const seo = useSEO({
    title: "Preguntas Frecuentes | Emilio's Tours Medellín",
    description: "Encuentra respuestas a las preguntas frecuentes sobre los tours en Medellín, incluyendo la seguridad en la Comuna 13, la duración del tour a Guatapé y qué llevar.",
    keywords: "FAQ tours Medellín, Comuna 13 seguro, duración tour Guatapé, tours privados Medellín",
    url: "https://emiliostours.com/faq"
  });

  return (
    <div ref={containerRef} className="bg-beige min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      {seo}

      {/* Decorative Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: yBlob1 }}
          className="absolute top-40 -left-20 w-[600px] h-[600px] bg-coral/10 rounded-full blur-[120px] animate-blob mix-blend-multiply" 
        />
        <motion.div 
          style={{ y: yBlob2 }}
          className="absolute bottom-40 -right-20 w-[800px] h-[800px] bg-vine/10 rounded-full blur-[150px] animate-blob animation-delay-2000 mix-blend-multiply" 
        />
      </div>

      {/* Decorative scrolling text background */}
      <motion.div 
        style={{ x: xText }}
        className="absolute top-40 left-0 whitespace-nowrap opacity-5 pointer-events-none z-0"
      >
        <span className="font-display text-[12rem] font-bold text-coffee-dark">PREGUNTAS</span>
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-7xl text-coffee-dark font-bold mb-6">
            Preguntas Frecuentes
          </h1>
          <p className="font-sans text-xl text-coffee/80 max-w-2xl mx-auto leading-relaxed font-light">
            Todo lo que necesitas saber sobre nuestros tours en Medellín, seguridad y qué esperar en tu aventura colombiana.
          </p>
        </motion.div>

        <div className="space-y-6">
          <h2 className="sr-only">Preguntas Frecuentes Sobre los Tours en Medellín</h2>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass bg-white/40 rounded-[2rem] overflow-hidden border border-coffee/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-8 flex justify-between items-center text-left focus:outline-none group"
              >
                <h3 className="font-display text-2xl text-coffee-dark font-bold group-hover:text-gold transition-colors pr-8">
                  {faq.question}
                </h3>
                <div className={`w-12 h-12 rounded-full bg-coffee/5 flex items-center justify-center shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180 bg-coral/20 text-gold' : 'text-coffee'}`}>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 pt-2">
                  <p className="font-sans text-lg text-coffee/80 leading-relaxed border-t border-coffee/10 pt-6 font-light">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
