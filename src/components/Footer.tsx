import { Facebook, Youtube, Instagram, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-16 pb-8 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter">
                web<span className="text-orange-500">ekspor</span>
              </span>
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-3 border-t-2 border-white rotate-12"></div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed text-justify">
              Our Company is made up of a group of highly skilled and
              professionals who pays a lot of attention to small details. We're
              working to build a future of shared success.
            </p>
          </div>

          {/* Kolom 2: Contact Us */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold tracking-tight">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="leading-relaxed">
                Jl. Indonesia Raya, Sudirman, Jakarta Selatan, DKI Jakarta,
                Indonesia, 10150
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:mail@example.com"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-500">✉</span> mail@example.com
                </a>
                <a
                  href="tel:+9910123456789"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-500">📞</span> +991-0123456789
                </a>
              </div>
            </div>
          </div>

          {/* Kolom 3: Working Hours */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold tracking-tight">Working Hours</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400 font-bold">Mon - Fri</span>
                <span className="text-gray-400">9am - 5pm</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400 font-bold">Sat & Sun</span>
                <span className="text-red-500 font-medium italic">
                  We are closed!
                </span>
              </div>
            </div>
          </div>

          {/* Kolom 4: Social Media */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold tracking-tight">Social Media</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Music2 size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer: Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs tracking-widest">
            Copyright @ 2024 Webekspor. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
