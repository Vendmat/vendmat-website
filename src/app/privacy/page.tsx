export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-32 overflow-hidden">
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
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8 animate-[slideInUp_1s_ease-out_0.2s]">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm text-white/60 tracking-wide font-medium">
                Legal Information
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8 animate-[slideInUp_1s_ease-out_0.4s]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                Privacy
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 block font-black italic transform -skew-x-3 tracking-wider animate-[glow_3s_ease-in-out_infinite]">
                Policy
              </span>
            </h1>
            
            <div className="inline-block p-6 bg-white/[0.03] backdrop-blur-xl border border-orange-500/30 rounded-2xl max-w-md mx-auto animate-[slideInUp_1s_ease-out_0.6s]">
              <div className="text-orange-400 font-semibold text-lg">
                Last updated: January 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 mb-12">
            <p className="text-xl text-gray-300 leading-relaxed">
              At Vendmat Technologies Private Limited ("Vendmat," "we," "us," or "our"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or utilize our smart vending services.
            </p>
          </div>
          
          {/* Content Sections */}
          <div className="space-y-16">
            
            {/* Information We Collect */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                  1. Information We Collect
                </h2>
                
                <div className="space-y-8">
                  <div className="relative p-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      Personal Information
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Name, email address, and phone number when you register or contact us</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Payment information when you make purchases through our app</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Company or organization details for partnership inquiries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Location data to help you find nearby Vendmat machines</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative p-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      Usage Information
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Order history and purchase patterns</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span>App usage analytics and preferences</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Device information and unique identifiers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Machine interaction data and feedback</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative p-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      Automatically Collected Information
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span>IP address and browser information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Cookies and similar tracking technologies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Website navigation patterns and session data</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-green-500/30 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  2. How We Use Your Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Service Provision', desc: 'To process orders, manage your account, and provide customer support' },
                    { title: 'Payment Processing', desc: 'To handle transactions and prevent fraud' },
                    { title: 'Communication', desc: 'To send order confirmations, updates, and customer service messages' },
                    { title: 'Personalization', desc: 'To customize your experience and recommend relevant food options' },
                    { title: 'Marketing', desc: 'To send promotional offers and updates (with your consent)' },
                    { title: 'Analytics', desc: 'To improve our services, understand usage patterns, and develop new features' },
                    { title: 'Legal Compliance', desc: 'To comply with applicable laws and regulations' }
                  ].map((item, index) => (
                    <div key={index} className="relative p-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl hover:bg-white/[0.05] hover:border-green-500/30 transition-all duration-300">
                      <h4 className="font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                  3. Information Sharing and Disclosure
                </h2>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">We may share your information with:</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Service Providers', desc: 'Third-party vendors who assist in payment processing, analytics, and customer support' },
                      { title: 'Restaurant Partners', desc: 'Information necessary to fulfill your food orders' },
                      { title: 'Business Partners', desc: 'Organizations hosting our vending machines (anonymized data only)' },
                      { title: 'Legal Authorities', desc: 'When required by law or to protect our rights and safety' },
                      { title: 'Business Transfers', desc: 'In connection with mergers, acquisitions, or asset sales' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-white">{item.title}: </span>
                          <span className="text-gray-300">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                  4. Data Security
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Encryption of sensitive data in transit and at rest',
                      'Regular security assessments and updates',
                      'Access controls and employee training',
                      'Secure payment processing through certified providers'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10 blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-yellow-500/30 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                  5. Your Rights and Choices
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Access', desc: 'Request access to your personal information' },
                    { title: 'Correction', desc: 'Update or correct inaccurate information' },
                    { title: 'Deletion', desc: 'Request deletion of your personal information (subject to legal requirements)' },
                    { title: 'Opt-out', desc: 'Unsubscribe from marketing communications' },
                    { title: 'Data Portability', desc: 'Request a copy of your data in a structured format' },
                    { title: 'Location Services', desc: 'Disable location tracking in your device settings' }
                  ].map((item, index) => (
                    <div key={index} className="relative p-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl hover:bg-white/[0.05] hover:border-yellow-500/30 transition-all duration-300">
                      <h4 className="font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="space-y-8">
              {[
                {
                  title: '6. Cookies and Tracking Technologies',
                  content: 'We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie preferences through your browser settings.'
                },
                {
                  title: '7. Data Retention',
                  content: 'We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes. Order history may be retained for up to 7 years for accounting and tax purposes.'
                },
                {
                  title: '8. Children\'s Privacy',
                  content: 'Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.'
                },
                {
                  title: '9. International Data Transfers',
                  content: 'Your information may be transferred to and processed in countries other than India. We ensure appropriate safeguards are in place to protect your information during such transfers.'
                },
                {
                  title: '10. Changes to This Privacy Policy',
                  content: 'We may update this Privacy Policy from time to time. We will notify you of significant changes through the app, email, or by posting the updated policy on our website. Your continued use of our services constitutes acceptance of the updated policy.'
                }
              ].map((section, index) => (
                <div key={index} className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full" />
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 blur-2xl scale-110" />
              <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-orange-500/30 rounded-3xl">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                  11. Contact Us
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span className="text-white font-semibold">Vendmat Technologies Private Limited</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span className="text-gray-300"><strong>CIN:</strong> U56103KA2023PTC173001</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span className="text-gray-300"><strong>Email:</strong> privacy@vendmat.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span className="text-gray-300"><strong>Support Email:</strong> support@vendmat.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span className="text-gray-300"><strong>Phone:</strong> +91 9403891737</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span className="text-gray-300"><strong>Address:</strong> Bangalore, India</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative p-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-4">Data Protection Officer</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-gray-300"><strong>Name:</strong> Aayush Sharma</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-gray-300"><strong>Email:</strong> support@vendmat.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-gray-300"><strong>Working Hours:</strong> Monday to Friday, 9 AM to 6 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🔒</div>
                    <div>
                      <p className="text-orange-300 font-semibold mb-2">Your Privacy Matters</p>
                      <p className="text-orange-200">
                        We are committed to transparency and protecting your personal information. If you have any concerns about how we handle your data, please don't hesitate to reach out to us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
} 