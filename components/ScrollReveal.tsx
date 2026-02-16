import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-right' | 'scale-up' | 'blur-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  blurStrength?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  animation = 'blur-in', 
  delay = 0,
  duration = 1000,
  threshold = 0.15,
  blurStrength = 12
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold, rootMargin: '0px 0px -50px 0px' });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    // Custom easing for "luxury" feel
    const baseTransition = `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`; 
    
    if (!isVisible) {
      switch (animation) {
        case 'blur-in': return { opacity: 0, transform: 'translateY(30px)', filter: `blur(${blurStrength}px)`, transition: baseTransition };
        case 'fade-up': return { opacity: 0, transform: 'translateY(40px)', filter: 'blur(0px)', transition: baseTransition };
        case 'fade-in': return { opacity: 0, filter: 'blur(0px)', transition: baseTransition };
        case 'slide-right': return { opacity: 0, transform: 'translateX(-40px)', filter: 'blur(0px)', transition: baseTransition };
        case 'scale-up': return { opacity: 0, transform: 'scale(0.95)', filter: 'blur(4px)', transition: baseTransition };
        default: return { opacity: 0, transition: baseTransition };
      }
    }
    
    return { 
      opacity: 1, 
      transform: 'none', 
      filter: 'blur(0px)',
      transition: `${baseTransition} ${delay}ms` 
    };
  };

  return (
    <div ref={domRef} className={className} style={{...getAnimationStyles(), willChange: 'opacity, transform, filter'}}>
      {children}
    </div>
  );
};

export default ScrollReveal;