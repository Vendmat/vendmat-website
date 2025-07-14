import Button from '@/components/Button';
import Card from '@/components/Card';
import Image from 'next/image';

export default function SolutionsPage() {
  const solutions = [
    {
      id: 'corporate',
      title: 'Corporate Offices',
      subtitle: 'Employee Wellness Solutions',
      description: 'Transform your workplace with 24/7 access to fresh, hot meals. Reduce overhead costs while boosting employee satisfaction.',
      image: '/canva_designs/2.png',
      icon: '🏢',
      benefits: [
        'Reduce catering and pantry costs by 60%',
        'Improve employee satisfaction scores',
        '24/7 availability for all shifts',
        'Zero maintenance - we handle everything',
        'Customizable menus for your team'
      ],
      features: [
        'Smart inventory management',
        'Employee usage analytics',
        'Cashless payment integration',
        'Real-time health monitoring'
      ],
      stats: {
        satisfaction: '92%',
        costSaving: '60%',
        uptime: '99.5%'
      }
    },
    {
      id: 'hostels',
      title: 'Hostels & PGs',
      subtitle: 'Student Food Solutions',
      description: 'Affordable, nutritious meals for students available round the clock. No more late-night hunger or expensive delivery fees.',
      image: '/canva_designs/5.png',
      icon: '🏠',
      benefits: [
        'Student-friendly pricing from ₹79',
        'Late-night availability for studies',
        'Nutritious, balanced meals',
        'No delivery charges or waiting',
        'Hygiene and safety guaranteed'
      ],
      features: [
        'Budget-friendly pricing',
        'Nutritional tracking',
        'Student ID integration',
        'Bulk ordering discounts'
      ],
      stats: {
        satisfaction: '88%',
        costSaving: '40%',
        uptime: '24/7'
      }
    },
    {
      id: 'transit',
      title: 'Transit Hubs',
      subtitle: 'Traveler Convenience',
      description: 'Serve busy commuters and transit workers with zero wait time. Perfect for airports, metro stations, and bus terminals.',
      image: '/canva_designs/4.png',
      icon: '🚇',
      benefits: [
        'Instant service for busy travelers',
        'No queuing or waiting time',
        'Fresh meals during odd hours',
        'Multiple payment options',
        'Hygienic, contactless service'
      ],
      features: [
        'Quick dispensing under 60 seconds',
        'Multi-language interface',
        'Mobile app pre-ordering',
        'Real-time availability updates'
      ],
      stats: {
        satisfaction: '85%',
        costSaving: '50%',
        uptime: '99.8%'
      }
    },
    {
      id: 'healthcare',
      title: 'Hospitals & Healthcare',
      subtitle: 'Healthcare Staff Solutions',
      description: 'Support healthcare workers with nutritious meals available 24/7. Critical for night shifts and emergency situations.',
      image: '/canva_designs/10.png',
      icon: '🏥',
      benefits: [
        'Support for night shift workers',
        'Nutritious meals during long shifts',
        'Emergency food availability',
        'Special dietary options',
        'Contactless, hygienic service'
      ],
      features: [
        'Dietary preference filters',
        'Nutritional information display',
        'Emergency stock alerts',
        'Healthcare worker discounts'
      ],
      stats: {
        satisfaction: '90%',
        costSaving: '45%',
        uptime: '99.9%'
      }
    },
    {
      id: 'education',
      title: 'Educational Institutions',
      subtitle: 'Campus Food Solutions',
      description: 'Supplement traditional cafeterias with always-available meal options. Perfect for libraries, labs, and study areas.',
      image: '/canva_designs/3.png',
      icon: '🎓',
      benefits: [
        'Extend food service hours',
        'Serve remote campus locations',
        'Affordable pricing for students',
        'Reduce cafeteria queues',
        'Healthy meal options'
      ],
      features: [
        'Student meal plan integration',
        'Campus card payments',
        'Nutrition education content',
        'Sustainable packaging'
      ],
      stats: {
        satisfaction: '87%',
        costSaving: '35%',
        uptime: '99.2%'
      }
    }
  ];

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8 animate-[slideInUp_1s_ease-out_0.2s]">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm text-white/60 tracking-wide font-medium">
                Tailored Solutions
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-none mb-8 animate-[slideInUp_1s_ease-out_0.4s]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                Solutions for Every
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 block font-black italic transform -skew-x-3 tracking-wider animate-[glow_3s_ease-in-out_infinite]">
                Industry
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-4xl mx-auto animate-[slideInUp_1s_ease-out_0.6s]">
              Tailored smart vending solutions designed for your specific industry needs. 
              From corporate offices to healthcare facilities, we've got you covered.
            </p>
          </div>
          
          {/* Industry Icons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 animate-[slideInUp_1s_ease-out_0.8s]">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id} 
                className="group relative transform hover:scale-110 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative p-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                    {solution.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <div className="text-4xl mr-4">{solution.icon}</div>
                        <div>
                          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">
                            {solution.subtitle}
                          </span>
                          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-1">
                            {solution.title}
                          </h2>
                        </div>
                      </div>
                      <p className="text-xl text-gray-300 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {Object.entries(solution.stats).map(([key, value], statIndex) => (
                        <div key={key} className="text-center p-4 bg-white/[0.02] rounded-2xl border border-white/[0.05]">
                          <div className="text-3xl font-bold text-orange-400 mb-2 transform hover:scale-110 transition-transform duration-300">
                            {value}
                          </div>
                          <div className="text-sm text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                        <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse" />
                        Key Benefits
                      </h3>
                      <div className="space-y-3">
                        {solution.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start p-3 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300 group">
                            <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white text-xs font-bold">✓</span>
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                        <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse" />
                        Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="relative p-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300 group">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                                {feature}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 blur-3xl scale-110" />
                    <div className="relative overflow-hidden rounded-3xl">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      
                      {/* Overlay content */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="p-4 bg-white/[0.1] backdrop-blur-xl border border-white/[0.2] rounded-2xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-bold text-lg">{solution.title}</div>
                              <div className="text-orange-200 text-sm">{solution.subtitle}</div>
                            </div>
                            <div className="text-3xl">{solution.icon}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories - New Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Success</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              See how organizations across industries have transformed their food service with Vendmat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "Tech Corp India",
                industry: "Corporate",
                result: "60% cost reduction",
                testimonial: "Vendmat transformed our workplace dining. Employees love the 24/7 availability and quality.",
                metric: "1,200+ employees served daily"
              },
              {
                company: "Metro Hospital",
                industry: "Healthcare", 
                result: "99.9% uptime",
                testimonial: "Critical for our night shift staff. Fresh meals available even during emergencies.",
                metric: "500+ healthcare workers supported"
              },
              {
                company: "University Campus",
                industry: "Education",
                result: "40% queue reduction", 
                testimonial: "Students can grab meals between classes without waiting. Perfect for our busy campus.",
                metric: "3,000+ students served monthly"
              }
            ].map((story, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 h-full">
                  <div className="text-orange-400 font-bold text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {story.result}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{story.company}</h3>
                  <div className="text-orange-300 text-sm font-medium mb-4">{story.industry}</div>
                  <p className="text-gray-300 leading-relaxed mb-6 italic">
                    "{story.testimonial}"
                  </p>
                  <div className="text-sm text-gray-400 border-t border-white/[0.1] pt-4">
                    {story.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
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
            Join forward-thinking organizations already serving fresh meals with Vendmat. 
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
              <span className="relative z-10">View Pricing</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
