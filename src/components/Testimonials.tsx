'use client';

import { useState } from 'react';
import Image from 'next/image';
import { WhatsAppQuickAction } from './WhatsAppWidget';

const testimonials = [
  {
    id: 1,
    name: "Arjun Reddy",
    role: "Software Engineer",
    company: "SJR Tech Park",
    image: "https://ui-avatars.com/api/?name=Male&background=f8650c&color=fff&size=64&rounded=true&bold=true",
    text: "The Vendmat machine at SJR Tech Park has completely changed my lunch routine. I can grab fresh, hot meals without leaving the office complex. The biryani from their partner restaurants is amazing, and it's always served at perfect temperature!",
    rating: 5,
    category: "Employee",
    stats: "Daily customer for 8 months"
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Product Manager",
    company: "SJR Tech Park",
    image: "https://ui-avatars.com/api/?name=Female&background=f8650c&color=fff&size=64&rounded=true&bold=true",
    text: "Working late hours is common in tech, and having access to quality food at 9 PM through Vendmat has been a lifesaver. The pre-order feature through their app is so convenient - I order during meetings and pick up when ready.",
    rating: 5,
    category: "Employee",
    stats: "50+ orders placed"
  },
  {
    id: 3,
    name: "Ravi Kumar",
    role: "Marketing Executive",
    company: "Ecoworld",
    image: "https://ui-avatars.com/api/?name=Male&background=f8650c&color=fff&size=64&rounded=true&bold=true",
    text: "The variety at Ecoworld's Vendmat is incredible. Four different restaurants means there's always something new to try. The hygiene standards are top-notch, and the food is consistently fresh and delicious.",
    rating: 5,
    category: "Employee",
    stats: "Tried 25+ different dishes"
  },
  {
    id: 4,
    name: "Meera Sharma",
    role: "Operations Manager",
    company: "Ecoworld",
    image: "https://ui-avatars.com/api/?name=Female&background=f8650c&color=fff&size=64&rounded=true&bold=true",
    text: "As someone who manages office operations, I can confidently say Vendmat has solved our biggest challenge - employee satisfaction with food options. The 24/7 availability and consistent quality have made our workplace much more employee-friendly.",
    rating: 5,
    category: "Employee",
    stats: "98% team satisfaction rate"
  },
  {
    id: 5,
    name: "Kavya Nair",
    role: "Data Analyst",
    company: "Azure",
    image: "https://ui-avatars.com/api/?name=Female&background=f8650c&color=fff&size=64&rounded=true&bold=true",
    text: "The Vendmat at Azure has been a game-changer for our team. The contactless payment system and quick service fits perfectly with our fast-paced work environment. The South Indian dishes are authentic and remind me of home!",
    rating: 5,
    category: "Employee",
    stats: "Regular customer for 6 months"
  }
];

const categories = ['All', 'Employee'];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredTestimonials = activeCategory === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Trusted by 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f8650c] to-orange-400">
              {" "}Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our partners and customers say about transforming their food service with Vendmat
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#f8650c] text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-8 lg:p-12 border border-gray-600">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl text-gray-100 leading-relaxed mb-6">
                  "{filteredTestimonials[currentIndex]?.text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={filteredTestimonials[currentIndex]?.image || '/vendmat_photos/DSC01982- With Boxes.png'}
                      alt={filteredTestimonials[currentIndex]?.name || ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {filteredTestimonials[currentIndex]?.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {filteredTestimonials[currentIndex]?.role}
                    </div>
                    <div className="text-[#f8650c] text-sm font-medium">
                      {filteredTestimonials[currentIndex]?.company}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="bg-gray-900/50 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-[#f8650c] mb-2">
                    {filteredTestimonials[currentIndex]?.stats}
                  </div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide">
                    {filteredTestimonials[currentIndex]?.category} Success
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                disabled={filteredTestimonials.length <= 1}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentIndex === index ? 'bg-[#f8650c]' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                disabled={filteredTestimonials.length <= 1}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#f8650c] mb-2">3</div>
            <div className="text-gray-300">Machines Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#f8650c] mb-2">5000+</div>
            <div className="text-gray-300">Meals Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#f8650c] mb-2">8</div>
            <div className="text-gray-300">Restaurant Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#f8650c] mb-2">98%</div>
            <div className="text-gray-300">Customer Satisfaction</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#f8650c] to-orange-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Join Our Success Stories
          </h3>
          <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
            Transform your food service and become the next success story. Our team is ready to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppQuickAction 
              type="demo"
              className="bg-white text-[#f8650c] hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg"
            >
              Book Your Demo
            </WhatsAppQuickAction>
            <WhatsAppQuickAction 
              type="partnership"
              className="border-2 border-white text-white hover:bg-white hover:text-[#f8650c] font-semibold px-8 py-3 rounded-lg"
            >
              Become a Partner
            </WhatsAppQuickAction>
          </div>
        </div>
      </div>
    </section>
  );
}