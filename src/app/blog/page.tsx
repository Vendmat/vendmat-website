'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { useState } from 'react';

// Metadata will be handled by layout or moved to separate metadata file
// For client components, we'll handle SEO via next/head if needed

const blogPosts = [
  {
    id: 'hot-food-vending-machines-colleges-india',
    title: 'Advantages of Hot Food Vending Machines in Colleges in India',
    excerpt: 'Discover how hot food vending machines are transforming college dining with 24/7 convenience, enhanced hygiene, diverse options, and cost-effectiveness for students.',
    image: '/canva_designs/3.png',
    date: '2024-12-16',
    readTime: '8 min read',
    category: 'Educational Solutions',
    slug: 'hot-food-vending-machines-colleges-india'
  },
  {
    id: 'hot-food-vending-market-trends-2024',
    title: 'The $13.6 Billion Opportunity: Hot Food Vending Market Trends 2024',
    excerpt: 'Market analysis showing explosive growth from $7.9B to $13.6B by 2032. Asia-Pacific leading with 7.1% CAGR. Industry insights and opportunities.',
    image: '/canva_designs/8.png',
    date: '2024-12-15',
    readTime: '6 min read',
    category: 'Market Analysis',
    slug: 'hot-food-vending-market-trends-2024'
  },
  {
    id: 'food-court-in-vending-machine',
    title: 'How Vendmat Creates a "Food Court in a Vending Machine"',
    excerpt: 'Discover how our unique partnership model with 4 restaurants per machine transforms traditional vending into a comprehensive dining experience.',
    image: '/vendmat_photos/DSC01982- With Boxes.png',
    date: '2024-12-15',
    readTime: '5 min read',
    category: 'Innovation',
    slug: 'food-court-in-vending-machine'
  },
  {
    id: 'smart-vending-ai-iot-revolution',
    title: 'Smart Vending Revolution: AI and IoT Transforming Food Access',
    excerpt: 'Smart vending market growing from $21B to $48.9B by 2030 at 12.8% CAGR. AI personalization, IoT connectivity, and cashless payments leading the transformation.',
    image: '/vendmat_photos/Machine_used.png',
    date: '2024-12-14',
    readTime: '7 min read',
    category: 'Technology Innovation',
    slug: 'smart-vending-ai-iot-revolution'
  },
  {
    id: 'workplace-wellness-productivity-roi',
    title: 'Workplace Wellness ROI: How Corporate Food Solutions Boost Productivity by 25%',
    excerpt: 'Data showing 6:1 ROI on workplace nutrition with 25% productivity boost, 14-19% reduction in absenteeism, and improved employee satisfaction.',
    image: '/canva_designs/2.png',
    date: '2024-12-13',
    readTime: '8 min read',
    category: 'Corporate Wellness',
    slug: 'workplace-wellness-productivity-roi'
  },
  {
    id: 'fssai-regulations-smart-vending-india',
    title: 'Food Safety First: Navigating FSSAI Regulations for Smart Vending in India',
    excerpt: 'Complete guide to FSSAI registration for food vending machines. Learn about licensing tiers, temperature compliance at 60°C, and legal requirements.',
    image: '/canva_designs/7.png',
    date: '2024-12-12',
    readTime: '9 min read',
    category: 'Regulatory Compliance',
    slug: 'fssai-regulations-smart-vending-india'
  },
  {
    id: 'robotics-automation-food-service-2030',
    title: 'Future-Proofing Food Service: Robotics and Automation Trends Through 2030',
    excerpt: 'Food robotics market growing from $1.81B at 20.6% CAGR. AI in food industry reaching $84.75B by 2030. 88% of companies planning robotics integration.',
    image: '/canva_designs/9.png',
    date: '2024-12-11',
    readTime: '10 min read',
    category: 'Future Technology',
    slug: 'robotics-automation-food-service-2030'
  },
  {
    id: 'restaurant-partnership-model',
    title: 'Why Restaurant Partnerships Are the Future of Food Vending',
    excerpt: 'Learn how our fixed-fee model with no commission per sale benefits both restaurants and customers, creating a sustainable ecosystem.',
    image: '/canva_designs/6.png',
    date: '2024-12-10',
    readTime: '4 min read',
    category: 'Business Model',
    slug: 'restaurant-partnership-model'
  }
];

const categories = ['All', 'Educational Solutions', 'Market Analysis', 'Innovation', 'Technology Innovation', 'Corporate Wellness', 'Regulatory Compliance', 'Future Technology', 'Business Model'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold mb-6">
              Vendmat
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#f8650c] to-orange-400">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends, technologies, and insights in smart food vending solutions. 
              From restaurant partnerships to sustainability initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-label={`Filter posts by ${category} category`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#f8650c] text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-[#f8650c] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-16">
              <div className="bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl overflow-hidden hover:bg-gray-600/50 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#f8650c] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {filteredPosts[0].category}
                      </span>
                      <span className="text-gray-400 text-sm">{filteredPosts[0].date}</span>
                      <span className="text-gray-400 text-sm">{filteredPosts[0].readTime}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-gray-300 text-lg mb-6">
                      {filteredPosts[0].excerpt}
                    </p>
                    <Link 
                      href={`/blog/${filteredPosts[0].slug}`}
                      className="inline-flex items-center text-[#f8650c] font-semibold hover:text-orange-400 transition-colors duration-300"
                      aria-label={`Read more about ${filteredPosts[0].title}`}
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          {filteredPosts.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl overflow-hidden hover:bg-gray-600/50 hover:scale-105 transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-[#f8650c] font-semibold hover:text-orange-400 transition-colors duration-300"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
              ))}
            </div>
          ) : filteredPosts.length === 1 ? (
            <div className="text-center text-gray-400 py-12">
              <p>Only one post found in this category. Check the featured post above!</p>
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12">
              <p>No posts found in this category. Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Vendmat Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest updates on food vending technology, industry trends, and Vendmat news delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f8650c]"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[#f8650c] to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}