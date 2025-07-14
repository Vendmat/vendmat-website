'use client';

import { useState, useEffect } from 'react';
import { WhatsAppQuickAction } from '@/components/WhatsAppWidget';

interface Location {
  id: string;
  name: string;
  address: string;
  description: string;
  googleCode: string;
  amenities: string[];
  hours: string;
  contact?: string;
}

const vendmatLocations: Location[] = [
  {
    id: 'azure',
    name: 'Azure Tech Hub',
    address: '3H4V+5P Bengaluru, Karnataka',
    description: 'Premium technology campus with multiple Vendmat machines serving fresh meals to IT professionals.',
    googleCode: '3H4V+5P Bengaluru, Karnataka',
    amenities: ['24/7 Access', 'Multiple Machines', 'Tech-Friendly Interface', '15+ Menu Options'],
    hours: '11:30 AM to 7:30 PM',
  },
  {
    id: 'ecoworld',
    name: 'Ecoworld Campus',
    address: 'WMCM+WF Bengaluru, Karnataka',
    description: 'Eco-friendly residential and commercial complex with sustainable food solutions.',
    googleCode: 'WMCM+WF Bengaluru, Karnataka',
    amenities: ['24/7 Access', 'Eco-Friendly Packaging', 'Main Lobby Location', 'Sustainable Options'],
    hours: '11:30 AM to 7:30 PM',
  }
];

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    // Try to get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Location access denied or unavailable');
        }
      );
    }
  }, []);

  const openInMaps = (location: Location) => {
    const url = `https://maps.google.com/?q=${location.googleCode}`;
    window.open(url, '_blank');
  };

  const getDirections = (location: Location) => {
    const url = `https://maps.google.com/?q=${location.googleCode}&navigate=yes`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.05] via-transparent to-red-500/[0.05] blur-3xl" />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-5%] top-[20%] w-72 h-24 bg-gradient-to-r from-orange-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border border-white/[0.1] animate-[float3d_10s_ease-in-out_infinite] transform rotate-12" />
          <div className="absolute right-[5%] bottom-[30%] w-48 h-16 bg-gradient-to-r from-red-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border border-white/[0.1] animate-[float3d_8s_ease-in-out_infinite_2s] transform -rotate-15" />
          <div className="absolute left-[10%] bottom-[20%] w-32 h-32 bg-gradient-to-r from-orange-400/[0.1] to-red-400/[0.1] rounded-full backdrop-blur-[2px] border border-white/[0.05] animate-[float3d_12s_ease-in-out_infinite_1s] transform rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8 animate-[slideInUp_1s_ease-out_0.2s]">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm text-white/60 tracking-wide font-medium">
                Find Your Nearest Location
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-none mb-8 animate-[slideInUp_1s_ease-out_0.4s]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                Vendmat
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 block font-black italic transform -skew-x-3 tracking-wider animate-[glow_3s_ease-in-out_infinite]">
                Locations
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-4xl mx-auto mb-12 animate-[slideInUp_1s_ease-out_0.6s]">
              Discover fresh, hot meals available 24/7 at our conveniently located Vendmat machines. 
              Quality food whenever you need it, wherever you are.
            </p>

            {/* Alert Box */}
            <div className="inline-block p-6 bg-white/[0.03] backdrop-blur-xl border border-green-500/30 rounded-2xl max-w-2xl mx-auto animate-[slideInUp_1s_ease-out_0.8s]">
              <div className="flex items-center justify-center gap-3">
                <div className="text-2xl">🌟</div>
                <p className="text-green-300 font-medium">
                  All locations offering 24/7 access with fresh meals replenished 4 times daily
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Stats - Enhanced */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: vendmatLocations.length, label: 'Active Locations', suffix: '' },
              { value: 24, label: 'Hours Available', suffix: '/7' },
              { value: 60, label: 'Food Temperature', suffix: '°C' },
              { value: 4, label: 'Daily Restocks', suffix: 'x' }
            ].map((stat, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grid - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Current</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Locations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find the Vendmat machine nearest to you and enjoy fresh, hot meals anytime
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vendmatLocations.map((location, index) => (
              <div 
                key={location.id} 
                className={`group relative transform hover:scale-105 transition-all duration-500 ${
                  selectedLocation === location.id ? 'scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 h-full">
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-semibold mb-6">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Active
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                    {location.name}
                  </h3>
                  <p className="text-orange-400 font-medium mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {location.address}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-8">{location.description}</p>
                  
                  {/* Amenities Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {location.amenities.map((amenity, idx) => (
                      <div key={idx} className="relative p-3 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300 text-center group/amenity">
                        <span className="text-green-400 text-sm font-medium group-hover/amenity:text-green-300 transition-colors duration-300">
                          {amenity}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hours and Contact */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl border border-white/[0.05]">
                      <span className="text-orange-400 text-lg">🕒</span>
                      <span className="text-gray-300">{location.hours}</span>
                    </div>
                    {location.contact && (
                      <div className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl border border-white/[0.05]">
                        <span className="text-orange-400 text-lg">📞</span>
                        <span className="text-gray-300">{location.contact}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => openInMaps(location)}
                      className="group/btn relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden flex items-center justify-center gap-2"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="relative z-10">View on Maps</span>
                      <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 skew-x-12" />
                    </button>
                    <button
                      onClick={() => getDirections(location)}
                      className="group/btn relative border-2 border-orange-500 text-orange-400 px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Get Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Interactive</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Map</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore all Vendmat locations on our interactive map and find the closest one to you
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 blur-2xl scale-110" />
            <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl overflow-hidden hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
              <div className="h-96 lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353!3d-37.8172099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vendmat Locations Map"
                  className="rounded-3xl"
                ></iframe>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-400 mt-6 text-lg">
            Click on the markers to see details about each Vendmat location
          </p>
        </div>
      </section>

      {/* Request New Location - Enhanced */}
      <section className="relative py-32 bg-gradient-to-br from-orange-600 via-red-500 to-orange-700 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Don't See a Location 
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">
                Near You?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              We're expanding rapidly! Request a Vendmat machine for your location and help us bring 
              fresh, hot meals to your community.
            </p>
          </div>
          
          {/* Location Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '🏢',
                title: 'Corporate Offices',
                description: 'Perfect for office complexes and business centers with high foot traffic'
              },
              {
                icon: '🎓', 
                title: 'Educational Campuses',
                description: 'Ideal for colleges, universities, and schools with diverse food needs'
              },
              {
                icon: '🏥',
                title: 'Healthcare Facilities', 
                description: 'Great for hospitals and medical centers requiring 24/7 food access'
              }
            ].map((type, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.1] backdrop-blur-xl border border-white/[0.2] rounded-3xl hover:bg-white/[0.15] hover:border-white/[0.3] transition-all duration-500 text-center h-full">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                    {type.title}
                  </h3>
                  <p className="text-orange-100 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <WhatsAppQuickAction 
              type="demo"
              className="group relative border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/50 overflow-hidden text-lg"
            >
              <span className="relative z-10">Request New Location</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </WhatsAppQuickAction>
            <WhatsAppQuickAction 
              type="partnership"
              className="group relative border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/50 overflow-hidden text-lg"
            >
              <span className="relative z-10">Become a Partner</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </WhatsAppQuickAction>
          </div>
        </div>
      </section>
    </div>
  );
}