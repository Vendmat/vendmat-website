"use client";

import Button from '@/components/Button';
import { useState } from 'react';
import { menuItems, MenuItem } from '@/data/menuItems';
import Image from 'next/image';

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : activeFilter === 'popular'
    ? menuItems.filter(item => item.popular)
    : menuItems.filter(item => item.category === activeFilter);

  const handleQuickView = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const closeQuickView = () => {
    setSelectedItem(null);
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
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8 animate-[slideInUp_1s_ease-out_0.2s]">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm text-white/60 tracking-wide font-medium">
                Fresh Daily
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-none mb-8 animate-[slideInUp_1s_ease-out_0.4s]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                Fuel Up
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 block font-black italic transform -skew-x-3 tracking-wider animate-[glow_3s_ease-in-out_infinite]">
                With Us
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto animate-[slideInUp_1s_ease-out_0.6s]">
              Fresh, delicious meals crafted daily and served hot whenever you need them. 
              From comfort food to gourmet options, all available 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Items - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Buttons - Enhanced */}
          <div className="flex justify-center mb-16 animate-on-scroll">
            <div className="relative p-2 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl">
              <div className="flex space-x-2">
                {[
                  { key: 'all', label: 'All Items', icon: '🍽️' },
                  { key: 'vegetarian', label: 'Vegetarian', icon: '🌱' },
                  { key: 'non-vegetarian', label: 'Non-Vegetarian', icon: '🍗' },
                  { key: 'popular', label: 'Popular', icon: '⭐' }
                ].map((filter) => (
                  <button 
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeFilter === filter.key 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-orange-500/50' 
                        : 'text-gray-300 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <span className="text-lg">{filter.icon}</span>
                    <span className="hidden sm:inline">{filter.label}</span>
                    <span className="sm:hidden">{filter.label.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Grid - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl overflow-hidden hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    {item.popular && (
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                        ⭐ Popular
                      </span>
                    )}
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border ${
                      item.category === 'vegetarian' 
                        ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                        : 'bg-red-500/20 text-red-300 border-red-500/30'
                    }`}>
                      {item.category === 'vegetarian' ? '🌱 Veg' : '🍗 Non-Veg'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-orange-400">₹{item.price}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <span className="bg-gray-700/50 px-2 py-1 rounded-full">{item.calories} cal</span>
                    </div>
                    <button 
                      onClick={() => handleQuickView(item)}
                      className="group/btn relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">Quick View</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Walk-up & Order Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Walk-up &</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Order</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              No app? No problem! Simply walk up to any Vendmat machine and order directly from our intuitive touchscreen interface.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📱",
                title: "Touch & Select", 
                description: "Browse menu items on our intuitive touchscreen interface with beautiful imagery and detailed descriptions",
                step: "1"
              },
              {
                icon: "💳",
                title: "Pay & Confirm",
                description: "Secure payment with card, UPI, or digital wallet. Get instant confirmation and estimated ready time",
                step: "2"
              },
              {
                icon: "🍽️", 
                title: "Collect & Enjoy",
                description: "Your fresh meal is dispensed at optimal 60°C temperature and ready to eat instantly - no waiting required",
                step: "3"
              }
            ].map((step, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl">
                        {step.step}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-5xl mb-6 mt-4 transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              href="/contact" 
              className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Find Nearest Machine</span>
              <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick View Modal - Enhanced */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeQuickView}>
          <div className="bg-gray-900/95 backdrop-blur-xl border border-white/[0.1] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <Image 
                  src={selectedItem.image} 
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <button 
                  onClick={closeQuickView}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/[0.1] backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/[0.2] transition-all duration-300 border border-white/[0.2] hover:scale-110"
                >
                  <span className="text-xl">✕</span>
                </button>
                
                {selectedItem.popular && (
                  <span className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                    ⭐ Popular Choice
                  </span>
                )}
              </div>
              
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{selectedItem.name}</h2>
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                      selectedItem.category === 'vegetarian' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}>
                      {selectedItem.category === 'vegetarian' ? '🌱 Vegetarian' : '🍗 Non-Vegetarian'}
                    </span>
                  </div>
                  <span className="text-4xl lg:text-5xl font-bold text-orange-400">₹{selectedItem.price}</span>
                </div>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">{selectedItem.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div className="p-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-2xl mr-3">🥘</span>
                      Ingredients
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{selectedItem.ingredients}</p>
                  </div>
                  <div className="p-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="text-2xl mr-3">📊</span>
                      Nutrition
                    </h3>
                    <div className="flex items-center space-x-4">
                      <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
                        {selectedItem.calories} calories
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden"
                    onClick={closeQuickView}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Order Now</span>
                    <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm font-semibold"
                    onClick={closeQuickView}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
