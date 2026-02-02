import { useState, useEffect, useRef } from "react";

interface OutletLocation {
  id: number;
  name: string;
  subRegion: string;
  address: string;
  email: string;
  phone: string;
  image: string;
}

const outletLocations: OutletLocation[] = [
  {
    id: 1,
    name: "Outlet Jakarta",
    subRegion: "Jakarta Barat",
    address:
      "Jl. Indonesia Raya, Sudirman, Jakarta Selatan, DKI Jakarta, Indonesia, 10150",
    email: "cs@proaktifresto.com",
    phone: "(+62)  851 9191 9109",
    image: "public/outlet-jakarta.jpg", // Sesuaikan path asset Anda
  },
  {
    id: 2,
    name: "Outlet Bekasi",
    subRegion: "Kota Bekasi",
    address:
      "Jl. Boulevard Ahmad Yani No.Blok M Kel.Marga Mulya, Kec.Bekasi Utara, Kota Bks, Jawa Barat 17142",
    email: "cs@proaktifresto.com",
    phone: "(+62) 851 9191 9109",
    image: "public/outlet-bintaro.jpg",
  },
  {
    id: 3,
    name: "Outlet Depok",
    subRegion: "Depok",
    address:
      "Jl. Indonesia Raya, Sudirman, Jakarta Selatan, DKI Jakarta, Indonesia, 10150",
    email: "cs@proaktifresto.com",
    phone: "(+62) 851 9191 9109",
    image: "public/outlet-depok.jpg",
  },
  {
    id: 4,
    name: "Outlet BSD",
    subRegion: "Kota Tangerang",
    address:
      "Jl. Indonesia Raya, Sudirman, Jakarta Selatan, DKI Jakarta, Indonesia, 10150",
    email: "cs@proaktifresto.com",
    phone: "(+62) 851 9191 9109",
    image: "public/outlet-bsd.jpg",
  },
];

export default function Outlets() {
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
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-24 font-sans"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-handwriting text-red-700 text-xl md:text-2xl mb-2">
            STORE Location
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase">
            Our Outlets
          </h2>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outletLocations.map((outlet, index) => (
            <div
              key={outlet.id}
              className={`flex flex-col transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Outlet Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-sm mb-6 bg-gray-100 group">
                <img
                  src={outlet.image}
                  alt={outlet.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay link icon placeholder like in reference */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-white rotate-45 translate-x-[-1px] translate-y-[1px]"></div>
                  </div>
                </div>
              </div>

              {/* Outlet Info */}
              <div className="space-y-1 text-left">
                <h3 className="text-xl font-bold text-gray-900">
                  {outlet.name}
                </h3>
                <p className="text-gray-500 font-medium text-sm mb-3">
                  {outlet.subRegion}
                </p>

                <div className="pt-2 space-y-3">
                  <p className="text-gray-400 text-xs leading-relaxed max-w-[250px]">
                    {outlet.address}
                  </p>

                  <div className="text-[11px] text-gray-400 space-y-1">
                    <p>Email: {outlet.email}</p>
                    <p>Phone: {outlet.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
