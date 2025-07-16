import Button from '@/components/Button';
import WaveAnimation from '@/components/WaveAnimation';
import GlowingRings from '@/components/GlowingRings';
import Image from 'next/image';
import { getPopularItems } from '@/data/menuItems';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const ScrollAnimatedMachine = dynamic(() => import('@/components/ScrollAnimatedMachine'), {
  loading: () => <div className="h-96 bg-gray-800 animate-pulse rounded-lg" />,
});

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-64 bg-gray-800 animate-pulse rounded-lg" />,
});

export default function Home() {
  // Get popular menu items from shared data
  const popularItems = getPopularItems();

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - Completely Redesigned */}
      <section id="hero-section" className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.05] via-transparent to-red-500/[0.05] blur-3xl" />
        <WaveAnimation />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating shape - top left */}
          <div className="absolute left-[-10%] top-[15%] w-96 h-32 bg-gradient-to-r from-orange-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border border-white/[0.1] animate-[float3d_12s_ease-in-out_infinite] transform rotate-12" />
          
          {/* Medium floating shape - top right */}
          <div className="absolute right-[0%] top-[20%] w-48 h-20 bg-gradient-to-r from-red-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border border-white/[0.1] animate-[float3d_10s_ease-in-out_infinite_2s] transform -rotate-15" />
          
          {/* Small floating shape - bottom left */}
          <div className="absolute left-[10%] bottom-[20%] w-24 h-12 bg-gradient-to-r from-yellow-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border border-white/[0.1] animate-[float3d_8s_ease-in-out_infinite_4s] transform rotate-8" />
          
          {/* Tiny floating shape - bottom right */}
          <div className="absolute right-[20%] bottom-[30%] w-16 h-8 bg-gradient-to-r from-orange-400/[0.15] to-transparent rounded-full backdrop-blur-[2px] border border-white/[0.1] animate-[float3d_6s_ease-in-out_infinite_6s] transform -rotate-25" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
              {/* Badge */}
                <div className="animate-[slideInUp_1s_ease-out_0.2s]">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                    <span className="text-sm text-white/60 tracking-wide font-medium">
                Food Court In a Vending Machine
                    </span>
                  </div>
              </div>
              
              {/* Main Heading */}
                <div className="space-y-4 animate-[slideInUp_1s_ease-out_0.4s]">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                      Fresh Hot
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 block font-black italic transform -skew-x-3 tracking-wider animate-[glow_3s_ease-in-out_infinite]">
                      Meals Always
                </span>
              </h1>
                  
                  {/* Temperature indicator */}
                  <div className="flex items-center gap-3 mt-6">
                    <div className="flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full backdrop-blur-sm">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                      <span className="text-orange-200 text-sm font-semibold">60°C Always</span>
                    </div>
                    <div className="text-white/40 text-sm">• No Reheating Required</div>
                  </div>
                </div>
              
              {/* Subheading */}
                <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-xl animate-[slideInUp_1s_ease-out_0.6s]">
                  Revolutionary hot food vending machines with advanced supply chain technology delivering restaurant-quality meals instantly.
              </p>
              
              {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-[slideInUp_1s_ease-out_0.8s]">
                  <Button 
                    href="/contact" 
                    className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Book a Demo</span>
                    <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
                </Button>
                  <Button 
                    href="/menu" 
                    variant="outline" 
                    className="group border-2 border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm text-lg font-semibold"
                  >
                    <span>View Menu</span>
                    <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
                </Button>
              </div>
                
                {/* Key Features */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 animate-[slideInUp_1s_ease-out_1s]">
                  <div className="text-center p-3 bg-white/[0.02] border border-white/[0.05] rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-orange-400">4+</div>
                    <div className="text-white/60 text-xs">Restaurant Partners</div>
            </div>
                  <div className="text-center p-3 bg-white/[0.02] border border-white/[0.05] rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-orange-400">24/7</div>
                    <div className="text-white/60 text-xs">Always Available</div>
          </div>
                  <div className="text-center p-3 bg-white/[0.02] border border-white/[0.05] rounded-lg backdrop-blur-sm col-span-2 sm:col-span-1">
                    <div className="text-2xl font-bold text-orange-400">2hrs</div>
                    <div className="text-white/60 text-xs">Pre-order Window</div>
            </div>
          </div>
        </div>

              {/* Right Content - Enhanced Machine Display */}
              <div className="relative flex justify-center lg:justify-end animate-[fadeInRight_1.5s_ease-out_0.5s]">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 blur-3xl scale-150" />
                
                {/* Glowing rings behind machine */}
            <div className="absolute inset-0 z-0">
              <GlowingRings />
            </div>
            
                {/* Machine container with enhanced 3D effects */}
                <div className="relative z-10 group">
                  {/* Ground shadow */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-[60%] h-12 bg-orange-500/20 rounded-full blur-xl opacity-60" />
                  
                  {/* Machine with interactive hover effects */}
                  <div className="relative transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ScrollAnimatedMachine />
                  </div>
                
                  {/* Floating particles around machine */}
                  <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-60" />
                  <div className="absolute top-[60%] right-[15%] w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 bg-red-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }} />
                </div>
              </div>
            </div>
          </div>
            </div>
            
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section id="how" className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800 scroll-animate">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-on-scroll">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">How</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Vendmat Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-on-scroll [animation-delay:200ms]">
              Experience the future of food service with our revolutionary four-step process that puts fresh, hot meals at your fingertips.
            </p>
              </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Restaurant",
                description: "Select from our curated selection of premium restaurant partners directly from your mobile app or at the machine interface.",
                icon: "🏪",
                delay: "100ms"
              },
              {
                step: "2", 
                title: "Pre-Order (Optional)",
                description: "Schedule your meal up to 2 hours in advance. Restaurant accepts orders based on real-time capacity and availability.",
                icon: "⏰",
                delay: "200ms"
              },
              {
                step: "3",
                title: "Pay & Unlock", 
                description: "Secure payment through our app assigns your dedicated locker. Simply scan the QR code to unlock your fresh meal.",
                icon: "💳",
                delay: "300ms"
              },
              {
                step: "4",
                title: "Enjoy Hot Meal",
                description: "Receive restaurant-quality meals maintained at optimal 60°C temperature using our proprietary hot supply chain technology.",
                icon: "🍽️",
                delay: "400ms"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`group relative animate-on-scroll [animation-delay:${item.delay}] transform hover:scale-105 transition-all duration-500`}
              >
                {/* Background card with glassmorphism */}
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 h-full">
                  {/* Step number with glow */}
                  <div className="absolute -top-4 left-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl">
                        {item.step}
            </div>
              </div>
            </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-6 mt-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
              </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-on-scroll">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Perfect For</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Every Space</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-on-scroll [animation-delay:200ms]">
              Transform any location into a premium 24/7 food destination with Vendmat's intelligent vending solutions.
            </p>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Offices",
                image: "/canva_designs/2.png",
                description: "An always-on cafeteria alternative that reduces operational costs while significantly improving workplace satisfaction and productivity.",
                features: ["24/7 availability", "Reduced overhead costs", "Enhanced employee satisfaction", "Zero setup required"],
                delay: "0ms"
              },
              {
                title: "Education Institutes", 
                image: "/canva_designs/3.png",
                description: "Smart food access for students and faculty — providing nutritious, hot meals around the clock without requiring full-scale cafeteria infrastructure.",
                features: ["Student-friendly pricing", "24/7 study fuel", "Nutritious meal options", "Contactless service"],
                delay: "150ms"
              },
              {
                title: "Metro & Transit Hubs",
                image: "/canva_designs/4.png", 
                description: "Serves millions of travelers and transit workers with zero wait time, perfect for busy commuters who need quality meals on-the-go.",
                features: ["Instant grab-and-go", "No queuing required", "Fresh hot meals", "Multiple payment options"],
                delay: "300ms"
              }
            ].map((useCase, index) => (
              <div 
                key={index}
                className={`group relative animate-on-scroll [animation-delay:${useCase.delay}] transform hover:scale-105 transition-all duration-700`}
              >
                <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl overflow-hidden hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 h-full">
                  {/* Image container */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                <Image
                      src={useCase.image}
                      alt={useCase.title}
                  fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-2">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
              </ul>
            </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview - Enhanced */}
      <section id="menu" className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Popular</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Menu Items</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Fresh, affordable, and delicious meals prepared daily by our restaurant partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.category === 'vegetarian' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}>
                      {item.category === 'vegetarian' ? '🌱 Veg' : '🍗 Non-Veg'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-orange-400 font-bold text-2xl mb-2">₹{item.price}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos & Impact - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">Trusted By Industry Leaders</h2>
            <div className="flex justify-center items-center space-x-16 mb-20 opacity-60">
              {['Azure', 'Ecoworld', 'SJR I Park'].map((partner, index) => (
                <div key={index} className="text-gray-400 font-bold text-xl hover:text-orange-300 transition-colors duration-300 cursor-pointer">
                  {partner}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "5,000+", label: "Meals Served", sublabel: "And growing every day", icon: "🍽️" },
              { metric: "95%", label: "Satisfaction Rate", sublabel: "Customer happiness score", icon: "⭐" },
              { metric: "24/7", label: "Always Available", sublabel: "Round the clock service", icon: "🕐" }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-5xl font-bold text-orange-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.metric}
            </div>
                  <div className="text-xl text-white font-semibold mb-2">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.sublabel}</div>
            </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Find Nearest Location - Enhanced */}
      <section id="locations" className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Find</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Nearest Location</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Visit any of our active Vendmat locations for fresh, hot meals available around the clock
            </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "SJR I Park",
                description: "Premium office complex with multiple Vendmat machines serving fresh meals to corporate employees around the clock.",
                features: ["Available 24/7", "Ground Floor & Food Court", "15+ Menu Options"]
              },
              {
                name: "Ecoworld", 
                description: "Eco-friendly campus with Vendmat providing sustainable food solutions for residents and visitors.",
                features: ["Available 24/7", "Main Lobby", "Eco-friendly Packaging"]
              },
              {
                name: "Azure",
                description: "Tech hub location serving innovative professionals with quick access to nutritious meals throughout the day.",
                features: ["Available 24/7", "Multiple Floors", "Tech-Friendly Interface"]
              }
            ].map((location, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center h-full">
                  <div className="text-orange-400 text-5xl mb-6">📍</div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors duration-300">
                    {location.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {location.description}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {location.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              <span className="relative z-10">Request New Location</span>
              <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced */}
      <section className="relative py-32 bg-gradient-to-br from-orange-600 via-red-500 to-orange-700 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform 
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">
              Your Space?
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join forward-thinking organizations already revolutionizing their food service with Vendmat. 
            Zero setup cost, maximum convenience, unlimited possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              href="/contact" 
              className="group relative border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/50 overflow-hidden text-lg"
            >
              <span className="relative z-10">Book a Demo</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </Button>
            <Button 
              href="/partners" 
              className="group relative border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/50 overflow-hidden text-lg"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
