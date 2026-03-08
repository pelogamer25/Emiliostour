export interface Tour {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
}

export const tours: Tour[] = [
  {
    id: 'comuna-13',
    slug: 'comuna-13-tour',
    title: 'Tour Comuna 13',
    tagline: 'Grafiti, Historia y Transformación',
    description: 'Experimenta la increíble transformación del barrio más famoso de Medellín. Camina por calles vibrantes llenas de impresionantes grafitis, sube por las icónicas escaleras mecánicas al aire libre y escucha historias de resiliencia de guías locales.',
    duration: '3-4 Horas',
    price: '$35 USD',
    image: 'https://picsum.photos/seed/comuna13/800/1200',
    highlights: ['Escaleras Mecánicas', 'Arte Callejero y Grafiti', 'Degustación de Comida Callejera', 'Guía Local Experto']
  },
  {
    id: 'guatape',
    slug: 'guatape-tour',
    title: 'Tour a Guatapé',
    tagline: 'La Piedra y el Pueblo Colorido',
    description: 'Sube los 740 escalones de la piedra de El Peñol para disfrutar de impresionantes vistas panorámicas de los lagos circundantes. Luego, explora las vibrantes y coloridas calles de Guatapé, conocidas por sus hermosos zócalos que adornan cada hogar.',
    duration: 'Día Completo (10 Horas)',
    price: '$65 USD',
    image: 'https://picsum.photos/seed/guatape/800/1200',
    highlights: ['Subir la Piedra de El Peñol', 'Paseo en Barco por el Lago', 'Explorar el Colorido Guatapé', 'Almuerzo Tradicional Colombiano']
  },
  {
    id: 'pablo-escobar',
    slug: 'pablo-escobar-tour',
    title: 'Tour Pablo Escobar',
    tagline: 'Entendiendo el Pasado de Medellín',
    description: 'Una mirada histórica y objetiva a la oscura época de los años 80 y 90. Visita lugares clave relacionados con Pablo Escobar y aprende cómo la ciudad y su gente superaron la violencia para convertirse en la metrópolis innovadora que es hoy.',
    duration: '4 Horas',
    price: '$45 USD',
    image: 'https://picsum.photos/seed/escobar/800/1200',
    highlights: ['Memorial del Edificio Mónaco', 'Visita al Cementerio', 'Contexto Histórico', 'Enfoque en las Víctimas y la Resiliencia']
  },
  {
    id: 'coffee',
    slug: 'coffee-tour-medellin',
    title: 'Tour Cafetero Medellín',
    tagline: 'Del Grano a la Taza',
    description: 'Viaja a las exuberantes montañas de Antioquia para visitar una finca cafetera tradicional colombiana. Aprende todo el proceso de elaboración del café, desde la siembra y la cosecha hasta el tostado y la preparación de la taza perfecta.',
    duration: 'Medio Día (5 Horas)',
    price: '$55 USD',
    image: 'https://picsum.photos/seed/coffee/800/1200',
    highlights: ['Visita a una Finca Cafetera', 'Sesión de Degustación de Café', 'Aprender el Proceso de Tostado', 'Hermosas Vistas a la Montaña']
  },
  {
    id: 'private',
    slug: 'private-tours-medellin',
    title: 'Tour Privado por Medellín',
    tagline: 'Adaptado a tus Sueños',
    description: 'Experimenta Medellín exactamente como deseas. Nuestros tours privados son totalmente personalizables. Ya sea que desees una inmersión profunda en el arte, la gastronomía, la historia o la naturaleza, diseñamos el itinerario perfecto solo para ti.',
    duration: 'Flexible',
    price: 'Desde $120 USD',
    image: 'https://picsum.photos/seed/private/800/1200',
    highlights: ['Itinerario Personalizable', 'Transporte Privado', 'Guía Experto Dedicado', 'Experiencia VIP']
  },
  {
    id: 'city',
    slug: 'medellin-city-tour',
    title: 'City Tour Medellín',
    tagline: 'El Corazón de la Ciudad de la Eterna Primavera',
    description: 'Descubre los lugares esenciales de Medellín. Viaja en los innovadores sistemas de Metro y Metrocable, visita la Plaza Botero con sus famosas esculturas y explora la bulliciosa zona del centro.',
    duration: '4-5 Horas',
    price: '$40 USD',
    image: 'https://picsum.photos/seed/medellin/800/1200',
    highlights: ['Plaza Botero', 'Paseo en Metrocable', 'Pueblito Paisa', 'Exploración del Centro']
  }
];
