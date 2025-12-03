'use client';

import { useEffect, useRef, useState } from 'react';

interface Exhibition {
  year: string;
  title?: string;
  venue: string;
  location: string;
}

interface TimelineProps {
  exhibitions: Exhibition[];
  type: 'individual' | 'collective';
  language: string;
}

export default function ExhibitionsTimeline({ exhibitions, type, language }: TimelineProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemsRef.current.map((item, index) => {
      if (!item) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.2, rootMargin: '50px' }
      );

      observer.observe(item);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [exhibitions]);

  const isIndividual = type === 'individual';

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-900 via-neutral-400 to-neutral-200" />

      <div className="space-y-8 md:space-y-12">
        {exhibitions.map((exhibition, index) => {
          const isVisible = visibleItems.has(index);
          const delay = (index % 5) * 100; // Stagger animation

          return (
            <div
              key={index}
              ref={(el) => { itemsRef.current[index] = el }}
              className={`relative pl-20 md:pl-28 transition-all duration-700 ease-out ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: `${delay}ms` }}
            >
              {/* Year badge */}
              <div
                className={`absolute left-0 w-16 md:w-20 h-16 md:h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ${
                  isIndividual
                    ? 'bg-gradient-to-br from-neutral-900 to-neutral-700 text-white'
                    : 'bg-gradient-to-br from-white to-neutral-50 border-4 border-neutral-900 text-neutral-900'
                } ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'}`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <span className="font-bold text-lg md:text-xl">{exhibition.year}</span>
              </div>

              {/* Content card */}
              <div
                className={`group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border-l-4 ${
                  isIndividual ? 'border-neutral-900 hover:border-neutral-700' : 'border-neutral-400 hover:border-neutral-600'
                } transform ${isVisible ? 'hover:-translate-y-2 hover:scale-[1.02]' : ''}`}
              >
                {exhibition.title && (
                  <div className="flex items-start mb-3">
                    <svg className="w-6 h-6 text-neutral-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <p className="text-lg md:text-xl font-serif text-neutral-900 italic">
                      {exhibition.title}
                    </p>
                  </div>
                )}
                <div className="flex items-start mb-2">
                  <svg className="w-5 h-5 text-neutral-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-base md:text-lg text-neutral-800 font-medium">
                    {exhibition.venue}
                  </p>
                </div>
                <div className="flex items-center text-sm md:text-base text-neutral-600">
                  <svg
                    className="w-5 h-5 mr-3 text-neutral-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {exhibition.location}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
