'use client';

import { useState, useEffect } from 'react';

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTemplateModal, setShowTemplateModal] = useState(false);

  // WhatsApp business number (replace with actual Vendmat WhatsApp Business number)
  const whatsappNumber = "+917676943052"; // Replace with actual business number
  
  // Pre-configured message templates for different inquiries
  const messageTemplates = {
    general: "Hi! I'm interested in Vendmat hot food vending machines. Can you please provide more information?",
    pricing: "Hi! I'd like to know about pricing and packages for Vendmat vending machines for my location.",
    demo: "Hi! I'd like to schedule a demo of Vendmat vending machines. Can you help me with the process?",
    partnership: "Hi! I'm interested in becoming a restaurant partner with Vendmat. Please share details.",
    technical: "Hi! I have technical questions about Vendmat machines. Can someone assist me?",
    corporate: "Hi! I'm looking for corporate food solutions for our office. Can you provide information about Vendmat?",
    college: "Hi! I'm interested in Vendmat solutions for our college campus. Please share more details.",
    maintenance: "Hi! I need support with maintenance/service for our Vendmat machine."
  };

  useEffect(() => {
    // Show widget after page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Show tooltip after 5 seconds if not interacted
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const openWhatsApp = (messageType: keyof typeof messageTemplates = 'general') => {
    const message = encodeURIComponent(messageTemplates[messageType]);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setShowTooltip(false);
    setShowTemplateModal(false);
  };

  const handleMainButtonClick = () => {
    setShowTemplateModal(true);
    setShowTooltip(false);
  };

  const templateOptions = [
    { key: 'general', icon: '💬', title: 'General Inquiry', description: 'Basic information about Vendmat' },
    { key: 'demo', icon: '🎯', title: 'Schedule Demo', description: 'Book a live demonstration' },
    { key: 'pricing', icon: '💰', title: 'Get Pricing', description: 'Pricing and packages info' },
    { key: 'corporate', icon: '🏢', title: 'Corporate Solution', description: 'Office and business solutions' },
    { key: 'college', icon: '🎓', title: 'Education Solution', description: 'College and university solutions' },
    { key: 'partnership', icon: '🤝', title: 'Restaurant Partner', description: 'Become a restaurant partner' },
    { key: 'technical', icon: '⚙️', title: 'Technical Support', description: 'Technical questions and support' },
    { key: 'maintenance', icon: '🔧', title: 'Maintenance', description: 'Service and maintenance support' }
  ] as const;

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    // Only hide tooltip if it was shown by hover, not by timer
    setTimeout(() => setShowTooltip(false), 500);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 mb-2 bg-white shadow-lg rounded-lg p-3 w-56 sm:w-64 border">
            <div className="text-sm text-gray-800 mb-2 font-medium">
              💬 Need help? Chat with us on WhatsApp!
            </div>
            <div className="text-xs text-gray-600 mb-3">
              Quick responses for demos, pricing & support
            </div>
            <div className="flex flex-wrap gap-1">
              <button
                onClick={() => openWhatsApp('demo')}
                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200"
              >
                Demo
              </button>
              <button
                onClick={() => openWhatsApp('pricing')}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
              >
                Pricing
              </button>
              <button
                onClick={() => openWhatsApp('corporate')}
                className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200"
              >
                Corporate
              </button>
            </div>
            {/* Close button */}
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 text-lg leading-none"
            >
              ×
            </button>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={handleMainButtonClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
          aria-label="Chat on WhatsApp"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 sm:w-8 sm:h-8"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
          </svg>
        </button>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center animate-bounce">
          1
        </div>
      </div>

      {/* Template Selection Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-2xl max-w-sm sm:max-w-md w-full max-h-[85vh] sm:max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">How can we help you?</h3>
                  <p className="text-sm text-gray-600 mt-1">Choose your inquiry type for faster service</p>
                </div>
                <button
                  onClick={() => setShowTemplateModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Template Options */}
            <div className="p-4 sm:p-6 space-y-3">
              {templateOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => openWhatsApp(option.key as keyof typeof messageTemplates)}
                  className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{option.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 group-hover:text-green-700">
                        {option.title}
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-green-600">
                        {option.description}
                      </div>
                    </div>
                    <div className="text-gray-400 group-hover:text-green-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-4 sm:p-6 rounded-b-2xl">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Fast response guaranteed via WhatsApp
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AiSensy Integration Script */}
      <div id="aisensy-chat-widget" />
    </>
  );
}

// Quick action buttons for different pages
const quickActionTemplates = {
  general: "Hi! I'm interested in Vendmat hot food vending machines. Can you please provide more information?",
  pricing: "Hi! I'd like to know about pricing and packages for Vendmat vending machines for my location.",
  demo: "Hi! I'd like to schedule a demo of Vendmat vending machines. Can you help me with the process?",
  partnership: "Hi! I'm interested in becoming a restaurant partner with Vendmat. Please share details.",
  technical: "Hi! I have technical questions about Vendmat machines. Can someone assist me?",
  corporate: "Hi! I'm looking for corporate food solutions for our office. Can you provide information about Vendmat?",
  college: "Hi! I'm interested in Vendmat solutions for our college campus. Please share more details.",
  maintenance: "Hi! I need support with maintenance/service for our Vendmat machine."
};

export function WhatsAppQuickAction({ 
  type, 
  children, 
  className = "" 
}: { 
  type: keyof typeof quickActionTemplates;
  children: React.ReactNode;
  className?: string;
}) {
  const whatsappNumber = "+917676943052";
  
  const openWhatsApp = () => {
    const message = encodeURIComponent(quickActionTemplates[type]);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className={`inline-flex items-center gap-2 transition-all duration-300 ${className}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-green-500"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
      </svg>
      {children}
    </button>
  );
}