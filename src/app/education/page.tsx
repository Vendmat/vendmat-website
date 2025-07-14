import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { WhatsAppQuickAction } from '@/components/WhatsAppWidget';

export const metadata: Metadata = {
  title: "Education Solutions | Vendmat for Colleges, Universities & Schools",
  description: "Transform campus dining with Vendmat's 24/7 hot food solutions. Student-friendly pricing, nutritious meals, and modern convenience for educational institutions.",
  keywords: "college food solutions, university vending machines, campus dining, student meal plans, educational food service, school cafeteria alternative",
  openGraph: {
    title: "Vendmat Education Solutions - Smart Campus Dining",
    description: "Hot food vending machines designed for educational campuses. Student-friendly, nutritious, available 24/7.",
    type: "website",
  },
};

const educationStats = [
  { number: "5,000+", label: "Students served daily across campuses" },
  { number: "95%", label: "Student satisfaction with convenience" },
  { number: "30%", label: "Reduction in external food orders" },
  { number: "24/7", label: "Round-the-clock meal availability" }
];

const educationFeatures = [
  {
    icon: "🎓",
    title: "Student-Friendly Pricing",
    description: "Affordable meals designed for student budgets with meal plan integration options",
    benefits: ["Campus ID integration", "Flexible payment options", "Bulk discount programs"]
  },
  {
    icon: "🕒",
    title: "24/7 Availability", 
    description: "Perfect for late-night study sessions, early morning classes, and weekend campus activities",
    benefits: ["Always accessible", "No staff scheduling issues", "Consistent service quality"]
  },
  {
    icon: "🥗",
    title: "Nutritious Options",
    description: "Balanced meals with vegetarian, vegan, and dietary-specific options for diverse student needs",
    benefits: ["Health-conscious choices", "Cultural food preferences", "Nutritional information display"]
  },
  {
    icon: "📱",
    title: "Modern Technology",
    description: "Mobile app integration, pre-ordering, and cashless payments that students love",
    benefits: ["Mobile pre-ordering", "Digital payments", "Real-time availability"]
  }
];

const campusTypes = [
  {
    title: "Engineering & Technical Colleges",
    image: "/canva_designs/3.png",
    description: "Perfect for tech-savvy students with demanding study schedules and late-night project work",
    highlights: ["24/7 operation for project deadlines", "Quick grab-and-go options", "Energy-rich meal options"]
  },
  {
    title: "Medical & Healthcare Institutions",
    image: "/vendmat_photos/Machine_used.png", 
    description: "Reliable nutrition for medical students and staff with irregular schedules and high stress",
    highlights: ["Hygienic food handling", "Nutritious meal options", "Quick service between classes"]
  },
  {
    title: "Residential Universities",
    image: "/canva_designs/4.png",
    description: "Comprehensive dining solution for hostels and residential campuses with diverse student populations",
    highlights: ["Multiple cuisine options", "Affordable pricing", "Hostel-friendly locations"]
  }
];

const studentBenefits = [
  { icon: "💰", title: "Affordable Pricing", description: "Budget-friendly meals starting from ₹80" },
  { icon: "⏰", title: "Time-Saving", description: "Quick service between classes and study sessions" },
  { icon: "🌍", title: "Variety", description: "4 restaurant options in every machine" },
  { icon: "🔒", title: "Hygienic", description: "FSSAI compliant with temperature control at 60°C" }
];

export default function EducationPage() {
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
          <div className="absolute left-[15%] bottom-[15%] w-32 h-32 bg-gradient-to-r from-orange-400/[0.1] to-red-400/[0.1] rounded-full backdrop-blur-[1px] border border-white/[0.05] animate-[float3d_12s_ease-in-out_infinite_1s]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[slideInUp_1s_ease-out_0.2s]">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-sm text-white/60 tracking-wide font-medium">
                  Education Solutions
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                  Smart Campus
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 block font-black italic transform -skew-x-3 tracking-wider animate-[glow_3s_ease-in-out_infinite]">
                  Dining Solutions
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/60 leading-relaxed mb-8">
                Provide 24/7 access to hot, nutritious meals for students and staff. 
                Student-friendly pricing with modern technology that enhances campus life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppQuickAction 
                  type="college"
                  className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Get Campus Quote</span>
                  <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
                </WhatsAppQuickAction>
                <WhatsAppQuickAction 
                  type="demo"
                  className="group border-2 border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm text-lg font-semibold"
                >
                  <span>Schedule Demo</span>
                  <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
                </WhatsAppQuickAction>
              </div>
            </div>
            
            <div className="relative animate-[fadeInRight_1.5s_ease-out_0.5s]">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 blur-3xl scale-150" />
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/canva_designs/3.png"
                    alt="College Campus with Vendmat"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  <div className="absolute -bottom-6 -right-6 p-6 bg-white/[0.08] backdrop-blur-xl border border-white/[0.15] rounded-2xl hover:bg-white/[0.12] transition-all duration-300">
                    <div className="text-3xl font-bold text-orange-400 animate-[glow_3s_ease-in-out_infinite]">₹80+</div>
                    <div className="text-sm text-white/80">Starting Price</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Transforming</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Campus Dining</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {educationStats.map((stat, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center">
                  <div className="text-5xl font-bold text-orange-400 mb-3 group-hover:scale-110 transition-transform duration-300 animate-[glow_3s_ease-in-out_infinite]">{stat.number}</div>
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Benefits - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Why Students</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Love Vendmat</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {studentBenefits.map((benefit, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center h-full">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Designed for</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 block mt-2">Educational Institutions</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {educationFeatures.map((feature, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 h-full">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">{feature.description}</p>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Types - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Perfect for Every</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 block mt-2">Educational Environment</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campusTypes.map((campus, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl overflow-hidden hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={campus.image}
                      alt={campus.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">{campus.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{campus.description}</p>
                    <div className="space-y-3">
                      {campus.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-orange-400 group/item hover:scale-105 transition-transform duration-300">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0 animate-pulse" />
                          <span className="text-sm group-hover/item:text-orange-300 transition-colors duration-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-8 lg:p-12 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-[slideInLeft_1s_ease-out_0.2s]">
                <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold mb-4 border border-orange-500/30">
                  SUCCESS STORY
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">BITS Pilani</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 block mt-2">Hyderabad Campus</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  "Vendmat has revolutionized our campus dining. Students now have access to hot, 
                  quality meals 24/7, which has significantly improved their academic performance 
                  and overall campus experience."
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="group text-center p-4 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-xl hover:bg-white/[0.08] transition-all duration-300">
                    <div className="text-3xl font-bold text-orange-400 animate-[glow_3s_ease-in-out_infinite] group-hover:scale-110 transition-transform duration-300">5,000+</div>
                    <div className="text-gray-400">Students Served Daily</div>
                  </div>
                  <div className="group text-center p-4 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-xl hover:bg-white/[0.08] transition-all duration-300">
                    <div className="text-3xl font-bold text-orange-400 animate-[glow_3s_ease-in-out_infinite] group-hover:scale-110 transition-transform duration-300">95%</div>
                    <div className="text-gray-400">Satisfaction Rate</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">DK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">Dr. Rajesh Kumar</div>
                    <div className="text-orange-400">Campus Director</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-[fadeInRight_1s_ease-out_0.4s]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 blur-3xl scale-110" />
                  <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden border border-white/[0.1]">
                    <Image
                      src="/canva_designs/3.png"
                      alt="BITS Pilani Success Story"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Link - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-[slideInUp_1s_ease-out_0.2s]">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Learn More About</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 block mt-2">Campus Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Read our comprehensive guide on the advantages of hot food vending machines in Indian colleges
            </p>
            <Link 
              href="/blog/hot-food-vending-machines-colleges-india"
              className="group relative inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Read Full Article</span>
              <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10">→</div>
              <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
            </Link>
          </div>
        </div>
      </section>

      {/* Implementation Process - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Simple Campus</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 block mt-2">Implementation</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Campus Assessment",
                description: "Evaluate student population and optimal machine placement"
              },
              {
                step: "2",
                title: "Custom Menu",
                description: "Curate meals based on student preferences and dietary needs"
              },
              {
                step: "3",
                title: "Quick Setup",
                description: "Installation in strategic locations across campus"
              },
              {
                step: "4",
                title: "Student Training",
                description: "Orientation sessions and ongoing support"
              }
            ].map((process, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500 text-center">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 h-full">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-orange-500/50">
                    <span className="text-white font-bold text-2xl">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">{process.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{process.description}</p>
                </div>
                
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-transparent transform -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-r from-orange-500 to-red-500 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.05] blur-3xl" />
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-5%] top-[20%] w-64 h-20 bg-white/[0.1] rounded-full backdrop-blur-[2px] border border-white/[0.2] animate-[float3d_10s_ease-in-out_infinite] transform rotate-12" />
          <div className="absolute right-[5%] bottom-[30%] w-40 h-14 bg-white/[0.1] rounded-full backdrop-blur-[2px] border border-white/[0.2] animate-[float3d_8s_ease-in-out_infinite_2s] transform -rotate-15" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-[slideInUp_1s_ease-out_0.2s]">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-none">
              <span className="block">Transform Your</span>
              <span className="block font-black italic transform -skew-x-3 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                Campus Dining Experience
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join leading educational institutions already providing 24/7 nutrition with Vendmat. 
              Get a custom proposal for your campus.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-[slideInUp_1s_ease-out_0.4s]">
            <WhatsAppQuickAction 
              type="college"
              className="group relative bg-white text-orange-500 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get Campus Proposal</span>
              <div className="absolute inset-0 bg-orange-500/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
            </WhatsAppQuickAction>
            <Link 
              href="/faq"
              className="group border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-orange-500 font-semibold text-lg transition-all duration-300 inline-block hover:scale-105"
            >
              <span>View FAQ</span>
              <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 inline-block">→</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
      );
  }