import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Prices from './components/Prices';
import Locations from './components/Locations';
import Contact from './components/Contact';
import WaveDecoration from './components/WaveDecoration';
import Footer from './components/Footer';

function App() {
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
