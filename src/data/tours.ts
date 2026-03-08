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
    title: 'Comuna 13 Tour',
    tagline: 'Graffiti, History & Transformation',
    description: 'Experience the incredible transformation of Medellín\'s most famous neighborhood. Walk through vibrant streets filled with stunning graffiti, ride the iconic outdoor escalators, and hear stories of resilience from local guides.',
    duration: '3-4 Hours',
    price: '$35 USD',
    image: 'https://picsum.photos/seed/comuna13/800/1200',
    highlights: ['Outdoor Escalators', 'Street Art & Graffiti', 'Local Street Food Tasting', 'Expert Local Guide']
  },
  {
    id: 'guatape',
    slug: 'guatape-tour',
    title: 'Guatapé Tour',
    tagline: 'The Rock & The Colorful Town',
    description: 'Climb the 740 steps of El Peñol rock for breathtaking panoramic views of the surrounding lakes. Then, explore the vibrant, colorful streets of Guatapé, known for its beautiful zócalos (bas-reliefs) adorning every home.',
    duration: 'Full Day (10 Hours)',
    price: '$65 USD',
    image: 'https://picsum.photos/seed/guatape/800/1200',
    highlights: ['Climb El Peñol Rock', 'Boat Ride on the Lake', 'Explore Colorful Guatapé', 'Traditional Colombian Lunch']
  },
  {
    id: 'pablo-escobar',
    slug: 'pablo-escobar-tour',
    title: 'Pablo Escobar Tour',
    tagline: 'Understanding Medellín\'s Past',
    description: 'A historical and objective look at the dark era of the 1980s and 90s. Visit key locations related to Pablo Escobar and learn how the city and its people overcame violence to become the innovative metropolis it is today.',
    duration: '4 Hours',
    price: '$45 USD',
    image: 'https://picsum.photos/seed/escobar/800/1200',
    highlights: ['Monaco Building Memorial', 'Cemetery Visit', 'Historical Context', 'Focus on Victims & Resilience']
  },
  {
    id: 'coffee',
    slug: 'coffee-tour-medellin',
    title: 'Coffee Tour Medellín',
    tagline: 'From Bean to Cup',
    description: 'Journey into the lush mountains of Antioquia to visit a traditional Colombian coffee farm. Learn the entire process of coffee making, from planting and harvesting to roasting and brewing the perfect cup.',
    duration: 'Half Day (5 Hours)',
    price: '$55 USD',
    image: 'https://picsum.photos/seed/coffee/800/1200',
    highlights: ['Visit a Working Coffee Farm', 'Coffee Tasting Session', 'Learn the Roasting Process', 'Beautiful Mountain Views']
  },
  {
    id: 'private',
    slug: 'private-tours-medellin',
    title: 'Private Medellín Tour',
    tagline: 'Tailored to Your Dreams',
    description: 'Experience Medellín exactly how you want to. Our private tours are fully customizable. Whether you want a deep dive into art, gastronomy, history, or nature, we craft the perfect itinerary just for you.',
    duration: 'Flexible',
    price: 'From $120 USD',
    image: 'https://picsum.photos/seed/private/800/1200',
    highlights: ['Customizable Itinerary', 'Private Transportation', 'Dedicated Expert Guide', 'VIP Experience']
  },
  {
    id: 'city',
    slug: 'medellin-city-tour',
    title: 'Medellín City Tour',
    tagline: 'The Heart of the City of Eternal Spring',
    description: 'Discover the essential sights of Medellín. Ride the innovative Metro and Metrocable systems, visit Plaza Botero with its famous sculptures, and explore the bustling downtown area.',
    duration: '4-5 Hours',
    price: '$40 USD',
    image: 'https://picsum.photos/seed/medellin/800/1200',
    highlights: ['Plaza Botero', 'Metrocable Ride', 'Pueblito Paisa', 'Downtown Exploration']
  }
];
