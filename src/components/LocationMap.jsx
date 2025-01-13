import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
                  <div className="text-sm mb-2">{location.address}</div>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${location.position[0]},${location.position[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white' }}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                  >
                    Itinéraire
                  </a>
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
