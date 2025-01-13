import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Correction pour l'icône du marqueur
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const locations = [
  {
    name: "Hyperlaverie Carrefour Market Balaruc",
    position: [43.4401, 3.6841],
    address: "Route de Sète, 34540 Balaruc-le-Vieux"
  },
  {
    name: "Hyperlaverie Carrefour Market Frontignan",
    position: [43.4467, 3.7527],
    address: "12 Avenue du Maréchal Juin, 34110 Frontignan"
  },
  {
    name: "Hyperlaverie Carrefour Market Sète",
    position: [43.4078, 3.6925],
    address: "1 Quai des Moulins, 34200 Sète"
  }
];

const LocationMap = () => {
  const center = [43.4315, 3.7098]; // Centre approximatif entre les trois points

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Laveries</h2>
        <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
          <MapContainer 
            center={center} 
            zoom={12} 
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
              <Marker key={index} position={location.position}>
                <Popup>
                  <div className="font-semibold">{location.name}</div>
                  <div className="text-sm">{location.address}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
