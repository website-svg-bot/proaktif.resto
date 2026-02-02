import { useEffect, useState, useCallback, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  Phone,
  X,
  Menu,
  Instagram,
  Youtube,
  Facebook,
  Mail,
} from "lucide-react";

// --- DATA CONFIG ---
const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Blogs", to: "/blogs" },
  { label: "Outlets", to: "/outlets" },
  { label: "Contact", to: "/contact" },
];

const PHONE_NUMBER = "+62 851 9191 9109";
const EMAIL_ADDRESS = "info@proaktifresto.com";
const SCROLL_THRESHOLD = 50;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // --- LOGIKA SCROLL ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- LOGIKA CLICK OUTSIDE ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // --- LOGIKA RESIZE ---
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      {/* --- TOP BAR (Desktop Only) --- */}
      <div
        className={`hidden md:block fixed top-0 left-0 right-0 z-[60] bg-gray-900 text-gray-300 text-xs py-2 px-4 transition-transform duration-300 ${scrolled ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{EMAIL_ADDRESS}</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/"
              className="hover:text-yellow-400"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/?locale=id_ID"
              className="hover:text-yellow-400"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="hover:text-yellow-400"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-gray-100 md:top-0"
            : "bg-transparent py-4 md:py-5 border-transparent md:top-[32px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* --- LOGO AREA (SPASI DISESUAIKAN) --- */}
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 z-10 group outline-none focus:outline-none"
          >
            {/* GAMBAR LOGO */}
            <img
              src="/logo.png"
              alt="Proaktif Resto Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* TEKS LOGO (Spacing Difinisi Ulang) */}
            <div className="flex flex-col leading-none select-none">
              {/* PROAKTIF: Diperkecil spasi jadi 0.1em agar lebih padat */}
              <span
                className={`
                  text-xl md:text-2xl font-black uppercase tracking-[0.1em] transition-colors duration-300
                  ${scrolled ? "text-yellow-400" : "text-black drop-shadow-md"}
                `}
              >
                PROAKTIF
              </span>

              {/* RESTO: Spasi disesuaikan jadi 0.25em agar elegan tapi tidak terlalu renggang */}
              <span
                className={`
                  text-sm md:text-base font-bold uppercase tracking-[0.40em] -mt-2.5 transition-colors duration-300
                  ${scrolled ? "text-yellow-900 drop-shadow-sm" : "text-yellow-400 drop-shadow-lg"}
                `}
              >
                RESTO
              </span>
            </div>
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                className={({ isActive }) =>
                  `relative text-sm font-bold uppercase tracking-widest py-2 transition-colors group ${
                    isActive
                      ? "text-yellow-500"
                      : "text-yellow-400 hover:text-yellow-200"
                  }`
                }
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[2px] bg-yellow-500 transition-all duration-300 rounded-full w-0 group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-black transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden relative z-50 p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors ${
                mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE DRAWER --- */}
      <div
        className={`fixed top-0 right-0 h-full z-[70] lg:hidden transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          ref={menuRef}
          className="h-full w-72 sm:w-80 bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col border-l border-gray-100"
        >
          <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white">
            <span className="font-black text-xl tracking-widest text-gray-900">
              Menu
            </span>
            <button
              onClick={closeMobileMenu}
              className="p-2 text-gray-500 hover:text-red-500 hover:bg-gray-50 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block text-base font-bold uppercase tracking-wide py-4 px-5 rounded-xl transition-all ${
                    isActive
                      ? "bg-yellow-50 text-yellow-600 shadow-sm"
                      : "text-gray-900 hover:bg-gray-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="p-6 border-t border-gray-100 bg-white">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-3 w-full py-4 bg-yellow-500 text-gray-900 font-bold rounded-2xl hover:bg-yellow-400 transition-all shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </a>
            <div className="flex justify-center gap-8 mt-6">
              <a href="#" className="text-gray-400 hover:text-gray-900">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
