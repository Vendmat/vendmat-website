import Button from '@/components/Button';
import Image from 'next/image';

export default function TechnologyPage() {
  const techFeatures = [
    {
      title: 'Smart Vending Machines',
      description: 'IoT-enabled machines with real-time monitoring and predictive maintenance',
      icon: '🤖',
      features: [
        'Temperature control and monitoring',
        'Real-time inventory tracking',
        'Contactless payment systems',
        'Remote diagnostics and updates',
        'Hot supply chain technology maintaining 60°C',
        'Anti-theft and security systems'
      ],
      specs: {
        capacity: '72 meals',
        temperature: '60°C to 65°C',
        powerConsumption: '3.5 kW',
        connectivity: '4G/WiFi/Ethernet',
        paymentMethods: 'UPI/App'
      }
    },
    {
      title: 'AI-Powered Platform',
      description: 'Machine learning algorithms that optimize inventory and predict demand patterns',
      icon: '🧠',
      features: [
        'Demand forecasting with 95% accuracy',
        'Dynamic pricing optimization',
        'Automated restocking alerts',
        'Customer behavior analytics',
        'Real-time sales reporting',
        'Predictive maintenance scheduling'
      ],
      specs: {
        accuracy: '95% demand prediction',
        dataPoints: '1000+ parameters',
        analytics: 'Real-time dashboard',
        integration: 'ERP/CRM systems',
        reporting: 'Custom analytics'
      }
    },
    {
      title: 'Smart Kitchen Operations',
      description: 'FSSAI-certified central kitchens with automated quality control',
      icon: '🏭',
      features: [
        'Automated cooking processes',
        'Quality control checkpoints',
        'Temperature monitoring',
        'Batch tracking and traceability',
        'Hygiene compliance systems',
        'Waste reduction algorithms'
      ],
      specs: {
        certification: 'FSSAI',
        capacity: '2,000+ meals/day',
        shelfLife: '18 hours',
        packaging: 'Biodegradable',
        traceability: 'Full batch tracking'
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[slideInUp_1s_ease-out_0.2s]">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-sm text-white/60 tracking-wide font-medium">
                  Innovation at Core
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                  Technology That
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 block font-black italic transform -skew-x-3 tracking-wider animate-[glow_3s_ease-in-out_infinite]">
                  Just Works
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/60 leading-relaxed mb-8">
                Advanced IoT, AI, and hot supply chain technology designed to deliver 
                fresh meals at 60°C with zero hassle. Experience the future of food service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/contact" 
                  className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">See It In Action</span>
                  <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
                </Button>
                <Button 
                  href="/about" 
                  variant="outline" 
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm text-lg font-semibold"
                >
                  <span>Learn More</span>
                  <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-[fadeInRight_1.5s_ease-out_0.5s]">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 blur-3xl scale-150" />
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/vendmat_photos/Machine_used.png"
                    alt="Vendmat Smart Vending Machine Technology"
                    width={600}
                    height={450}
                    className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Our Tech</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge technology powering the future of automated food service
            </p>
          </div>

          <div className="space-y-16">
            {techFeatures.map((tech, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{tech.icon}</div>
                      <h3 className="text-3xl font-bold text-white">{tech.title}</h3>
                    </div>
                    
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      {tech.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tech.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="bg-white/[0.02] rounded-2xl p-6 border border-white/[0.05]">
                      <h4 className="text-lg font-semibold text-white mb-4">Specifications</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(tech.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </span>
                            <span className="text-orange-400 font-semibold text-sm">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 blur-2xl scale-110" />
                    <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
                      {/* Tech Visualization */}
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 overflow-hidden relative">
                        {index === 0 && (
                          // Smart Vending Machine Visualization
                          <div className="space-y-4">
                            <div className="flex items-center justify-between mb-6">
                              <h4 className="text-white font-bold text-lg">Machine Status</h4>
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-green-400 text-sm">Online</span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-gray-700/50 rounded-lg p-4">
                                <div className="text-orange-400 text-2xl font-bold">60°C</div>
                                <div className="text-gray-300 text-sm">Temperature</div>
                              </div>
                              <div className="bg-gray-700/50 rounded-lg p-4">
                                <div className="text-orange-400 text-2xl font-bold">42/72</div>
                                <div className="text-gray-300 text-sm">Inventory</div>
                              </div>
                              <div className="bg-gray-700/50 rounded-lg p-4">
                                <div className="text-green-400 text-2xl font-bold">95%</div>
                                <div className="text-gray-300 text-sm">Uptime</div>
                              </div>
                              <div className="bg-gray-700/50 rounded-lg p-4">
                                <div className="text-blue-400 text-2xl font-bold">4G</div>
                                <div className="text-gray-300 text-sm">Connection</div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 1 && (
                          // AI Platform Visualization
                          <div className="space-y-4">
                            <div className="flex items-center justify-between mb-6">
                              <h4 className="text-white font-bold text-lg">AI Analytics Dashboard</h4>
                              <div className="text-orange-400 text-sm animate-pulse">● Live</div>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="bg-gray-700/50 rounded-lg p-3 flex items-center justify-between">
                                <span className="text-gray-300 text-sm">Demand Prediction</span>
                                <div className="flex items-center space-x-2">
                                  <div className="w-16 h-2 bg-gray-600 rounded-full overflow-hidden">
                                    <div className="w-[95%] h-full bg-green-400 rounded-full"></div>
                                  </div>
                                  <span className="text-green-400 text-sm font-bold">95%</span>
                                </div>
                              </div>
                              
                              <div className="bg-gray-700/50 rounded-lg p-3 flex items-center justify-between">
                                <span className="text-gray-300 text-sm">Revenue Optimization</span>
                                <div className="text-orange-400 font-bold">+23%</div>
                              </div>
                              
                              <div className="bg-gray-700/50 rounded-lg p-3 flex items-center justify-between">
                                <span className="text-gray-300 text-sm">Customer Satisfaction</span>
                                <div className="text-green-400 font-bold">4.8★</div>
                              </div>
                              
                              <div className="bg-gray-700/50 rounded-lg p-3">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-gray-300 text-sm">Today's Sales</span>
                                  <span className="text-white font-bold">₹12,456</span>
                                </div>
                                <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                                  <div className="w-[78%] h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 2 && (
                          // Smart Kitchen Visualization
                          <div className="space-y-4">
                            <div className="flex items-center justify-between mb-6">
                              <h4 className="text-white font-bold text-lg">Kitchen Operations</h4>
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-green-400 text-sm">FSSAI Certified</span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                                <div className="text-orange-400 text-xl font-bold">1,847</div>
                                <div className="text-gray-300 text-xs">Meals Today</div>
                              </div>
                              <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                                <div className="text-green-400 text-xl font-bold">18hrs</div>
                                <div className="text-gray-300 text-xs">Shelf Life</div>
                              </div>
                              <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                                <div className="text-blue-400 text-xl font-bold">99.2%</div>
                                <div className="text-gray-300 text-xs">Quality Score</div>
                              </div>
                              <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                                <div className="text-purple-400 text-xl font-bold">Zero</div>
                                <div className="text-gray-300 text-xs">Waste</div>
                              </div>
                            </div>
                            
                            <div className="bg-gray-700/50 rounded-lg p-3">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-300 text-sm">Batch #VB-2024-0115</span>
                                <span className="text-green-400 text-sm">● Active</span>
                              </div>
                              <div className="text-orange-400 text-xs">Temperature: 62°C | Quality: A+ | ETA: 45min</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Timeline - New Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Innovation</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Timeline</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our journey of technological advancement and innovation milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2024",
                title: "AI Integration",
                description: "Implemented machine learning algorithms for demand prediction and inventory optimization",
                achievement: "95% accuracy in demand forecasting"
              },
              {
                year: "2025", 
                title: "IoT Expansion",
                description: "Deployed comprehensive IoT sensors for real-time monitoring and predictive maintenance",
                achievement: "99.5% uptime across all machines"
              },
              {
                year: "2026",
                title: "Smart Analytics",
                description: "Advanced analytics platform providing actionable insights for partners and operators",
                achievement: "Real-time business intelligence"
              }
            ].map((milestone, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center h-full">
                  <div className="text-5xl font-bold text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {milestone.description}
                  </p>
                  <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold border border-orange-500/30">
                    {milestone.achievement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & API - New Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Seamless</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Integration</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with your existing systems through our comprehensive API suite
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Payment Integration",
                  description: "Support for all major payment gateways and corporate meal card systems",
                  icon: "💳"
                },
                {
                  title: "ERP Connectivity", 
                  description: "Real-time data sync with your existing enterprise resource planning systems",
                  icon: "🔗"
                },
                {
                  title: "Analytics API",
                  description: "Access comprehensive analytics and reporting through our RESTful APIs",
                  icon: "📊"
                },
                {
                  title: "Mobile SDK",
                  description: "White-label mobile solutions for your branded food ordering experience",
                  icon: "📱"
                }
              ].map((integration, index) => (
                <div key={index} className="group flex items-start space-x-4 p-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
                  <div className="text-4xl">{integration.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                      {integration.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {integration.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl">
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-green-400 text-sm font-mono">API Status: Active</span>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <pre className="text-green-400 text-sm font-mono overflow-x-auto">
{`{
  "status": "success",
  "machine_id": "VM_001",
  "temperature": "60°C",
  "inventory": 42,
  "last_updated": "2024-01-15T10:30:00Z"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              href="/contact" 
              className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get API Access</span>
              <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 