import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
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
      className="w-full bg-white font-sans overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* --- SISI KIRI: GOOGLE MAPS --- */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-auto bg-gray-200 relative">
          <iframe
            title="Location Map"
            // Replace the refused URL with this embed format:
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6664223504334!2d106.824449!3d-6.175392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            className="absolute inset-0 w-full h-full border-0 grayscale contrast-125 opacity-80"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* --- SISI KANAN: INFORMASI KONTAK --- */}
        <div
          className={`w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <div className="max-w-md">
            <p className="font-handwriting text-red-700 text-2xl mb-2">
              Information
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
              Contact Us
            </h2>
            <p className="text-gray-500 mb-12 leading-relaxed">
              If you have any questions or problems simply use the following
              contact details.
            </p>

            {/* List Item Kontak */}
            <div className="space-y-10">
              {/* Alamat Kantor */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-red-800 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Main Office
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Jalan Raya Raden Saleh No. 6 Jakarta Pusat - 10430
                  </p>
                </div>
              </div>

              {/* Nomor Telepon */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-red-800 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Contact Number
                  </h4>
                  <p className="text-gray-500 text-sm font-medium">
                    +62 8519 1919 109
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-red-800 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Email
                  </h4>
                  <p className="text-gray-500 text-sm font-medium">
                    info@proaktifresto.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button (Sesuai Screenshot) */}
      <a
        href="https://wa.me/625191919109"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.888 11.888 0 005.685 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </section>
  );
}
