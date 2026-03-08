import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What are the best tours in Medellín?",
    answer: "The best tours in Medellín depend on your interests. For history and transformation, the Comuna 13 tour is a must. For breathtaking nature, the Guatapé tour is highly recommended. If you want a comprehensive overview, our Medellín city tour covers all the essentials."
  },
  {
    question: "Is the Comuna 13 tour safe?",
    answer: "Yes, absolutely. Today, Comuna 13 is one of the safest and most vibrant areas for tourists in Medellín. Our local guides are deeply respected in the community, ensuring a secure, welcoming, and authentic experience."
  },
  {
    question: "How long does the Guatapé tour take?",
    answer: "The Guatapé tour is a full-day experience, typically lasting around 10 hours. This includes travel time from Medellín, climbing the 740 steps of El Peñol rock, exploring the colorful town of Guatapé, and enjoying a traditional Colombian lunch."
  },
  {
    question: "What should I bring for a Medellín tour?",
    answer: "Medellín is the 'City of Eternal Spring', so dress comfortably in layers. Bring comfortable walking shoes, sunscreen, a hat, a light rain jacket (weather can change quickly), and a reusable water bottle."
  },
  {
    question: "Are private tours available in Medellín?",
    answer: "Yes! We offer fully customizable private tours in Medellín. Whether you want a tailored itinerary, private transportation, or a dedicated expert guide for your group, we can craft the perfect experience for you."
  },
  {
    question: "Do I need to book tours in advance?",
    answer: "While we accept last-minute bookings subject to availability, we highly recommend booking your Medellín tours at least a few days in advance, especially during peak tourist seasons (December-January, Easter week, and July-August)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-beige min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <SEO 
        title="Frequently Asked Questions | Emilio's Tours Medellín"
        description="Find answers to frequently asked questions about Medellín tours, including safety in Comuna 13, Guatapé tour duration, and what to bring."
        keywords="FAQ Medellín tours, Comuna 13 safe, Guatapé tour length, private tours Medellín"
        url="https://emiliostours.com/faq"
      />

      {/* Decorative Elements */}
      <div className="absolute top-40 -left-20 w-64 h-64 bg-coral/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-vine/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-7xl text-coffee-dark font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-sans text-xl text-coffee/80 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our Medellín tours, safety, and what to expect on your Colombian adventure.
          </p>
        </motion.div>

        <div className="space-y-6">
          <h2 className="sr-only">Frequently Asked Questions About Medellín Tours</h2>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass bg-white/60 rounded-2xl overflow-hidden border border-coffee/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none group"
              >
                <h3 className="font-display text-2xl text-coffee-dark font-bold group-hover:text-coral transition-colors pr-8">
                  {faq.question}
                </h3>
                <div className={`w-10 h-10 rounded-full bg-coffee/5 flex items-center justify-center shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180 bg-coral/10 text-coral' : 'text-coffee'}`}>
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
                  <p className="font-sans text-lg text-coffee/80 leading-relaxed border-t border-coffee/10 pt-6">
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
