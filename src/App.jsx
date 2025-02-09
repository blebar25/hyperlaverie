import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Prices from './components/Prices';
import Locations from './components/Locations';
import Contact from './components/Contact';
import WaveDecoration from './components/WaveDecoration';
import Footer from './components/Footer';
import MentionsLegales from './pages/MentionsLegales';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const HomePage = () => (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Prices />
        <Locations />
        <Contact />
      </main>
      <WaveDecoration />
      <Footer />
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Navigate to="/hyperlaverie" replace />} />
          <Route path="/hyperlaverie" element={<HomePage />} />
          <Route path="/hyperlaverie/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
