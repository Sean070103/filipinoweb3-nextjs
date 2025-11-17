'use client';

import { useEffect, useState } from 'react';

export default function PerformanceMonitor() {
  const [fps, setFps] = useState(0);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [memoryUsage, setMemoryUsage] = useState<number | null>(null);

  console.log(isLowPerformance);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const currentFps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setFps(currentFps);
        frameCount = 0;
        lastTime = currentTime;
        
        // If FPS is consistently low, reduce animations
        if (currentFps < 30 && currentFps > 0) {
          setIsLowPerformance(true);
          document.documentElement.style.setProperty('--animation-duration', '0.1s');
          document.documentElement.style.setProperty('--transition-duration', '0.1s');
        } else {
          setIsLowPerformance(false);
          document.documentElement.style.setProperty('--animation-duration', '0.3s');
          document.documentElement.style.setProperty('--transition-duration', '0.3s');
        }
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };

    animationId = requestAnimationFrame(measureFPS);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Monitor memory usage if available
  useEffect(() => {
    if ('memory' in performance) {
      const updateMemoryUsage = () => {
        const memory = (performance as any).memory;
        if (memory) {
          setMemoryUsage(memory.usedJSHeapSize / 1024 / 1024); // Convert to MB
        }
      };

      updateMemoryUsage();
      const interval = setInterval(updateMemoryUsage, 5000); // Check every 5 seconds

      return () => clearInterval(interval);
    }
  }, []);

  // Apply performance optimizations based on device capabilities
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01s');
      document.documentElement.style.setProperty('--transition-duration', '0.01s');
    }

    // Check for low-end device indicators
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
    
    if (isLowEndDevice) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
    }
  }, []);

  // Don't render anything, just monitor performance
  return null;
}


