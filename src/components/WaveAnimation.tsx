'use client';

import { useEffect, useRef } from 'react';

const WaveAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number, imageData: ImageData, data: Uint8ClampedArray;
    const SCALE = 2;
    let animationId: number;

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width = Math.floor(canvas.width / SCALE);
      height = Math.floor(canvas.height / SCALE);
      imageData = ctx!.createImageData(width, height);
      data = imageData.data;
    }

    const startTime = Date.now();

    const SIN_TABLE = new Float32Array(1024);
    const COS_TABLE = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) {
      const angle = (i / 1024) * Math.PI * 2;
      SIN_TABLE[i] = Math.sin(angle);
      COS_TABLE[i] = Math.cos(angle);
    }

    function fastSin(x: number) {
      const index = Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024) & 1023;
      return SIN_TABLE[index];
    }

    function fastCos(x: number) {
      const index = Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * 1024) & 1023;
      return COS_TABLE[index];
    }

    function render() {
      if (!ctx || !canvas) return;
      
      const time = (Date.now() - startTime) * 0.001;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const u_x = (2 * x - width) / height;
          const u_y = (2 * y - height) / height;

          let a = 0;
          let d = 0;

          for (let i = 0; i < 4; i++) {
            a += fastCos(i - d + time * 0.5 - a * u_x);
            d += fastSin(i * u_y + a);
          }

          // Orange theme color palette for Vendmat
          const wave = (fastSin(a) + fastCos(d)) * 0.5;
          const intensity = 0.3 + 0.4 * wave;

          // Dark base with orange accents
          const baseVal = 0.1 + 0.15 * fastCos(u_x + u_y + time * 0.3);

          // Orange wave accents
          const orangeAccent = 0.3 * fastSin(a * 1.5 + time * 0.2);
          const yellowAccent = 0.2 * fastCos(d * 2 + time * 0.1);

          const r = Math.max(0, Math.min(1, baseVal + orangeAccent * 1.2 + yellowAccent * 0.8)) * intensity;
          const g = Math.max(0, Math.min(1, baseVal + orangeAccent * 0.6 + yellowAccent * 0.9)) * intensity;
          const b = Math.max(0, Math.min(1, baseVal + yellowAccent * 0.3)) * intensity;

          const finalR = r * 255;
          const finalG = g * 255;
          const finalB = b * 255;

          const index = (y * width + x) * 4;
          data[index] = finalR;
          data[index + 1] = finalG;
          data[index + 2] = finalB;
          data[index + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      if (SCALE > 1) {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
      }

      animationId = requestAnimationFrame(render);
    }

    // Initialize
    resizeCanvas();
    render();

    // Handle resize
    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default WaveAnimation; 