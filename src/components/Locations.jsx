import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Correction pour l'icône du marqueur
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

import { MapPin, Clock, Navigation } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const locations = [
  {
    name: 'Hyperlaverie Sartrouville',
    address: ['Av. Robert Schuman', '78500 Sartrouville'],
    machines: '25 machines à laver, 15 séchoirs',
    coordinates: [48.9530046, 2.1636584],
    googleMapsUrl: 'https://www.google.com/maps/place/Carrefour+Sartrouville/@48.946349,2.196952,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66691bf270d0d:0x84ca7ae462ab00f!8m2!3d48.946349!4d2.196952!16s%2Fg%2F113j93cc6?entry=ttu',
    images: [
      '/hyperlaverie/images/Sartrouville/IMG_3111.jpeg',
      '/hyperlaverie/images/Sartrouville/IMG_3112.jpeg',
      '/hyperlaverie/images/Sartrouville/IMG_3113.jpeg',
      '/hyperlaverie/images/Sartrouville/IMG_3114.jpeg',
      '/hyperlaverie/images/Sartrouville/IMG_3115.jpeg',
      '/hyperlaverie/images/Sartrouville/IMG_3116.jpeg',
      '/hyperlaverie/images/Sartrouville/IMG_3117.jpeg',
      '/hyperlaverie/images/Sartrouville/IMG_3118.jpeg'
    ],
    dropService: false,
    isActive: true
  },
  {
    name: 'Hyperlaverie Amiens',
    address: ["Zone d'Activité Commerciale Vallée", "80080 Amiens"],
    machines: '20 machines à laver, 12 séchoirs',
    coordinates: [49.9200158, 2.3002756],
    googleMapsUrl: 'https://www.google.com/maps/place/Centre+commercial+Carrefour+Amiens/@49.9200158,2.3002756,17z/data=!3m1!4b1!4m6!3m5!1s0x47e786bd0001e2c5:0xcfdfff8fb015f359!8m2!3d49.9200158!4d2.3028505!16s%2Fg%2F11clgksy85?entry=ttu',
    images: [
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&q=80'
    ],
    dropService: true,
    isActive: false
  },
  {
    name: 'Hyperlaverie Auchy-les-Mines',
    address: ['ZAC des Flandres, 62138 Auchy-les-Mines'],
    machines: '20 machines à laver, 12 séchoirs',
    coordinates: [50.519941, 2.796117],
    googleMapsUrl: 'https://www.google.com/maps/place/Carrefour+Auchy+Les+Mines/data=!4m2!3m1!1s0x0:0x1c29fa22e2c12c53?sa=X&ved=1t:2428',
    images: [
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&q=80'
    ],
    dropService: false,
    ecoDryers: true,
    isActive: false
  }
];

const MapBounds = ({ locations }) => {
  const map = useMap();
  
  React.useEffect(() => {
    if (locations.length > 0) {
      const bounds = locations.reduce(
        (bounds, location) => bounds.extend([location.coordinates[0], location.coordinates[1]]),
        L.latLngBounds([locations[0].coordinates[0], locations[0].coordinates[1]], [locations[0].coordinates[0], locations[0].coordinates[1]])
      );
      
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [locations, map]);

  return null;
};

const Map = () => {
  return (
    <div 
      className="relative p-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-3xl transform -skew-y-2"></div>
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-2">
          <div id="map" className="h-[500px] w-full rounded-xl overflow-hidden">
            <MapContainer 
              style={{ height: '500px', width: '100%' }}
              className="rounded-lg shadow-lg"
            >
              <MapBounds locations={locations} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((location, index) => (
                <Marker 
                  key={index} 
                  position={[location.coordinates[0], location.coordinates[1]]}
                >
                  <Popup style="width: 290px;" className="custom-popup">
                    <div className={`p-2 ${!location.isActive ? 'opacity-75 grayscale' : ''}`}>
                      <div className="font-bold text-lg mb-2 text-blue-600">{location.name}</div>
                      {!location.isActive && (
                        <div className="bg-gray-800 text-center text-white text-xs font-medium px-3 py-2 rounded-full shadow-lg inline-block mb-2">
                          Prochainement
                        </div>
                      )}
                      <div className="text-sm mb-3 text-gray-600">{location.address.join(', ')}</div>
                      <div className="text-sm mb-3">{location.machines}</div>
                      <div className="mb-3"></div>
                      <a
                        href={location.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-[#003D7D] transition-colors"
                      >
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          Itinéraire
                        </div>
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
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

        {isClient && <Map />}

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${!location.isActive ? 'opacity-75 grayscale' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {(location.dropService || location.ecoDryers || !location.isActive) && (
                <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                  {!location.isActive && (
                    <div className="bg-gray-800 text-center text-white text-xs font-medium px-3 py-2 rounded-full shadow-lg inline-block">
                      Prochainement
                    </div>
                  )}
                  {location.dropService && (
                    <div className="drop-shadow-lg">
                      <div className="relative">
                        <img
                          src="/hyperlaverie/badge-drop.jpeg"
                          alt="Drop Service"
                          style={{ width: "4rem", height: "4rem", borderRadius: "22px", }}  
                        />
                      </div>
                    </div>
                  )}
                  {location.ecoDryers && (
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-3 py-2 rounded-full shadow-lg border border-green-200 max-w-[200px] text-center">
                      Séchoirs éco et séchoirs grande capacité
                    </div>
                  )}
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
                    <span className="ml-2">7h/22H - 7j/7</span>
                  </div>
                  <p className="text-gray-600">{location.machines}</p>
                  {location.dropService && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-primary font-medium">
                        Service Drop disponible : déposez votre linge et récupérez-le propre et plié !
                      </p>
                    </div>
                  )}
                  {!location.dropService && (
                    <div className="h-[64px]"></div>
                  )}
                </div>
                <div className="mt-4">
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-[#003D7D] transition-colors"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Itinéraire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
