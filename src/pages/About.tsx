import { useState, useEffect, useRef } from "react";

// --- Data Statistik ---
const stats = [
  { label: "Menu", value: "32+" },
  { label: "Outlets", value: "23" },
  { label: "Years", value: "14" },
  { label: "Employees", value: "74+" },
];

// --- Data Chef ---
const chefs = [
  { name: "Ridwan Setiawan", role: "Founder", image: "/src/assets/chef1.jpg" },
  {
    name: "Sandra Septiana",
    role: "Executive chef",
    image: "public/chef-2.jpg",
  },
  { name: "Rita Mutiara", role: "Chef", image: "/src/assets/chef-3.jpg" },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white font-sans">
      {/* --- SECTION 1: ABOUT COMPANY --- */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Images with overlapping effect */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">
            <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-xl z-10">
              <img
                src="public/about-img-1.jpg"
                alt="Fried Chicken with fries"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-lg overflow-hidden shadow-2xl z-20 border-8 border-white">
              <img
                src="public/about-img-2.jpg"
                alt="Chicken in a bowl"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <p className="font-handwriting text-red-700 text-2xl mb-2">
              About Company
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              The World Class Tasty Chicken With Crispy And Irresistible Flavors
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Tasty Fried Chicken is a culinary masterpiece that tantalizes the
              taste buds with its irresistible flavors and textures. The cooking
              process also contributes to the deliciousness of fried chicken.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              When properly executed, the chicken is fried to perfection,
              resulting in a crispy and golden exterior that crackles with every
              bite. It brings people together, evoking feelings of comfort,
              nostalgia, and joy.
            </p>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: STATISTICS (Dark Overlay) --- */}
      <div
        className="relative w-full py-24 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/src/assets/stats-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <h3 className="text-5xl md:text-6xl font-black mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-300 font-medium uppercase tracking-widest text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SECTION 3: OUR CHEF --- */}
      <div className="container mx-auto px-4 py-24 text-center">
        <p className="font-handwriting text-red-700 text-2xl mb-2">
          Professionals
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase mb-16 tracking-tight">
          Our Chef
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className={`flex flex-col items-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-full aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 mb-6">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h4 className="text-xl font-bold text-red-800 mb-1">
                {chef.name}
              </h4>
              <p className="text-gray-500 text-sm font-medium">{chef.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
