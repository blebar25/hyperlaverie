import { MapPin, Clock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const locations = [
  {
    name: 'Hyperlaverie Carrefour Sartrouville',
    address: ['Av. Robert Schuman', '78500 Sartrouville'],
    machines: '25 machines à laver, 15 séchoirs',
    mapLink: 'https://www.google.com/maps/place/Carrefour+Sartrouville/@48.9463524,2.1920811,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66691bf270d0d:0x84ca7ae462ab00f!8m2!3d48.946349!4d2.196952!16s%2Fg%2F113j93cc6',
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
    mapLink: 'https://www.google.com/maps/place/Centre+commercial+Carrefour+Amiens/@49.9004578,2.2733897,14z/data=!4m10!1m2!2m1!1scarrefour+amiens+!3m6!1s0x47e786bd0001e2c5:0xcfdfff8fb015f359!8m2!3d49.9200158!4d2.3028505!15sChBjYXJyZWZvdXIgYW1pZW5zIgOIAQFaEiIQY2FycmVmb3VyIGFtaWVuc5IBD3Nob3BwaW5nX2NlbnRlcuABAA!16s%2Fg%2F11clgksy85',
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
    mapLink: 'https://www.google.com/maps/place/Centre+commercial+Carrefour+Auchy+les+Mines/@50.5199783,2.7925917,17z/data=!3m1!4b1!4m6!3m5!1s0x12b42cd68567d367:0xb7e45ad9ceab31a8!8m2!3d50.5199749!4d2.7951666!16s%2Fg%2F11c464pglk',
    images: [
      'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596640843432-95c4f0ad9464?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80'
    ],
    dropService: false
  }
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Où nous trouver ?</h2>
          <p className="mt-4 text-xl text-gray-600">
            Près de 40 appareils à votre disposition dans chacune de nos hyperlaveries.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
              {location.dropService && (
                <div className="absolute top-3 right-3 z-10 drop-shadow-lg">
                  <div className="relative">
                    <img
                      src="/badge-drop.jpeg"
                      alt="Drop Service"
                      className="w-16 h-16 rounded-[22px]"
                    />
                  </div>
                </div>
              )}
              <Swiper
                modules={[Navigation, Pagination]}
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
                  <p className="text-sm text-gray-600 mt-2">{location.machines}</p>
                  {location.dropService && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-primary font-medium">
                        Service Drop disponible : déposez votre linge et récupérez-le propre et plié !
                      </p>
                    </div>
                  )}
                </div>
                <a
                  href={location.mapLink}
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
      </div>
    </section>
  );
};

export default Locations;
