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
    title: 'Graffiti Tour – Comuna 13',
    tagline: 'Arte urbano, historia y transformación',
    description: 'Conoce la transformación de la Comuna 13 a través de su arte urbano, la música y las historias que han convertido este lugar en uno de los destinos más visitados de Medellín.',
    duration: '4 horas',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/comuna13/800/1200',
    highlights: ['Transporte', 'Guía bilingüe', 'Ingreso al Metrocable', 'Paleta de mango biche']
  },
  {
    id: 'guatape',
    slug: 'tour-guatape',
    title: 'Tour Privado a Guatapé & Piedra del Peñol',
    tagline: 'La Piedra y el Pueblo Colorido',
    description: 'Disfruta de uno de los destinos más emblemáticos de Antioquia. Explora el colorido pueblo de Guatapé, navega por el embalse en bote y visita la famosa Piedra del Peñol mientras conoces paisajes espectaculares y la cultura de la región.',
    duration: '7–8 horas',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/guatape/800/1200',
    highlights: ['Transporte privado y guía bilingüe', 'Recorrido por Guatapé y visita a los zócalos', 'Paseo en bote por el embalse', 'Visita al Alto del Chocho y su granja (no incluye entrada a Piedra del Peñol)']
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
    title: 'Tour de Parapente',
    tagline: 'Aventura en las alturas',
    description: 'Vive una experiencia llena de adrenalina mientras sobrevuelas los paisajes montañosos de Antioquia. Una actividad ideal para quienes desean disfrutar de vistas panorámicas inolvidables desde el aire. Recomendado entre 10:00 a.m. y 2:00 p.m.',
    duration: 'Aprox. 4 horas (18 min vuelo)',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/paragliding/800/1200',
    highlights: ['Transporte', 'Guía bilingüe', 'Vuelo en parapente']
  },
  {
    id: 'cuatrimotos',
    slug: 'tour-cuatrimotos',
    title: 'Tour en Cuatrimoto',
    tagline: 'Adrenalina y naturaleza',
    description: 'Recorre caminos rurales y disfruta de la naturaleza mientras conduces una cuatrimoto por senderos llenos de aventura cerca de Medellín. Una experiencia perfecta para quienes buscan emoción al aire libre.',
    duration: '4 horas (1.5h recorrido)',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/atv/800/1200',
    highlights: ['Transporte', 'Guía bilingüe', 'Cuatrimoto', 'Recorrido guiado']
  },
  {
    id: 'ebike',
    slug: 'tour-bicicleta-electrica',
    title: 'Tour en Bicicleta Eléctrica',
    tagline: 'Explora la ciudad sin esfuerzo',
    description: 'Recorre Medellín de una forma divertida y sostenible mientras visitas algunos de los parques y espacios más representativos de la ciudad en bicicleta eléctrica.',
    duration: '3 horas',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/ebike/800/1200',
    highlights: ['Bicicleta eléctrica', 'Guía bilingüe', 'Recorrido de aprox. 16 km', 'Visita a 12 parques (no incluye transporte al punto de encuentro)']
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
    title: 'Trekking en Envigado',
    tagline: 'Caminata ecológica',
    description: 'Conéctate con la naturaleza a través de una caminata por senderos ecológicos rodeados de montañas, bosques y quebradas. Una experiencia ideal para quienes desean disfrutar del aire libre y descubrir los paisajes naturales del Valle de Aburrá.',
    duration: '4 horas',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/trekking/800/1200',
    highlights: ['Transporte', 'Guía bilingüe', 'Snack', 'Caminata guiada por senderos naturales']
  },
  {
    id: 'gastronomico',
    slug: 'tour-gastronomico',
    title: 'Tour Gastronómico de Medellín',
    tagline: 'Sabores de Colombia',
    description: 'Descubre los sabores más auténticos de Medellín en una experiencia diseñada para los amantes de la gastronomía. Recorre la Plaza Minorista acompañado por un guía bilingüe, conoce la cultura local y disfruta de una degustación de frutas exóticas, un delicioso almuerzo tradicional y un postre típico.',
    duration: '4 horas',
    price: 'Consultar',
    image: 'https://picsum.photos/seed/food/800/1200',
    highlights: ['Transporte ida y regreso', 'Guía privado bilingüe', 'Recorrido por la Plaza Minorista', 'Degustación de frutas exóticas, almuerzo y postre']
  }
];
