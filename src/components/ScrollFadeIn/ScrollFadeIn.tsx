"use client";
import React, { useEffect, useRef, useState } from "react";

interface ScrollFadeInProps {
  children: React.ReactNode;
  threshold?: number;
}

const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  threshold = 0.2,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current!.unobserve(element);
          }
        });
      },
      { threshold }
    );

    observerRef.current.observe(element);

    return () => {
      if (element && observerRef.current) {
        observerRef.current.unobserve(element);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`scroll-fade-in ${isVisible ? "visible" : ""}`}
    >
      {children}
      <style jsx>{`
        .scroll-fade-in {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .scroll-fade-in.visible {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
export default ScrollFadeIn;
