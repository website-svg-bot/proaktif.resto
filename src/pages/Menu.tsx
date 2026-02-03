import { useState, useRef, useEffect } from "react";
import { ArrowRight, ArrowLeft, Flame } from "lucide-react";

// --- Types ---
interface PromoItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  themeColor: string;
}

interface MenuItem {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string; // Menambahkan deskripsi untuk tampilan detail
}

// --- Data ---
const promoItems: PromoItem[] = [
  {
    id: 1,
    title: "Super Delicious",
    subtitle: "MENU",
    image: "public/promo1.png",
    badge: "50% OFF",
    themeColor: "bg-red-700",
  },
  {
    id: 2,
    title: "Super Delicious",
    subtitle: "FOOD MENU",
    image: "public/promo2.png",
    badge: "WEEKEND ONLY",
    themeColor: "bg-gray-900",
  },
  {
    id: 3,
    title: "Delicious",
    subtitle: "FRIED CHICKEN",
    image: "public/promo3.png",
    badge: "HOT DEAL",
    themeColor: "bg-orange-500",
  },
];

// Menambahkan data deskripsi dummy agar sesuai dengan screenshot
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Fried Chicken",
    image: "public/menu1.png",
    price: "$5.00",
    description:
      "Fried chicken is a popular dish made from chicken pieces that are seasoned, coated in a breading or batter, and then deep-fried or pan-fried to achieve a crispy, golden-brown exterior while keeping the meat tender and juicy on the inside. The chicken is typically marinated or seasoned with spices such as salt, pepper, garlic, and paprika to enhance flavor. It is then coated with a mixture of flour, cornmeal, and sometimes additional spices or herbs.",
  },
  {
    id: 2,
    name: "Chicken Package A",
    image: "public/menu2.png",
    price: "$12.00",
    description:
      "Our signature Chicken Package A brings you the perfect balance of carbohydrates and protein. Served with steaming hot rice, fresh coleslaw, and a large soda to wash it all down.",
  },
  {
    id: 3,
    name: "Chicken Package B",
    image: "public/menu3.png",
    price: "$15.00",
    description:
      "The family favorite. This package includes 5 pieces of our crispy fried chicken, 2 large sides of your choice, and 3 biscuits baked fresh daily.",
  },
  {
    id: 4,
    name: "Chicken Package C",
    image: "public/menu4.png",
    price: "$18.00",
    description:
      "The ultimate feast for the hungry ones. Includes spicy wings, original recipe drumsticks, and a variety of dipping sauces that will blow your mind.",
  },
  {
    id: 5,
    name: "Chicken Popcorn",
    image: "public/menu5.png",
    price: "$4.50",
    description:
      "Bite-sized pieces of tender breast meat, seasoned and fried to perfection. Perfect for snacking on the go.",
  },
  {
    id: 6,
    name: "Chicken Strips",
    image: "public/menu6.png",
    price: "$6.00",
    description:
      "Boneless tenders made from high-quality breast meat. Great for dipping in our signature BBQ or Honey Mustard sauce.",
  },
  {
    id: 7,
    name: "Chicken Wings",
    image: "public/menu7.png",
    price: "$8.00",
    description:
      "Crispy on the outside, juicy on the inside. Choose from Spicy, BBQ, or Garlic Parmesan glaze.",
  },
  {
    id: 8,
    name: "Chicken Sauce",
    image: "public/menu8.png",
    price: "$2.00",
    description:
      "Our secret recipe house sauce. Creamy, tangy, and a little bit spicy.",
  },
];

export default function Menu() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null); // State untuk item yang dipilih
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

  // Fungsi untuk tombol "Next Item"
  const handleNextItem = () => {
    if (!selectedItem) return;
    const currentIndex = menuItems.findIndex(
      (item) => item.id === selectedItem.id,
    );
    const nextIndex = (currentIndex + 1) % menuItems.length; // Loop kembali ke awal jika sudah habis
    setSelectedItem(menuItems[nextIndex]);

    // Scroll ke atas sedikit agar user sadar item berubah
    window.scrollTo({ top: sectionRef.current?.offsetTop, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 font-sans min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* --- LOGIC TAMPILAN --- */}
        {selectedItem ? (
          /* =========================================
             TAMPILAN DETAIL (Sesuai Screenshot 2)
             ========================================= */
          <div className="animate-fadeIn max-w-4xl mx-auto pt-8">
            {/* Tombol Back (Opsional UX Enhancement) */}
            <button
              onClick={() => setSelectedItem(null)}
              className="mb-6 flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} /> Back to Menu
            </button>

            {/* Gambar Besar */}
            <div className="w-full h-80 md:h-[500px] mb-10 overflow-hidden rounded-lg bg-gray-100">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten Text */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
                {selectedItem.name}
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed mb-12 text-justify">
                {selectedItem.description}
              </p>

              <hr className="border-gray-200 mb-8" />

              {/* Footer Navigasi Detail */}
              <div className="flex justify-end">
                <button
                  onClick={handleNextItem}
                  className="text-blue-500 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  Next Item <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* =========================================
             TAMPILAN UTAMA (Promo & Grid)
             ========================================= */
          <>
            {/* --- SECTION 1: PROMO BANNERS --- */}
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {promoItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {item.badge && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 animate-pulse z-10">
                      <Flame size={12} fill="black" />
                      {item.badge}
                    </div>
                  )}

                  <div className="absolute bottom-6 left-6 z-10">
                    <p className="font-handwriting text-yellow-400 text-xl mb-1">
                      {item.title}
                    </p>
                    <h3 className="text-3xl font-black text-white uppercase leading-none">
                      {item.subtitle}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* --- SECTION 2: MAIN MENU GRID --- */}
            <div
              className={`text-center transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="mb-12">
                <h4 className="font-handwriting text-red-600 text-2xl md:text-3xl mb-2">
                  Tasty and Tender
                </h4>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4 uppercase">
                  Our Menu
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                  Explore our wide variety of crispy delights.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-16">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col items-center"
                  >
                    <div className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* BUTTON VIEW DETAILS */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          onClick={() => setSelectedItem(item)}
                          className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg hover:bg-red-600 hover:text-white transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    </div>

                    <h3
                      onClick={() => setSelectedItem(item)}
                      className="text-gray-900 font-bold text-lg group-hover:text-red-600 transition-colors cursor-pointer"
                    >
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.price}</p>
                  </div>
                ))}
              </div>

              <button className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-red-600 transition-all inline-flex items-center gap-2">
                SEE ALL MENU
                <ArrowRight size={16} />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
