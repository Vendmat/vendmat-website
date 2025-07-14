"use client";

import { useEffect, useRef, useState } from 'react';

interface Interactive3DProps {
  children: React.ReactNode;
  intensity?: number;
  rotationRange?: number;
  springStrength?: number;
}

const Interactive3D: React.FC<Interactive3DProps> = ({ 
  children, 
  intensity = 1, 
  rotationRange = 25,
  springStrength = 0.1 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let targetRotation = { x: 0, y: 0 };
    let currentRotation = { x: 0, y: 0 };

    const animate = () => {
      // Spring animation towards target
      const dx = targetRotation.x - currentRotation.x;
      const dy = targetRotation.y - currentRotation.y;
      
      currentRotation.x += dx * springStrength;
      currentRotation.y += dy * springStrength;
      
      // Apply transform with enhanced 3D effects
      const transformString = `
        perspective(1200px) 
        rotateX(${currentRotation.x}deg) 
        rotateY(${currentRotation.y}deg) 
        translateZ(${isHovered ? 40 : 20}px)
        scale(${isHovered ? 1.05 : 1})
      `;
      
      container.style.transform = transformString;
      
      // Continue animation if there's still movement
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1 || isHovered) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;
      
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate mouse position relative to center
      const mouseX = (e.clientX - centerX) / rect.width;
      const mouseY = (e.clientY - centerY) / rect.height;
      
      // Convert to rotation with bounds
      const maxRotation = rotationRange * intensity;
      targetRotation.x = Math.max(-maxRotation, Math.min(maxRotation, -mouseY * maxRotation));
      targetRotation.y = Math.max(-maxRotation, Math.min(maxRotation, mouseX * maxRotation));
      
      // Start animation if not already running
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      targetRotation = { x: 0, y: 0 };
      
      // Continue animation to return to center
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    // Global mouse move for tracking when hovered
    const handleGlobalMouseMove = (e: MouseEvent) => {
      handleMouseMove(e);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, rotationRange, springStrength, isHovered]);

  return (
    <div 
      ref={containerRef}
      className="transition-all duration-200 ease-out transform-gpu cursor-pointer"
      style={{ 
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

export default Interactive3D;