import { MapPin, Clock, Navigation } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const locations = [
  {
    name: 'Hyperlaverie Carrefour Sartrouville',
    address: ['Av. Robert Schuman', '78500 Sartrouville'],
    machines: '25 machines à laver, 15 séchoirs',
    coordinates: [48.946349, 2.196952],
    images: [
      'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80'
    ],
    dropService: false
  },
  {
    name: 'Hyperlaverie Carrefour Amiens',
    address: ["Zone d'Activité Commerciale Vallée", "80080 Amiens"],
    machines: '20 machines à laver, 12 séchoirs',
    coordinates: [49.9200158, 2.3028505],
    images: [
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&q=80'
    ],
    dropService: true
  },
  {
    name: 'Hyperlaverie Carrefour Auchy-les-Mines',
    address: ['ZAC des Flandres', '62138 Auchy-les-Mines'],
    machines: '22 machines à laver, 14 séchoirs',
    coordinates: [50.5199749, 2.7951666],
    images: [
      'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596640843432-95c4f0ad9464?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80'
    ],
    dropService: false
  }
];

const Map = () => {
  useEffect(() => {
    const L = window.L;
    if (!L) return;

    const map = L.map('map').setView([49.7833, 2.4333], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ' OpenStreetMap contributors'
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    locations.forEach(location => {
      const marker = L.marker(location.coordinates, { icon: customIcon }).addTo(map);
      const popupContent = `
        <div class="p-2">
          <h3 class="font-semibold text-lg mb-2">${location.name}</h3>
          <p class="text-sm mb-1">${location.address.join(', ')}</p>
          <p class="text-sm mb-3">${location.machines}</p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=${location.coordinates[0]},${location.coordinates[1]}"
            target="_blank"
            rel="noopener noreferrer"
            style="color;white !important;"
            class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Itinéraire
          </a>
        </div>
      `;
      marker.bindPopup(popupContent);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="h-[500px] w-full rounded-lg"></div>;
};

const Locations = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init();
  }, []);

  return (
    <section id="ou-nous-trouver" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900">Où nous trouver ?</h2>
          <p className="mt-4 text-xl text-gray-600">
            Près de 40 appareils à votre disposition dans chacune de nos hyperlaveries.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {location.dropService && (
                <div className="absolute top-3 right-3 z-10 drop-shadow-lg">
                  <div className="relative">
                    <img
                      src="/hyperlaverie/badge-drop.jpeg"
                      alt="Drop Service"
                      className="w-16 h-16 rounded-[22px]"
                    />
                  </div>
                </div>
              )}
              <Swiper
                modules={[SwiperNavigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                {location.images.map((image, imageIndex) => (
                  <SwiperSlide key={imageIndex}>
                    <img
                      src={image}
                      alt={`${location.name} ${imageIndex + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">{location.name}</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-secondary mt-1" />
                    <div className="ml-2">
                      {location.address.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span className="ml-2">24h/24 - 7j/7</span>
                  </div>
                  <p className="text-gray-600">{location.machines}</p>
                  {location.dropService && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-primary font-medium">
                        Service Drop disponible : déposez votre linge et récupérez-le propre et plié !
                      </p>
                    </div>
                  )}
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates[0]},${location.coordinates[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-[#003D7D] transition-colors"
                >
                  Voir sur la carte
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Carte OpenStreetMap */}
        <div id="map" className="w-full h-[600px] mt-12 z-0 relative" style={{ zIndex: 0 }}>
          {isClient && <Map />}
        </div>
      </div>
    </section>
  );
};

export default Locations;
