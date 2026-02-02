import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const slides = [
  {
    image: hero1,
    label: "WELCOME TO PROAKTIF RESTO",
    title1: "THE BEST",
    title2: "FRIED CHICKEN",
    desc: "Premium fried chicken with crispy texture and rich flavor. Freshly cooked every single day.",
  },
  {
    image: hero2,
    label: "CRISPY & JUICY",
    title1: "QUALITY",
    title2: "YOU CAN TASTE",
    desc: "Using selected ingredients and secret recipes to deliver perfection.",
  },
  {
    image: hero3,
    label: "AVAILABLE NATIONWIDE",
    title1: "HUNDREDS OF",
    title2: "OUTLETS",
    desc: "Serving customers across Indonesia with consistent quality and taste.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </AnimatePresence>

      {/* GRADIENT OVERLAY (TEMPLATE179 STYLE) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl text-white">
            {/* LABEL */}
            <motion.p
              key={`label-${current}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs tracking-[0.35em] uppercase text-yellow-400 mb-6"
            >
              {slides[current].label}
            </motion.p>

            {/* TITLE */}
            <motion.h1
              key={`title-${current}`}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight"
            >
              {slides[current].title1}
              <br />
              <span className="text-yellow-400">{slides[current].title2}</span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              key={`desc-${current}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-6 text-gray-200 leading-relaxed"
            >
              {slides[current].desc}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="mt-10 flex gap-5"
            >
              <Link
                to="/menu"
                className="px-10 py-4 bg-yellow-400 text-black font-bold rounded-full
                           hover:bg-yellow-500 transition"
              >
                View Menu
              </Link>

              <Link
                to="/contact"
                className="px-10 py-4 border border-white rounded-full font-bold
                           hover:bg-white hover:text-black transition"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SLIDER BAR INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-500 ${
              i === current ? "w-14 bg-yellow-400" : "w-8 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
