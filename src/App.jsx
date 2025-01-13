import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import LocationMap from './components/LocationMap';
import Prices from './components/Prices';
import Locations from './components/Locations';
import Contact from './components/Contact';
import WaveDecoration from './components/WaveDecoration';
import Footer from './components/Footer';
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

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
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
      </div>
    </Router>
  );
}

export default App;
