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
    coordinates: [48.946349, 2.196952],
    images: [
      'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521656693074-0ef32e80c0bce?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80'
    ],
    dropService: false
  },
  {
    name: 'Hyperlaverie Amiens',
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
    name: 'Hyperlaverie Auchy-les-Mines',
    address: ['ZAC des Flandres, 62138 Auchy-les-Mines'],
    machines: '20 machines à laver, 12 séchoirs',
    coordinates: [50.5167, 2.7333],
    images: [
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&q=80'
    ],
    dropService: false
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
                    <div className="p-2">
                      <div className="font-bold text-lg mb-2 text-blue-600">{location.name}</div>
                      <div className="text-sm mb-3 text-gray-600">{location.address.join(', ')}</div>
                      <div className="text-sm mb-3">{location.machines}</div>
                      {location.dropService && (
                        <div className="text-sm mb-3">
                          <span className="font-semibold">Drop Service :</span> {location.dropService}
                        </div>
                      )}
                      {!location.dropService && <div className="mb-3"></div>}
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates[0]},${location.coordinates[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-[#003D7D] transition-colors"
                      >
                        Itinéraire
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
                    <div className="h-16">
                    </div>
                  )}
                </div>
                <a
                  href={`https://www.google.com/maps/dir/current+location/${location.coordinates[0]},${location.coordinates[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-[#003D7D] transition-colors"
                >
                  Itinéraire
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
