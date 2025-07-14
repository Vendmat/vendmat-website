import { Metadata } from 'next';
import { WhatsAppQuickAction } from '@/components/WhatsAppWidget';

export const metadata: Metadata = {
  title: "FAQ | Vendmat - Frequently Asked Questions About Hot Food Vending Machines",
  description: "Get answers to common questions about Vendmat's hot food vending machines, restaurant partnerships, pricing, installation, maintenance, and technology features.",
  keywords: "vendmat FAQ, hot food vending machines questions, restaurant partnership questions, vending machine pricing, installation process, maintenance support",
  openGraph: {
    title: "Vendmat FAQ - All Your Questions Answered",
    description: "Common questions about hot food vending machines, partnerships, and technology",
    type: "website",
  },
};

const faqCategories = [
  {
    title: "General Information",
    icon: "ℹ️",
    faqs: [
      {
        question: "What is Vendmat?",
        answer: "Vendmat is a revolutionary hot food vending machine that creates a 'Food Court in a Vending Machine'. We partner with 4 restaurants per machine, maintaining meals at 60°C and replenishing them 4 times daily for maximum freshness."
      },
      {
        question: "How does the 'Food Court in a Vending Machine' concept work?",
        answer: "Each Vendmat machine features 4 different restaurant partners, offering diverse cuisines from a single location. This gives customers the variety of a food court with the convenience of 24/7 vending access."
      },
      {
        question: "What temperature are the meals maintained at?",
        answer: "All hot meals in Vendmat machines are maintained at 60°C to ensure food safety, freshness, and optimal taste. This temperature meets FSSAI guidelines for hot food storage."
      },
      {
        question: "How often is food replenished?",
        answer: "Food is replenished 4 times daily to ensure maximum freshness. Our logistics team follows strict schedules to maintain quality and availability throughout the day."
      }
    ]
  },
  {
    title: "Restaurant Partnerships",
    icon: "🤝",
    faqs: [
      {
        question: "How can my restaurant become a Vendmat partner?",
        answer: "We welcome restaurant partnerships! Our model involves a fixed monthly fee with no commission per sale, allowing you to expand your reach without affecting your profit margins."
      },
      {
        question: "What's the partnership fee structure?",
        answer: "We operate on a fixed-fee model with no commission per sale. This ensures predictable costs for restaurants while maintaining affordable prices for customers."
      },
      {
        question: "Do you provide training for food preparation?",
        answer: "Yes, we provide comprehensive training on food preparation, packaging, and quality standards to ensure consistency across all partner restaurants."
      },
      {
        question: "Can restaurants customize their menu items?",
        answer: "Absolutely! We work with each restaurant partner to optimize their menu for vending machine format while maintaining their signature flavors and quality."
      }
    ]
  },
  {
    title: "Technology & Features",
    icon: "⚡",
    whatsappType: "technical",
    faqs: [
      {
        question: "What payment methods are accepted?",
        answer: "Our machines accept multiple payment methods including UPI, credit/debit cards, mobile wallets, and cash. We also support campus ID integration for educational institutions."
      },
      {
        question: "Can I pre-order meals?",
        answer: "Yes! You can pre-order meals up to 2 hours in advance through our mobile app or directly at the machine interface. This ensures your preferred meal is ready when you need it."
      },
      {
        question: "How do you ensure food safety and hygiene?",
        answer: "We maintain strict hygiene standards with temperature-controlled storage at 60°C, regular cleaning protocols, FSSAI compliance, and real-time monitoring of all machine conditions."
      },
      {
        question: "Is there a mobile app?",
        answer: "Yes, our mobile app allows you to browse menus, pre-order meals, make payments, track nutrition information, and locate nearby Vendmat machines."
      }
    ]
  },
  {
    title: "Installation & Locations",
    icon: "📍",
    whatsappType: "demo",
    faqs: [
      {
        question: "What types of locations are suitable for Vendmat machines?",
        answer: "Vendmat machines are perfect for offices, colleges, hospitals, tech parks, malls, airports, and any location with high foot traffic and demand for convenient meal options."
      },
      {
        question: "What are the space requirements?",
        answer: "Our machines require approximately 6x4 feet of floor space with access to electrical power and internet connectivity. We also need clearance for regular restocking."
      },
      {
        question: "Do you handle installation and setup?",
        answer: "Yes, our team handles complete installation including electrical connections, internet setup, initial stocking, and staff training. We ensure everything is ready for operation."
      },
      {
        question: "What's the timeline for installation?",
        answer: "From approval to installation typically takes 2-3 weeks, including site preparation, machine delivery, setup, and staff training."
      }
    ]
  },
  {
    title: "Pricing & Business Model",
    icon: "💰",
    whatsappType: "pricing",
    faqs: [
      {
        question: "How much does it cost to install a Vendmat machine?",
        answer: "Installation costs vary based on location requirements and customization needs. Contact us for a detailed quote tailored to your specific situation."
      },
      {
        question: "What's the revenue sharing model?",
        answer: "We offer flexible revenue sharing arrangements that benefit both parties. Our business model is designed to be mutually profitable for location partners and Vendmat."
      },
      {
        question: "Are there any ongoing fees?",
        answer: "We handle all maintenance, restocking, and support as part of our service. Any ongoing fees are clearly outlined in our partnership agreement with transparent pricing."
      },
      {
        question: "What's the return on investment timeline?",
        answer: "ROI varies by location and foot traffic, but most partners see positive returns within 6-12 months. High-traffic locations often see faster returns."
      }
    ]
  },
  {
    title: "Maintenance & Support",
    icon: "🔧",
    whatsappType: "maintenance",
    faqs: [
      {
        question: "Who handles machine maintenance?",
        answer: "Vendmat provides comprehensive maintenance support including regular cleaning, technical repairs, software updates, and preventive maintenance to ensure optimal performance."
      },
      {
        question: "What happens if the machine breaks down?",
        answer: "Our support team provides 24/7 technical assistance. For hardware issues, we dispatch technicians within 4-6 hours for metro areas and same-day service for most locations."
      },
      {
        question: "How often are machines serviced?",
        answer: "Machines receive regular preventive maintenance weekly, deep cleaning monthly, and immediate attention for any technical issues to ensure consistent operation."
      },
      {
        question: "Is there warranty coverage?",
        answer: "Yes, all Vendmat machines come with comprehensive warranty coverage for hardware, software, and technical support during the partnership period."
      }
    ]
  }
];

export default function FAQPage() {
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
                Get Your Answers
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-none mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                Frequently Asked
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 block font-black italic transform -skew-x-3 tracking-wider animate-[glow_3s_ease-in-out_infinite]">
                Questions
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-4xl mx-auto mb-12">
              Get answers to common questions about Vendmat's hot food vending machines, 
              restaurant partnerships, and innovative technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <WhatsAppQuickAction 
                type="general"
                className="group relative bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Chat with Our Team</span>
                <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
              </WhatsAppQuickAction>
              <WhatsAppQuickAction 
                type="demo"
                className="group border-2 border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm text-lg font-semibold"
              >
                <span>Schedule a Demo</span>
                <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
              </WhatsAppQuickAction>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                    <h2 className="text-3xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {category.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex} className="group/faq border-b border-white/[0.1] pb-6 last:border-b-0 last:pb-0 hover:border-orange-500/30 transition-colors duration-300">
                        <h3 className="text-lg font-semibold text-white mb-4 group-hover/faq:text-orange-300 transition-colors duration-300 leading-relaxed">
                          {faq.question}
                        </h3>
                        <p className="text-gray-300 leading-relaxed group-hover/faq:text-gray-200 transition-colors duration-300">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Category-specific WhatsApp CTA */}
                  {category.whatsappType && (
                    <div className="mt-8 relative p-6 bg-green-500/10 border border-green-500/30 rounded-2xl backdrop-blur-sm hover:bg-green-500/15 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-500/10 rounded-2xl" />
                      <div className="relative">
                        <p className="text-green-100 mb-4 leading-relaxed">
                          Need more specific information about {category.title.toLowerCase()}?
                        </p>
                        <WhatsAppQuickAction 
                          type={category.whatsappType as any}
                          className="group/cta inline-flex items-center text-green-400 hover:text-green-300 font-medium transition-colors duration-300"
                        >
                          <span>Get Expert Help via WhatsApp</span>
                          <div className="ml-2 transform group-hover/cta:translate-x-1 transition-transform duration-300">→</div>
                        </WhatsAppQuickAction>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help! Get instant answers and personalized assistance through WhatsApp.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="text-2xl mb-3">💬</div>
              <h3 className="font-semibold text-white mb-2">Instant Chat</h3>
              <p className="text-gray-400 text-sm mb-4">Get immediate responses to your questions</p>
              <WhatsAppQuickAction 
                type="general"
                className="text-green-400 hover:text-green-300 font-medium"
              >
                Start Chatting
              </WhatsAppQuickAction>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-semibold text-white mb-2">Custom Demo</h3>
              <p className="text-gray-400 text-sm mb-4">Schedule a personalized demonstration</p>
              <WhatsAppQuickAction 
                type="demo"
                className="text-green-400 hover:text-green-300 font-medium"
              >
                Book Demo
              </WhatsAppQuickAction>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="text-2xl mb-3">💰</div>
              <h3 className="font-semibold text-white mb-2">Get Pricing</h3>
              <p className="text-gray-400 text-sm mb-4">Receive detailed pricing information</p>
              <WhatsAppQuickAction 
                type="pricing"
                className="text-green-400 hover:text-green-300 font-medium"
              >
                Get Quote
              </WhatsAppQuickAction>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#f8650c] to-orange-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Food Service?
            </h3>
            <p className="text-orange-100 mb-6">
              Join hundreds of satisfied partners who have revolutionized their food service with Vendmat.
            </p>
            <WhatsAppQuickAction 
              type="partnership"
              className="bg-white text-[#f8650c] hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg"
            >
              Start Your Partnership Journey
            </WhatsAppQuickAction>
          </div>
        </div>
      </section>
    </div>
  );
}