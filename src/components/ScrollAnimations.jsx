import React, { useEffect, useRef, useState } from 'react';

// Intersection Observer hook for scroll animations
export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

// Enhanced animated wrapper component
export const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = '0.8s'
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  
  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? 'translateY(0) scale(1) rotateX(0deg)' 
      : 'translateY(40px) scale(0.95) rotateX(10deg)',
    transition: `all ${duration} cubic-bezier(0.25, 0.8, 0.25, 1)`,
    transitionDelay: `${delay}ms`
  };

  const animations = {
    fadeInUp: {
      transform: isVisible 
        ? 'translateY(0) scale(1) rotateX(0deg)' 
        : 'translateY(40px) scale(0.95) rotateX(10deg)'
    },
    fadeInLeft: {
      transform: isVisible 
        ? 'translateX(0) rotateY(0deg)' 
        : 'translateX(-60px) rotateY(20deg)'
    },
    fadeInRight: {
      transform: isVisible 
        ? 'translateX(0) rotateY(0deg)' 
        : 'translateX(60px) rotateY(-20deg)'
    },
    scaleIn: {
      transform: isVisible 
        ? 'scale(1) rotateZ(0deg)' 
        : 'scale(0.8) rotateZ(10deg)'
    }
  };

  const finalStyle = {
    ...animationStyle,
    ...animations[animation]
  };

  return (
    <div ref={ref} className={className} style={finalStyle}>
      {children}
    </div>
  );
};

// Staggered animation for multiple elements
export const StaggeredAnimation = ({ children, className = '', staggerDelay = 100 }) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimatedSection 
          key={index}
          delay={index * staggerDelay}
          animation="fadeInUp"
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
};

export default AnimatedSection;