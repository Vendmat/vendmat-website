"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const ScrollAnimatedMachine: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollY = () => {
      setScrollY(window.scrollY);
    };

    const checkVisibility = () => {
      const heroSection = document.querySelector('#hero-section');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsVisible(rect.bottom > 0 && rect.top < window.innerHeight);
      }
    };

    const handleScroll = () => {
      updateScrollY();
      checkVisibility();
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scroll-based transforms
  const scrollProgress = Math.min(scrollY / 800, 1); // Normalize scroll to 0-1
  const rotateY = scrollProgress * 15; // Rotate up to 15 degrees
  const rotateX = Math.sin(scrollY * 0.002) * 3; // Gentle oscillation
  const scale = 1 + scrollProgress * 0.1; // Slight scale increase
  const translateZ = 20 + scrollProgress * 30; // Move forward on scroll

  const transformStyle = `
    perspective(1200px) 
    rotateX(${rotateX}deg) 
    rotateY(${rotateY}deg) 
    translateZ(${translateZ}px)
    scale(${scale})
  `;

  const filterStyle = `
    brightness(${1.15 + scrollProgress * 0.1}) 
    contrast(1.1) 
    saturate(${1.1 + scrollProgress * 0.2})
    drop-shadow(0 ${25 + scrollProgress * 20}px ${50 + scrollProgress * 30}px rgba(248, 101, 12, ${0.3 + scrollProgress * 0.2}))
    drop-shadow(0 ${35 + scrollProgress * 15}px ${70 + scrollProgress * 25}px rgba(0, 0, 0, ${0.4 + scrollProgress * 0.1}))
  `;

  return (
    <div className="relative w-80 md:w-[450px] lg:w-[550px] xl:w-[600px] h-auto">
      {/* Machine Container with Scroll-based Transform */}
      <div 
        className="relative transition-all duration-100 ease-out transform-gpu"
        style={{ 
          transform: transformStyle,
          filter: filterStyle,
          transformStyle: 'preserve-3d',
          opacity: isVisible ? 1 : 0.8
        }}
      >
        {/* Scroll-based Lighting Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/6 to-transparent rounded-lg pointer-events-none"
          style={{ 
            opacity: 0.3 + scrollProgress * 0.4,
            transform: `translateZ(5px) rotateY(${rotateY * 0.5}deg)`
          }}
        />
        
        {/* Dynamic Rim Light based on scroll */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f8650c]/12 to-transparent rounded-lg pointer-events-none"
          style={{ 
            opacity: scrollProgress * 0.8,
            transform: `translateZ(3px) rotateX(${rotateX}deg)`
          }}
        />
        
        {/* Machine Image */}
        <Image
          src="/vendmat_photos/DSC01982- With Boxes.png"
          alt="Vendmat Smart Vending Machine"
          width={600}
          height={900}
          className="w-full h-auto object-contain relative z-10"
          priority
        />
        
        {/* Scroll-based Reflection */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/3 to-transparent rounded-lg pointer-events-none"
          style={{ 
            opacity: scrollProgress * 0.6,
            transform: `translateZ(2px) rotateX(${rotateX * -0.5}deg)`
          }}
        />
        
        {/* Scroll Progress Particles */}
        {scrollProgress > 0.2 && (
          <>
            <div 
              className="absolute w-1.5 h-1.5 bg-orange-400/50 rounded-full animate-pulse pointer-events-none"
              style={{ 
                top: '20%', 
                left: `${40 + scrollProgress * 20}%`,
                opacity: scrollProgress
              }} 
            />
            <div 
              className="absolute w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse pointer-events-none"
              style={{ 
                top: `${60 - scrollProgress * 20}%`, 
                right: '20%',
                opacity: scrollProgress,
                animationDelay: '500ms'
              }} 
            />
            <div 
              className="absolute w-2 h-2 bg-red-400/30 rounded-full animate-pulse pointer-events-none"
              style={{ 
                bottom: '25%', 
                left: `${20 + scrollProgress * 30}%`,
                opacity: scrollProgress,
                animationDelay: '1000ms'
              }} 
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ScrollAnimatedMachine;