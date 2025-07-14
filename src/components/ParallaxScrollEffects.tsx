"use client";

import { useEffect, useState } from 'react';

const ParallaxScrollEffects: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        
        {/* Floating Geometric Shapes */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-full blur-xl"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` 
          }}
        />
        
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/8 to-pink-500/4 rounded-full blur-lg"
          style={{ 
            transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.05}deg)` 
          }}
        />
        
        <div 
          className="absolute top-80 left-1/4 w-16 h-16 bg-gradient-to-br from-yellow-500/12 to-orange-500/6 rounded-full blur-md"
          style={{ 
            transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.15}deg)` 
          }}
        />
        
        {/* Gradient Overlay Lines */}
        <div 
          className="absolute top-60 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px) scaleX(${1 + scrollY * 0.001})` 
          }}
        />
        
        <div 
          className="absolute top-[500px] left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/15 to-transparent"
          style={{ 
            transform: `translateY(${scrollY * -0.3}px) scaleX(${1 + scrollY * 0.0008})` 
          }}
        />
        
        {/* Floating Particles */}
        <div 
          className="absolute top-32 right-1/3 w-2 h-2 bg-orange-400/60 rounded-full animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.6}px) translateX(${Math.sin(scrollY * 0.01) * 20}px)` 
          }}
        />
        
        <div 
          className="absolute top-96 left-1/3 w-1 h-1 bg-yellow-400/50 rounded-full animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * -0.4}px) translateX(${Math.cos(scrollY * 0.008) * 15}px)`,
            animationDelay: '1s'
          }}
        />
        
        <div 
          className="absolute top-[600px] right-1/4 w-1.5 h-1.5 bg-red-400/40 rounded-full animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.7}px) translateX(${Math.sin(scrollY * 0.012) * 25}px)`,
            animationDelay: '2s'
          }}
        />
        
        {/* Large Background Gradient Circles */}
        <div 
          className="absolute top-[800px] left-0 w-[800px] h-[800px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full blur-3xl"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px) translateX(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0002})` 
          }}
        />
        
        <div 
          className="absolute top-[1200px] right-0 w-[600px] h-[600px] bg-gradient-radial from-purple-500/4 to-transparent rounded-full blur-3xl"
          style={{ 
            transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * -0.05}px) scale(${1 + scrollY * 0.0001})` 
          }}
        />
        
      </div>
    </>
  );
};

export default ParallaxScrollEffects;