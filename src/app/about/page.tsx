import Card from '@/components/Card';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-32 scroll-animate overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.05] via-transparent to-red-500/[0.05] blur-3xl" />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-5%] top-[20%] w-72 h-24 bg-gradient-to-r from-orange-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border border-white/[0.1] animate-[float3d_10s_ease-in-out_infinite] transform rotate-12" />
          <div className="absolute right-[10%] bottom-[30%] w-48 h-16 bg-gradient-to-r from-red-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border border-white/[0.1] animate-[float3d_8s_ease-in-out_infinite_2s] transform -rotate-15" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8 animate-[slideInUp_1s_ease-out_0.2s]">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm text-white/60 tracking-wide font-medium">
                Revolutionizing Food Access
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-none mb-8 animate-[slideInUp_1s_ease-out_0.4s]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                About
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 block font-black italic transform -skew-x-3 tracking-wider animate-[glow_3s_ease-in-out_infinite]">
                Vendmat
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto animate-[slideInUp_1s_ease-out_0.6s]">
              We're revolutionizing food access through smart vending technology, making fresh, affordable meals available 24/7 wherever you need them.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Origin - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Our</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Mission</span>
                  </h2>
                  <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                    <p>
                      At Vendmat, we believe everyone deserves access to hot, nutritious meals 
                      regardless of time or location. Traditional food service models fail to 
                      serve the growing need for 24/7 access in our modern world.
                    </p>
                    <p>
                      We've developed smart vending solutions that combine fresh cooking, 
                      AI-powered inventory management, and instant heating technology to 
                      deliver restaurant-quality meals anywhere, anytime.
                    </p>
                  </div>
                </div>

                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse" />
                    Our Vision
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    To become the leading platform for automated food service, 
                    making quality meals accessible to every community worldwide.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll [animation-delay:200ms] relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 blur-3xl scale-150" />
                <div className="relative overflow-hidden rounded-3xl">
                  <Image 
                    src="/vendmat_photos/DSC01982- With Boxes.png" 
                    alt="Vendmat Technology" 
                    width={600}
                    height={450}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-on-scroll">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Our</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-on-scroll [animation-delay:200ms]">
              The principles that guide everything we do and drive our innovation forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Accessibility",
                description: "Making quality food accessible to everyone, everywhere, breaking down barriers of time and location through innovative technology.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: "🌱", 
                title: "Sustainability",
                description: "Reducing food waste through smart forecasting and sustainable packaging solutions that protect our environment.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: "⚡",
                title: "Innovation", 
                description: "Leveraging cutting-edge technology to solve real-world problems in food service and distribution systems.",
                gradient: "from-blue-500 to-purple-500"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="group relative animate-on-scroll [animation-delay:${(index + 1) * 100}ms] transform hover:scale-105 transition-all duration-500"
              >
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 h-full text-center">
                  {/* Icon with glow */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 scale-150`} />
                    <div className={`relative w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mx-auto shadow-2xl`}>
                      <span className="text-3xl">{value.icon}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Meet Our</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The passionate innovators behind Vendmat's revolutionary technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Pranay Kukreti",
                role: "Founder & CEO", 
                description: "Former tech executive with 10+ years in automation and IoT, passionate about solving food accessibility challenges through innovative technology solutions.",
                image: "/team/pranay.jpg" // placeholder
              },
              {
                name: "Shreyas Belgave",
                role: "Head of Technology",
                description: "AI and machine learning expert focused on predictive analytics and smart inventory management systems that power our vending solutions.",
                image: "/team/shreyas.jpg" // placeholder  
              },
              {
                name: "Karishma Sharma", 
                role: "Head of Operations",
                description: "Food service veteran with expertise in kitchen operations, supply chain optimization, and quality assurance protocols.",
                image: "/team/karishma.jpg" // placeholder
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="group relative transform hover:scale-105 transition-all duration-500"
              >
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center h-full">
                  {/* Profile image placeholder with gradient */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500 scale-110" />
                    <div className="relative w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                      <span className="text-4xl text-white font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-orange-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-orange-400 font-semibold mb-4 text-lg">
                    {member.role}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats - Enhanced */}
      <section className="relative py-32 bg-gradient-to-br from-orange-600 via-red-500 to-orange-700 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Growing 
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">
                Impact
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Growing every day, serving communities across India with innovative food solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "5,000+", label: "Meals Served", icon: "🍽️" },
              { metric: "3", label: "Locations", icon: "📍" },
              { metric: "95%", label: "Customer Satisfaction", icon: "⭐" },
              { metric: "24/7", label: "Availability", icon: "🕐" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl lg:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.metric}
                </div>
                <div className="text-orange-100 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 