import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ThingsToDo from './pages/ThingsToDo';
import Blog from './pages/Blog';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="medellin-tours" element={<Tours />} />
            <Route path="things-to-do-medellin" element={<ThingsToDo />} />
            <Route path="blog" element={<Blog />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path=":slug" element={<TourDetail />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
