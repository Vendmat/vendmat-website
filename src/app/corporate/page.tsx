import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { WhatsAppQuickAction } from '@/components/WhatsAppWidget';

export const metadata: Metadata = {
  title: "Corporate Meal Benefits & Employee Subsidization | Vendmat",
  description: "Revolutionary corporate meal benefits platform with employee subsidization, tier-based management, and 24/7 smart vending. Corporate dashboard, automated invoicing, and branded experience.",
  keywords: "corporate meal benefits, employee food subsidization, corporate food allowance, tier-based meal benefits, corporate dashboard, employee meal credits, workplace food benefits",
  openGraph: {
    title: "Vendmat Corporate Panel - Employee Meal Subsidization Platform",
    description: "Advanced corporate meal benefits with subsidization, tier management, and real-time analytics.",
    type: "website",
  },
};

const corporateStats = [
  { number: "24/7", label: "Access to fresh meals anytime" },
  { number: "85%", label: "Increase in employee satisfaction" },
  { number: "40%", label: "Reduction in food service costs" },
  { number: "95%", label: "Machine uptime achieved" }
];

const workplaceProblems = [
  {
    icon: "⏱️",
    title: "Long Queues",
    description: "Employees spend valuable time waiting in line during mealtimes, reducing productivity and increasing stress."
  },
  {
    icon: "🕐",
    title: "Fixed Timings",
    description: "Traditional setups offer food only during specific mealtimes, limiting flexibility for employees with varying schedules."
  },
  {
    icon: "🔒",
    title: "Vendor Dependency",
    description: "Companies are often locked into contracts with food service providers, limiting options and potentially increasing costs."
  },
  {
    icon: "🍽️",
    title: "Limited Variety",
    description: "Traditional food options are often repetitive and limited, reducing satisfaction and potentially affecting employee morale."
  }
];

const corporateFeatures = [
  {
    icon: "🥗",
    title: "Fresh Food Vending",
    description: "Smart vending machines with fresh, healthy food options prepared on demand",
    benefits: ["Fresh ingredients", "Pre-order meals", "Reduced waste"]
  },
  {
    icon: "🕒",
    title: "24/7 Availability", 
    description: "Access to nutritious meals anytime, anywhere with extended operating hours",
    benefits: ["Anytime access", "Increased convenience", "Higher productivity"]
  },
  {
    icon: "🏢",
    title: "Corporate Integration",
    description: "Seamless connection with existing corporate meal benefit programs",
    benefits: ["Credits & free meals", "Branded experience", "Usage tracking"]
  },
  {
    icon: "📊",
    title: "Corporate Dashboard",
    description: "Real-time monitoring and comprehensive reporting for all transactions",
    benefits: ["Usage analytics", "Automated invoicing", "Tier management"]
  }
];

const corporateTiers = [
  {
    name: "CXO Tier",
    employees: 12,
    rules: 2,
    benefits: ["Weekly credits", "Free meal daily"]
  },
  {
    name: "Management",
    employees: 35,
    rules: 3,
    benefits: ["Daily credits", "Free meal weekly"]
  },
  {
    name: "Staff",
    employees: 48,
    rules: 2,
    benefits: ["Monthly credits", "Free meal monthly"]
  }
];

const useCases = [
  {
    title: "Tech Parks & IT Companies",
    image: "/canva_designs/2.png",
    description: "Perfect for 24/7 operations with rotating shifts and high employee density",
    highlights: ["Late-night shift support", "Multiple cuisine options", "Pre-order capabilities"]
  },
  {
    title: "Manufacturing Facilities",
    image: "/vendmat_photos/Machine_used.png", 
    description: "Reliable meal access for factory workers across all shifts without interrupting production",
    highlights: ["Industrial-grade reliability", "Quick service", "Nutritious meal options"]
  },
  {
    title: "Financial Services",
    image: "/canva_designs/8.png",
    description: "Professional environment solutions for banks, insurance companies, and financial institutions",
    highlights: ["Premium food quality", "Professional aesthetics", "Compliance-ready"]
  }
];

export default function CorporatePage() {
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
                  Corporate Solutions
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                  Revolutionize
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                  Employee Meals
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 block font-black italic transform -skew-x-3 tracking-wider animate-[glow_3s_ease-in-out_infinite]">
                  with Smart Vending
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/60 leading-relaxed mb-8">
                Transform how your company provides food benefits with our Corporate Panel. 
                Tier-based meal subsidization, automated invoicing, and branded employee experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppQuickAction 
                  type="corporate"
                  className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Get Corporate Quote</span>
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
                    src="/canva_designs/2.png"
                    alt="Corporate Office with Vendmat"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  <div className="absolute -bottom-6 -left-6 p-6 bg-white/[0.08] backdrop-blur-xl border border-white/[0.15] rounded-2xl hover:bg-white/[0.12] transition-all duration-300">
                    <div className="text-3xl font-bold text-orange-400 animate-[glow_3s_ease-in-out_infinite]">24/7</div>
                    <div className="text-sm text-white/80">Always Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workplace Problems Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">The Workplace</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Meal Problem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These challenges lead to decreased employee satisfaction, reduced productivity, and increased administrative overhead.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workplaceProblems.map((problem, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center h-full">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{problem.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">{problem.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Proven</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-3">Corporate Results</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {corporateStats.map((stat, index) => (
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

      {/* Vendmat Smart Solution - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Vendmat's Smart</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Food Solution</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateFeatures.map((feature, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 h-full">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-green-400 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Panel Introduction - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Introducing the</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 block mt-2 font-black italic">Corporate Panel</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A dedicated portal for companies to manage food benefits for their employees through Vendmat's smart vending platform. 
              Revolutionize how your company provides food benefits.
            </p>
          </div>
          
          <div className="relative p-8 lg:p-12 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-orange-300 transition-colors duration-300">Corporate Dashboard Features</h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-xl p-6 text-center hover:bg-white/[0.08] transition-all duration-300">
                    <div className="text-3xl font-bold text-orange-400 animate-[glow_3s_ease-in-out_infinite]">42</div>
                    <div className="text-gray-300 text-sm">Total Orders</div>
                  </div>
                  <div className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-xl p-6 text-center hover:bg-white/[0.08] transition-all duration-300">
                    <div className="text-3xl font-bold text-orange-400 animate-[glow_3s_ease-in-out_infinite]">₹1,245</div>
                    <div className="text-gray-300 text-sm">Total Amount</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Employee Management - Add, remove, and organize employees with tier-based access",
                    "Food Allowance Control - Set credit amounts and free meal options by tier",
                    "Usage Tracking - Real-time dashboard with filtering by tier and date range",
                    "Invoicing System - Monthly auto-generated invoices with payment tracking"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group/item hover:scale-105 transition-transform duration-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl overflow-hidden border border-white/[0.1] backdrop-blur-sm">
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl text-center font-semibold shadow-lg">
                      Your Company Dashboard
                    </div>
                  </div>
                  <div className="absolute top-20 left-4 right-4 bottom-4 bg-white/[0.05] backdrop-blur-sm rounded-xl border border-white/[0.1]">
                    <div className="p-6 text-center text-gray-300">
                      <div className="text-orange-400 text-lg font-semibold mb-2">Live Dashboard Preview</div>
                      <div className="text-sm text-gray-400">Real-time analytics and controls</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Management Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Tier-Based</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Employee Benefits</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {corporateTiers.map((tier, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 h-full">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4 group-hover:text-orange-300 transition-colors duration-300 animate-[glow_3s_ease-in-out_infinite]">{tier.name}</h3>
                  <div className="text-gray-300 mb-6 space-y-1">
                    <div className="flex justify-between">
                      <span>Employees:</span> 
                      <span className="text-white font-semibold">{tier.employees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rules:</span> 
                      <span className="text-white font-semibold">{tier.rules}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-white font-semibold mb-3">Benefits:</div>
                    {tier.benefits.map((benefit, i) => (
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
          
          <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-blue-500/30 rounded-3xl hover:bg-white/[0.05] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-500/10 rounded-3xl" />
            <div className="relative">
              <h3 className="text-2xl font-semibold text-white mb-4">Why Use Tiers?</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Companies can provide differentiated benefits based on employee roles, increasing satisfaction while maintaining cost efficiency. 
                Create custom tiers, edit tier names, and delete empty tiers as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Efficiency Benefits - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Cost Efficiency</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Benefits</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Lower Food Costs",
                description: "Smart vending machines optimize food freshness and reduce waste compared to traditional cafeterias."
              },
              {
                icon: "👥",
                title: "Reduced Labor",
                description: "Self-service model decreases staffing requirements while maintaining high-quality service."
              },
              {
                icon: "⚙️",
                title: "Streamlined Management",
                description: "Automated systems reduce administrative overhead and simplify benefit tracking."
              }
            ].map((benefit, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center h-full">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Experience - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Enhanced Employee</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 block mt-2">Experience</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[slideInLeft_1s_ease-out_0.2s]">
              <h3 className="text-3xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Company-Branded App Experience</h3>
              <div className="space-y-4 mb-10">
                {[
                  "Employees see Vendmat app with company logo and color scheme",
                  "Credits automatically applied to purchases",
                  "Free meals presented without prices",
                  '"My Company" section shows benefits and remaining credits'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group/item hover:scale-105 transition-transform duration-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-green-500/30 rounded-3xl hover:bg-white/[0.05] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-500/10 rounded-3xl" />
                <div className="relative">
                  <h4 className="text-xl font-semibold text-white mb-6">Employee Benefits Include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: "Convenience", desc: "24/7 access to fresh food" },
                      { title: "Efficiency", desc: "Elimination of lunch queues" },
                      { title: "Variety", desc: "Greater variety of healthy options" },
                      { title: "Personalized", desc: "Customized meal benefits" }
                    ].map((benefit, index) => (
                      <div key={index} className="group/benefit">
                        <div className="text-green-400 font-semibold group-hover/benefit:text-green-300 transition-colors duration-300">{benefit.title}</div>
                        <div className="text-green-100 text-sm">{benefit.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-[fadeInRight_1s_ease-out_0.4s]">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 blur-2xl scale-110" />
                <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.1] rounded-3xl p-8 hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl text-center font-bold mb-6 shadow-lg">
                    Vendmat - Contoso Corp.
                  </div>
                  <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-4 mb-6 text-center backdrop-blur-sm">
                    <div className="text-green-300 font-semibold">You have ₹150 credit for today</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white/[0.05] p-4 rounded-xl border border-white/[0.1] hover:bg-white/[0.08] transition-all duration-300">
                      <span className="text-white">Aloo Tikki Burger</span>
                      <span className="text-orange-400 font-bold">₹299</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/[0.05] p-4 rounded-xl border border-white/[0.1] hover:bg-white/[0.08] transition-all duration-300">
                      <span className="text-white">Chicken Salad</span>
                      <span className="text-orange-400 font-bold">₹249</span>
                    </div>
                  </div>
                  <div className="mt-6 bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-blue-300 font-semibold mb-2">My Company</div>
                    <div className="text-blue-100 text-sm space-y-1">
                      <div>• 3 free meals this month</div>
                      <div>• ₹450 credits remaining</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Simple Implementation</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 block mt-2">Process</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Site Assessment",
                description: "Our team evaluates your space and employee needs"
              },
              {
                step: "2",
                title: "Custom Proposal",
                description: "Tailored solution with ROI projections and timeline"
              },
              {
                step: "3",
                title: "Quick Installation",
                description: "Professional setup within 2-3 weeks"
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "24/7 maintenance and customer service"
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
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Tech Mahindra</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 block mt-2">Pune Campus</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  "Vendmat transformed our employee dining experience. We've seen a 40% reduction in employees 
                  leaving campus for meals, which has significantly improved productivity and workplace satisfaction."
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="group text-center p-4 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-xl hover:bg-white/[0.08] transition-all duration-300">
                    <div className="text-3xl font-bold text-orange-400 animate-[glow_3s_ease-in-out_infinite] group-hover:scale-110 transition-transform duration-300">2,500+</div>
                    <div className="text-gray-400">Employees Served</div>
                  </div>
                  <div className="group text-center p-4 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-xl hover:bg-white/[0.08] transition-all duration-300">
                    <div className="text-3xl font-bold text-orange-400 animate-[glow_3s_ease-in-out_infinite] group-hover:scale-110 transition-transform duration-300">40%</div>
                    <div className="text-gray-400">Retention Increase</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">PS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">Priya Sharma</div>
                    <div className="text-orange-400">Facilities Manager</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-[fadeInRight_1s_ease-out_0.4s]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 blur-3xl scale-110" />
                  <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden border border-white/[0.1]">
                    <Image
                      src="/canva_designs/2.png"
                      alt="Tech Mahindra Success Story"
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
              <span className="block">Let's Modernize Your</span>
              <span className="block font-black italic transform -skew-x-3 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                Cafeteria Experience
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your employee meals with increased efficiency, enhanced satisfaction, and cost savings. 
              Get started with Vendmat's Corporate Panel today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-[slideInUp_1s_ease-out_0.4s]">
            {[
              { icon: "⚡", title: "Increased Efficiency" },
              { icon: "😊", title: "Enhanced Employee Satisfaction" },
              { icon: "💰", title: "Cost Efficiency" }
            ].map((benefit, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.1] backdrop-blur-xl border border-white/[0.2] rounded-3xl hover:bg-white/[0.15] transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <div className="text-white font-semibold text-lg">{benefit.title}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-[slideInUp_1s_ease-out_0.6s]">
            <WhatsAppQuickAction 
              type="corporate"
              className="group relative bg-white text-orange-500 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Schedule a Demo</span>
              <div className="absolute inset-0 bg-orange-500/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
            </WhatsAppQuickAction>
            <Link 
              href="/roi-calculator"
              className="group border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-orange-500 font-semibold text-lg transition-all duration-300 inline-block hover:scale-105"
            >
              <span>Calculate Your ROI</span>
              <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 inline-block">→</div>
            </Link>
          </div>

          <div className="text-white/80 text-lg animate-[slideInUp_1s_ease-out_0.8s]">
            📧 contact@vendmat.com • 📱 +91 8859880922
          </div>
        </div>
      </section>
    </div>
  );
}