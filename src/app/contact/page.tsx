"use client";

import Button from '@/components/Button';
import { useState } from 'react';

// Social Media Icons
const LinkedInIcon: React.FC = () => (<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"/></svg>);

const TwitterIcon: React.FC = () => (<svg viewBox="0 0 256 209" width="24" height="19" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45" fill="currentColor"/></svg>);

const InstagramIcon: React.FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path fill="currentColor" d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"/></svg>);

const FacebookIcon: React.FC = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" height="24" width="24"><defs><linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a"><stop offset="0%" stopColor="#0062E0"/><stop offset="100%" stopColor="#19AFFF"/></linearGradient></defs><path fill="url(#a)" d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"/><path fill="#FFF" d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"/></svg>);

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you for your message. We will get back to you soon!');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="absolute right-[5%] bottom-[30%] w-48 h-16 bg-gradient-to-r from-red-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border border-white/[0.1] animate-[float3d_8s_ease-in-out_infinite_2s] transform -rotate-15" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8 animate-[slideInUp_1s_ease-out_0.2s]">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm text-white/60 tracking-wide font-medium">
                Let's Connect
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-none mb-8 animate-[slideInUp_1s_ease-out_0.4s]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                Get In
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 block font-black italic transform -skew-x-3 tracking-wider animate-[glow_3s_ease-in-out_infinite]">
                Touch
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto animate-[slideInUp_1s_ease-out_0.6s]">
              Ready to transform your food service? Let's discuss how Vendmat 
              can serve your community better with innovative solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form - Enhanced */}
            <div className="animate-on-scroll">
              <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Send us a</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-2">Message</span>
                </h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-3">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-4 bg-white/[0.05] border border-white/[0.1] rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/[0.08] backdrop-blur-sm"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-3">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-4 bg-white/[0.05] border border-white/[0.1] rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/[0.08] backdrop-blur-sm"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-4 bg-white/[0.05] border border-white/[0.1] rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/[0.08] backdrop-blur-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-3">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full px-4 py-4 bg-white/[0.05] border border-white/[0.1] rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/[0.08] backdrop-blur-sm"
                      placeholder="Your company or organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-4 bg-white/[0.05] border border-white/[0.1] rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/[0.08] backdrop-blur-sm"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-4 bg-white/[0.05] border border-white/[0.1] rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all duration-300 hover:bg-white/[0.08] backdrop-blur-sm"
                    >
                      <option value="" className="bg-gray-800">Select a subject</option>
                      <option value="demo" className="bg-gray-800">Request a Demo</option>
                      <option value="partnership" className="bg-gray-800">Partnership Inquiry</option>
                      <option value="support" className="bg-gray-800">Technical Support</option>
                      <option value="general" className="bg-gray-800">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about your requirements, location, expected volume, or any questions you have..."
                      className="w-full px-4 py-4 bg-white/[0.05] border border-white/[0.1] rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/[0.08] backdrop-blur-sm resize-none"
                    />
                  </div>

                  {submitMessage && (
                    <div className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                      submitMessage.includes('Thank you') 
                        ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                        : 'bg-red-500/10 border-red-500/30 text-red-400'
                    }`}>
                      {submitMessage}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="group relative w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    disabled={isSubmitting}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                    <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information - Enhanced */}
            <div className="animate-on-scroll [animation-delay:200ms] space-y-8">
              <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Contact</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-2">Information</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="group">
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">Get in Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-center group/item hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 group-hover/item:shadow-lg group-hover/item:shadow-orange-500/50 transition-all duration-300">
                          <span className="text-xl">📧</span>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">contact@vendmat.com</span>
                      </div>
                      <div className="flex items-center group/item hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 group-hover/item:shadow-lg group-hover/item:shadow-orange-500/50 transition-all duration-300">
                          <span className="text-xl">📱</span>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">+91 9403891737</span>
                      </div>
                      <div className="flex items-center group/item hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 group-hover/item:shadow-lg group-hover/item:shadow-orange-500/50 transition-all duration-300">
                          <span className="text-xl">💬</span>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">WhatsApp: +91 7676943052</span>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">Office Location</h3>
                    <div className="flex items-start group/item hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:shadow-lg group-hover/item:shadow-orange-500/50 transition-all duration-300">
                        <span className="text-xl">📍</span>
                      </div>
                      <div className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                        <div className="font-semibold text-white mb-1">Vendmat Technologies Pvt Ltd</div>
                        <div>Kadubeesanahalli</div>
                        <div>Bangalore, Karnataka 560103</div>
                        <div>India</div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">Business Hours</h3>
                    <div className="flex items-start group/item hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/item:shadow-lg group-hover/item:shadow-orange-500/50 transition-all duration-300">
                        <span className="text-xl">🕐</span>
                      </div>
                      <div className="space-y-2 text-gray-300 group-hover/item:text-white transition-colors duration-300">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="text-sm text-orange-400 mt-3">
                          * Emergency support available 24/7 for existing customers
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">Follow Us</h3>
                    <div className="flex space-x-4">
                      {[
                        { name: "LinkedIn", url: "https://www.linkedin.com/company/vendmat/", icon: <LinkedInIcon /> },
                        { name: "Twitter", url: "https://x.com/vendmat", icon: <TwitterIcon /> },
                        { name: "Instagram", url: "https://www.instagram.com/vendmat/", icon: <InstagramIcon /> },
                        { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100090363673971", icon: <FacebookIcon /> }
                      ].map((social, index) => (
                        <a 
                          key={index}
                          href={social.url} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/social w-12 h-12 bg-white/[0.05] border border-white/[0.1] rounded-xl flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:border-orange-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50"
                          title={social.name}
                        >
                          <div className="group-hover/social:scale-110 transition-transform duration-300">{social.icon}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Why Choose Vendmat?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the growing community of satisfied partners and customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "5,000+", label: "Meals Served Daily", icon: "🍽️", description: "Fresh meals delivered every day" },
              { metric: "95%", label: "Customer Satisfaction", icon: "⭐", description: "Consistently high ratings" },
              { metric: "24/7", label: "Support Available", icon: "🛟", description: "Round-the-clock assistance" }
            ].map((stat, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.metric}
                  </div>
                  <div className="text-xl text-white font-semibold mb-2">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 