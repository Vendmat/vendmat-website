import Button from '@/components/Button';
import Card from '@/components/Card';
import Image from 'next/image';

export default function PartnersPage() {
  // Pricing models data removed as it's not being used in the current implementation

  const caseStudies = [
    {
      company: 'Microsoft Azure',
      logo: '/vendmat_logos/azure-logo.png',
      industry: 'Technology',
      challenge: 'Supporting 24/7 operations with quality food options for night shift employees',
      solution: 'Deployed 5 Vendmat machines across different floors with customized menu focusing on healthy options',
      results: [
        '85% employee satisfaction increase',
        '40% reduction in food service costs',
        '95% machine uptime achieved',
        '200+ meals served daily'
      ],
      testimonial: {
        quote: "Vendmat has transformed our workplace dining experience. Our employees love the convenience and quality of fresh meals available 24/7.",
        author: "Priya Sharma",
        position: "Facilities Manager, Microsoft Azure"
      }
    },
    {
      company: '91Springboard',
      logo: '/vendmat_logos/springboard-logo.png',
      industry: 'Co-working Space',
      challenge: 'Providing affordable food options for startups and freelancers across multiple locations',
      solution: 'Revenue-sharing model with 3 machines across Bangalore and Delhi locations',
      results: [
        '150+ daily transactions',
        '60% cost savings vs traditional cafe',
        '92% member satisfaction',
        '24/7 availability boost'
      ],
      testimonial: {
        quote: "The revenue-sharing model worked perfectly for us. Zero investment, great returns, and happy members.",
        author: "Rajesh Kumar",
        position: "Operations Head, 91Springboard"
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
          <div className="absolute left-[15%] bottom-[15%] w-32 h-32 bg-gradient-to-r from-orange-400/[0.1] to-red-400/[0.1] rounded-full backdrop-blur-[1px] border border-white/[0.05] animate-[float3d_12s_ease-in-out_infinite_1s]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-[slideInUp_1s_ease-out_0.2s]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm text-white/60 tracking-wide font-medium">
                Partnership Opportunities
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-none mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                Partner with
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 block font-black italic transform -skew-x-3 tracking-wider animate-[glow_3s_ease-in-out_infinite]">
                Vendmat
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-4xl mx-auto mb-12">
              Transform your space with smart food vending solutions. Enjoy flexible pricing models, 
              zero upfront costs, and maximum convenience for your organization.
            </p>

            <Button 
              size="lg"
              className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Start Partnership</span>
              <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Partner Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Why Partner</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">with Vendmat?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Zero Investment",
                description: "Get started with no upfront costs. We provide the machines, maintenance, and support."
              },
              {
                icon: "📈",
                title: "Revenue Generation",
                description: "Multiple revenue models available including revenue sharing and fixed rental options."
              },
              {
                icon: "🔧",
                title: "Full Support",
                description: "Complete maintenance, restocking, and technical support included in partnership."
              }
            ].map((benefit, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center h-full">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">How Partnership</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 block mt-2">Works</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Site Assessment",
                description: "Our team evaluates your location for foot traffic, space requirements, and optimal placement."
              },
              {
                step: "2",
                title: "Agreement",
                description: "Choose from flexible partnership models that work best for your business needs."
              },
              {
                step: "3",
                title: "Installation",
                description: "Professional installation within 2-3 weeks including setup, testing, and training."
              },
              {
                step: "4",
                title: "Success",
                description: "Start generating revenue with ongoing support, maintenance, and optimization."
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

      {/* Success Stories - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Partner Success</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Stories</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white font-bold text-xl">{study.company.substring(0, 2)}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">{study.company}</h3>
                      <p className="text-orange-400 font-semibold">{study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="mb-8 space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2 text-lg">Challenge:</h4>
                      <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2 text-lg">Solution:</h4>
                      <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {study.results.map((result, i) => (
                      <div key={i} className="group/stat bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-xl p-4 text-center hover:bg-white/[0.08] transition-all duration-300">
                        <div className="text-orange-400 font-bold text-xl group-hover/stat:scale-110 transition-transform duration-300 animate-[glow_3s_ease-in-out_infinite]">
                          {result.split(' ')[0]}
                        </div>
                        <div className="text-gray-300 text-sm">
                          {result.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <blockquote className="relative p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-500/10 rounded-2xl" />
                    <div className="relative">
                      <p className="text-white italic mb-4 text-lg leading-relaxed">"{study.testimonial.quote}"</p>
                      <footer className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{study.testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div>
                          <strong className="text-orange-400 block">{study.testimonial.author}</strong>
                          <span className="text-gray-300 text-sm">{study.testimonial.position}</span>
                        </div>
                      </footer>
                    </div>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Application - Enhanced */}
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-[slideInUp_1s_ease-out_0.2s]">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-none">
              <span className="block">Ready to Start Your</span>
              <span className="block font-black italic transform -skew-x-3 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                Partnership?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join successful partners already generating revenue with Vendmat. 
              Let's discuss how we can transform your location.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-[slideInUp_1s_ease-out_0.4s]">
            <Button 
              href="/contact"
              className="group relative bg-white text-orange-500 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Apply for Partnership</span>
              <div className="absolute inset-0 bg-orange-500/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
            </Button>
            <Button 
              href="/roi-calculator"
              className="group border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-orange-500 font-semibold text-lg transition-all duration-300 inline-block hover:scale-105"
            >
              <span>Calculate ROI</span>
              <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 inline-block">→</div>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 