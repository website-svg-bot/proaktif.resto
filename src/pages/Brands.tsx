import { useEffect, useRef, useState } from 'react';

// Partner brand names for display
const partners = [
  'GOJEK',
  'GRAB',
  'SHOPEE FOOD',
  'TRAVELOKA EATS',
  'MAXIM',
  'AIRASIA FOOD',
  'FOODPANDA',
  'DELIVEROO',
];

export default function Brands() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section
      id="brands"
      ref={sectionRef}
      className="py-16 md:py-24 bg-light-gray w-full overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 mb-12">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label">OUR PARTNERS</p>
          <h2 className="section-title">
            Trusted By <span className="text-primary">Industry Leaders</span>
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-light-gray to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-light-gray to-transparent z-10 pointer-events-none" />

        {/* First Row - Left to Right */}
        <div
          className={`flex gap-12 mb-8 transition-opacity duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div
            className={`flex gap-12 ${isPaused ? '' : 'animate-marquee'}`}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 px-8 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <span className="font-display text-xl md:text-2xl text-medium-gray group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div
          className={`flex gap-12 transition-opacity duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div
            className={`flex gap-12 ${isPaused ? '' : 'animate-marquee-reverse'}`}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {[...duplicatedPartners].reverse().map((partner, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 px-8 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <span className="font-display text-xl md:text-2xl text-medium-gray group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery Partners Note */}
      <div
        className={`text-center mt-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '500ms' }}
      >
        <p className="text-medium-gray text-sm">
          Available on all major food delivery platforms
        </p>
      </div>
    </section>
  );
}
