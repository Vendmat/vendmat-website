"use client";

import { useState } from 'react';
import Image from 'next/image';

interface Enhanced3DMachineProps {
  intensity?: number;
  rotationRange?: number;
}

const Enhanced3DMachine: React.FC<Enhanced3DMachineProps> = ({ 
  intensity = 1, 
  rotationRange = 25 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate mouse position relative to center (-1 to 1)
    const mouseX = ((e.clientX - centerX) / rect.width) * 2;
    const mouseY = ((e.clientY - centerY) / rect.height) * 2;
    
    // Apply rotation with bounds
    const maxRotation = rotationRange * intensity;
    const rotX = Math.max(-maxRotation, Math.min(maxRotation, -mouseY * maxRotation));
    const rotY = Math.max(-maxRotation, Math.min(maxRotation, mouseX * maxRotation));
    
    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const transformStyle = `
    perspective(1200px) 
    rotateX(${rotation.x}deg) 
    rotateY(${rotation.y}deg) 
    translateZ(${isHovered ? 40 : 20}px)
    scale(${isHovered ? 1.05 : 1})
  `;

  const shadowIntensity = Math.abs(rotation.x) + Math.abs(rotation.y);
  const filterStyle = `
    brightness(${isHovered ? 1.2 : 1.15}) 
    contrast(1.1) 
    saturate(1.1)
    drop-shadow(0 ${25 + shadowIntensity}px ${50 + shadowIntensity * 2}px rgba(248, 101, 12, ${0.3 + shadowIntensity * 0.01}))
    drop-shadow(0 ${35 + shadowIntensity}px ${70 + shadowIntensity * 2}px rgba(0, 0, 0, ${0.4 + shadowIntensity * 0.01}))
  `;

  return (
    <div 
      className="relative group cursor-pointer w-80 md:w-[450px] lg:w-[550px] xl:w-[600px] h-auto"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {/* Hover indicator for debugging */}
      {isHovered && (
        <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded text-xs z-50">
          Hovering: X:{rotation.x.toFixed(1)}° Y:{rotation.y.toFixed(1)}°
        </div>
      )}
      
      {/* Machine Container with 3D Transform */}
      <div 
        className="relative transition-all duration-150 ease-out transform-gpu"
        style={{ 
          transform: transformStyle,
          filter: filterStyle,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Dynamic Lighting Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent rounded-lg pointer-events-none transition-opacity duration-300"
          style={{ 
            opacity: isHovered ? 0.6 : 0.3,
            transform: `translateZ(5px)`
          }}
        />
        
        {/* Dynamic Rim Light */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f8650c]/15 to-transparent rounded-lg pointer-events-none transition-all duration-300"
          style={{ 
            opacity: isHovered ? (0.5 + Math.abs(rotation.x + rotation.y) * 0.02) : 0,
            transform: `translateZ(3px) rotateY(${rotation.y * 0.5}deg)`
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
        
        {/* Dynamic Reflection */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/4 to-transparent rounded-lg pointer-events-none transition-all duration-300"
          style={{ 
            opacity: isHovered ? (0.4 + Math.abs(rotation.y) * 0.02) : 0,
            transform: `translateZ(2px) rotateX(${rotation.x * -0.3}deg)`
          }}
        />
        
        {/* Particle Effects */}
        {isHovered && (
          <>
            <div 
              className="absolute w-2 h-2 bg-orange-400/60 rounded-full animate-ping pointer-events-none"
              style={{ 
                top: '25%', 
                left: `${50 + rotation.y}%`,
                animationDelay: '0ms' 
              }} 
            />
            <div 
              className="absolute w-1 h-1 bg-yellow-400/40 rounded-full animate-ping pointer-events-none"
              style={{ 
                top: `${33 + rotation.x * 0.5}%`, 
                right: '25%',
                animationDelay: '300ms' 
              }} 
            />
            <div 
              className="absolute w-1.5 h-1.5 bg-red-400/50 rounded-full animate-ping pointer-events-none"
              style={{ 
                bottom: '33%', 
                left: `${33 - rotation.y * 0.5}%`,
                animationDelay: '600ms' 
              }} 
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Enhanced3DMachine;