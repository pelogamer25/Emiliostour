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
    id: 'graffiti',
    slug: 'graffiti-tour-comuna-13',
    title: 'Graffiti Tour',
    tagline: 'Arte urbano, historia y transformación',
    description: 'Recorrido guiado por los callejones y escaleras eléctricas de una de las comunas más representativas de Medellín. Un tour lleno de arte urbano, historia y transformación social.',
    duration: '4 Horas (9:00 am - 1:00 pm)',
    price: '$50 USD',
    image: 'https://picsum.photos/seed/comuna13/800/1200',
    highlights: ['Helado de mango 🥭', 'Entrada Metro Cable', 'Transporte privado', 'Guía privado']
  },
  {
    id: 'guatape',
    slug: 'tour-guatape',
    title: 'Tour a Guatapé',
    tagline: 'La Piedra y el Pueblo Colorido',
    description: 'Viaje terrestre de aproximadamente 1 hora y 40 minutos desde Medellín. Descubre uno de los paisajes más impresionantes de Colombia, sube la famosa Piedra del Peñol y recorre las calles llenas de zócalos coloridos.',
    duration: 'Día Completo',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/guatape/800/1200',
    highlights: ['Visita granja de animales', 'Paseo en bote por el lago', 'Entrada Piedra del Peñol', 'Almuerzo, transporte y guía privado']
  },
  {
    id: 'cafe',
    slug: 'experiencia-cafetera',
    title: 'Tour del Café',
    tagline: 'Del cultivo a tu taza',
    description: 'Vive una auténtica experiencia cafetera. Aprende sobre la historia del café colombiano, recorre los cultivos y descubre los secretos de su preparación mientras disfrutas de los paisajes montañosos.',
    duration: 'Medio Día',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/coffee/800/1200',
    highlights: ['Vestimenta tradicional de arriero', 'Recorrido por el cultivo', 'Preparación y degustación', 'Almuerzo, transporte y guía privado']
  },
  {
    id: 'parapente',
    slug: 'vuelo-parapente-medellin',
    title: 'Vuelo en Parapente',
    tagline: 'Aventura en las alturas',
    description: 'Vuela durante 18 minutos acompañado de un piloto profesional y disfruta de una vista espectacular desde el aire. Una experiencia llena de adrenalina y paisajes inolvidables. 📸 Recomendación: llevar cámara.',
    duration: 'Medio Día (18 min de vuelo)',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/paragliding/800/1200',
    highlights: ['Vuelo de 18 minutos', 'Piloto profesional', 'Traslado al punto de vuelo', 'Vistas espectaculares']
  },
  {
    id: 'cuatrimotos',
    slug: 'tour-cuatrimotos',
    title: 'Aventura en Cuatrimotos',
    tagline: 'Adrenalina y naturaleza',
    description: 'Recorre paisajes naturales mientras sientes la fuerza de los motores. Ideal para los amantes de la adrenalina y la aventura que buscan explorar los alrededores de Medellín de una forma diferente.',
    duration: '1.5 Horas',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/atv/800/1200',
    highlights: ['Recorrido por paisajes naturales', 'Motos de alta potencia', 'Guía experto', 'Adrenalina pura']
  },
  {
    id: 'ebike',
    slug: 'tour-bicicleta-electrica',
    title: 'Tour en Bicicleta Eléctrica',
    tagline: 'Explora la ciudad sin esfuerzo',
    description: 'Explora la ciudad de una manera diferente y divertida. Recorrido por 12 parques principales de Medellín, sin esfuerzo físico gracias a las bicicletas eléctricas.',
    duration: 'Medio Día',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/ebike/800/1200',
    highlights: ['12 parques principales', 'Bicicletas eléctricas', 'Guía local', 'Recorrido divertido y ecológico']
  },
  {
    id: 'escobar',
    slug: 'tour-pablo-escobar-historico',
    title: 'Tour Pablo Escobar (Histórico)',
    tagline: 'Historia y cultura de los 80s y 90s',
    description: 'Tour cultural e histórico sobre Medellín en las décadas de los 80 y 90. Aprende cómo este periodo marcó la historia, la economía y la cultura de la ciudad, y cómo Medellín se transformó.',
    duration: 'Medio Día',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/history/800/1200',
    highlights: ['Contexto histórico y cultural', 'Impacto en la economía', 'Guía experto', 'Recorrido por lugares clave']
  },
  {
    id: 'napoles',
    slug: 'hacienda-napoles-2-dias',
    title: 'Hacienda Nápoles (2 Días)',
    tagline: 'Aventura en el Magdalena Medio',
    description: 'Viaje inolvidable al Magdalena Medio. Disfruta de un plan completo de dos días explorando la naturaleza, la fauna y relajándote en paisajes espectaculares.',
    duration: '2 Días',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/napoles/800/1200',
    highlights: ['Parque temático Hacienda Nápoles', 'Alojamiento en Santorini Colombiano', 'Tarde en Reserva Natural Río Claro', 'Transporte incluido']
  },
  {
    id: 'cabalgata',
    slug: 'cabalgata-reserva-natural',
    title: 'Cabalgata',
    tagline: 'Conexión con la montaña',
    description: 'Experiencia en una reserva natural, recorriendo hermosos paisajes de montaña. Actividad realizada a caballo o mula, ideal para conectar con la naturaleza y respirar aire puro.',
    duration: 'Medio Día',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/horseback/800/1200',
    highlights: ['Reserva natural', 'Paisajes de montaña', 'Caballo o mula', 'Conexión con la naturaleza']
  },
  {
    id: 'trekking',
    slug: 'trekking-envigado',
    title: 'Trekking Envigado',
    tagline: 'Caminata ecológica',
    description: 'Caminata ecológica en el sur de la ciudad. Un plan ideal para los amantes del deporte, la aventura y el aire libre, explorando los senderos verdes de Envigado.',
    duration: 'Medio Día',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/trekking/800/1200',
    highlights: ['Sur de la ciudad (Envigado)', 'Naturaleza pura', 'Deporte y aventura', 'Guía de montaña']
  },
  {
    id: 'gastronomico',
    slug: 'tour-gastronomico',
    title: 'Tour Gastronómico',
    tagline: 'Sabores de Colombia',
    description: 'Visita a una plaza de mercado tradicional, degustación de frutas exóticas y almuerzo típico colombiano, incluyendo postre. Descubre la riqueza culinaria de nuestra región.',
    duration: 'Medio Día',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/food/800/1200',
    highlights: ['Plaza de mercado tradicional', 'Degustación de frutas exóticas', 'Almuerzo típico colombiano', 'Postre incluido']
  }
];
