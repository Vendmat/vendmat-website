"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  darkNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Vendmat | Hot Food Vending Machine",
  description = "Smart vending machines serving fresh, affordable food—where you need it most.",
  darkNav = false
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/vendmat_logo/12.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/vendmat_logo/12.png" />
        <link rel="apple-touch-icon" href="/vendmat_logo/12.png" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>

      {/* Navbar - Absolute positioned for dark theme */}
      <header className={`absolute top-0 w-full z-30 px-6 py-3 ${darkNav ? 'bg-gray-900' : 'bg-white shadow-md'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/vendmat_logo/11.png"
              alt="Vendmat - Smart Food Vending Solutions"
              width={320}
              height={320}
              className="h-10 w-auto"
              priority
            />
          </Link>
          
          <nav className={`space-x-8 hidden md:flex ${darkNav ? 'text-gray-300' : 'text-gray-700'}`}>
            <Link href="/#how" className={`transition-colors ${darkNav ? 'hover:text-white' : 'hover:text-[#f8650c]'}`}>
              How It Works
            </Link>
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={`transition-colors flex items-center gap-1 ${darkNav ? 'hover:text-white' : 'hover:text-[#f8650c]'}`}
              >
                Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className={`absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg z-50 ${darkNav ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
                >
                  <div className="py-2">
                    <Link href="/solutions" className={`block px-4 py-2 text-sm transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-[#f8650c] hover:bg-gray-50'}`}>
                      All Solutions
                    </Link>
                    <Link href="/corporate" className={`block px-4 py-2 text-sm transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-[#f8650c] hover:bg-gray-50'}`}>
                      Corporate
                    </Link>
                    <Link href="/partners" className={`block px-4 py-2 text-sm transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-[#f8650c] hover:bg-gray-50'}`}>
                      Partners
                    </Link>
                    <Link href="/roi-calculator" className={`block px-4 py-2 text-sm transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-[#f8650c] hover:bg-gray-50'}`}>
                      ROI Calculator
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/technology" className={`transition-colors ${darkNav ? 'hover:text-white' : 'hover:text-[#f8650c]'}`}>
              Technology
            </Link>
            <Link href="/menu" className={`transition-colors ${darkNav ? 'hover:text-white' : 'hover:text-[#f8650c]'}`}>
              Menu
            </Link>
            <Link href="/locations" className={`transition-colors ${darkNav ? 'hover:text-white' : 'hover:text-[#f8650c]'}`}>
              Locations
            </Link>
            <Link href="/blog" className={`transition-colors ${darkNav ? 'hover:text-white' : 'hover:text-[#f8650c]'}`}>
              Blog
            </Link>
            <Link href="/about" className={`transition-colors ${darkNav ? 'hover:text-white' : 'hover:text-[#f8650c]'}`}>
              About
            </Link>
            <Link href="/contact" className={`transition-colors ${darkNav ? 'hover:text-white' : 'hover:text-[#f8650c]'}`}>
              Contact
            </Link>
          </nav>
          
          <button 
            className={`md:hidden ${darkNav ? 'text-white' : 'text-gray-700'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`absolute top-full left-0 right-0 shadow-lg md:hidden z-50 ${darkNav ? 'bg-gray-800' : 'bg-white'}`}>
              <nav className="flex flex-col py-4">
                <Link href="/#how" className={`px-6 py-3 transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-[#f8650c] hover:bg-gray-50'}`}>
                  How It Works
                </Link>
                <div>
                  <button
                    onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                    className={`w-full flex items-center justify-between px-6 py-3 transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-[#f8650c] hover:bg-gray-50'}`}
                  >
                    Solutions
                    <svg className={`w-4 h-4 transform transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileSolutionsOpen && (
                    <div className={`${darkNav ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <Link href="/solutions" className={`block px-10 py-2 text-sm transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-600' : 'text-gray-600 hover:text-[#f8650c] hover:bg-gray-200'}`}>
                        All Solutions
                      </Link>
                      <Link href="/corporate" className={`block px-10 py-2 text-sm transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-600' : 'text-gray-600 hover:text-[#f8650c] hover:bg-gray-200'}`}>
                        Corporate
                      </Link>
                      <Link href="/partners" className={`block px-10 py-2 text-sm transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-600' : 'text-gray-600 hover:text-[#f8650c] hover:bg-gray-200'}`}>
                        Partners
                      </Link>
                      <Link href="/roi-calculator" className={`block px-10 py-2 text-sm transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-600' : 'text-gray-600 hover:text-[#f8650c] hover:bg-gray-200'}`}>
                        ROI Calculator
                      </Link>
                    </div>
                  )}
                </div>
                <Link href="/technology" className={`px-6 py-3 transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-[#f8650c] hover:bg-gray-50'}`}>
                  Technology
                </Link>
                <Link href="/menu" className={`px-6 py-3 transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-[#f8650c] hover:bg-gray-50'}`}>
                  Menu
                </Link>
                <Link href="/locations" className={`px-6 py-3 transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-[#f8650c] hover:bg-gray-50'}`}>
                  Locations
                </Link>
                <Link href="/blog" className={`px-6 py-3 transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-[#f8650c] hover:bg-gray-50'}`}>
                  Blog
                </Link>
                <Link href="/about" className={`px-6 py-3 transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-[#f8650c] hover:bg-gray-50'}`}>
                  About
                </Link>
                <Link href="/contact" className={`px-6 py-3 transition-colors ${darkNav ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-[#f8650c] hover:bg-gray-50'}`}>
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="text-xl font-medium tracking-tighter text-[#f8650c] mr-2">VENDMAT</div>
              </div>
              <p className="text-gray-300 mb-4">
                Smart vending machines serving fresh, affordable food—where you need it most.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/90650036" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/vendmat/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Instagram
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link></li>
                <li><Link href="/technology" className="text-gray-300 hover:text-white transition-colors">Technology</Link></li>
                <li><Link href="/menu" className="text-gray-300 hover:text-white transition-colors">Menu</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>contact@vendmat.com</li>
                <li>+91 9403891737</li>
                <li>Bangalore, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Vendmat Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/shipping-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Shipping Policy
              </Link>
              <Link href="/cancellation-refund" className="text-gray-400 hover:text-white transition-colors text-sm">
                Refund & Cancellation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
