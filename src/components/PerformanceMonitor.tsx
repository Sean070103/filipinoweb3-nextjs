'use client';

import { useEffect, useState } from 'react';

export default function PerformanceMonitor() {
  const [fps, setFps] = useState(0);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        frameCount = 0;
        lastTime = currentTime;
        
        // If FPS is consistently low, reduce animations
        if (fps < 30 && fps > 0) {
          setIsLowPerformance(true);
          document.documentElement.style.setProperty('--animation-duration', '0.1s');
        } else {
          setIsLowPerformance(false);
          document.documentElement.style.setProperty('--animation-duration', '0.3s');
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
  }, [fps]);

  // Don't render anything, just monitor performance
  return null;
}




