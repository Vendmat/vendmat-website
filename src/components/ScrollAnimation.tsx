"use client";

import { useEffect, useState } from 'react';

const ScrollAnimation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Ensure all elements are visible by default (critical fix)
    const makeElementsVisible = () => {
      // Remove any opacity-0 classes that might hide content
      document.querySelectorAll('[class*="opacity-0"]').forEach(el => {
        const element = el as HTMLElement;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
      
      // Ensure animate-on-scroll elements are visible
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        const element = el as HTMLElement;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
      
      // Ensure scroll-animate sections are visible
      document.querySelectorAll('.scroll-animate').forEach(el => {
        const element = el as HTMLElement;
        element.style.opacity = '1';
      });
    };

    // Make elements visible immediately
    makeElementsVisible();
    
    // Add fallback after a short delay
    setTimeout(makeElementsVisible, 100);
    
    // Add js-loaded class to enable enhanced animations
    document.body.classList.add('js-loaded');
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Animate children elements with stagger effect
          const animateElements = entry.target.querySelectorAll('.animate-on-scroll');
          animateElements.forEach((el, index) => {
            const element = el as HTMLElement;
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
              element.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all scroll-animate sections
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    // Additional fallback to ensure nothing stays hidden
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll('[class*="opacity-0"]').forEach(el => {
        const element = el as HTMLElement;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
      
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        const element = el as HTMLElement;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
    }, 2000);

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
      clearTimeout(fallbackTimer);
    };
  }, [isClient]);

  return null;
};

export default ScrollAnimation;