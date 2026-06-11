import { MessageSquareMore } from "lucide-react";
import { motion } from "framer-motion";
import banner from "../../assets/imgs/banner-manjar.webp"

const HeroSection = () => {
  return (
    <section id="inicio">
      <header className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={banner}
            alt="Fondo principal de Dulcesita"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-r from-[#fff8f6]/80 via-[#fff8f6]/40 to-transparent" />
        </div>

        {/* Decorative Blob */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse z-0 pointer-events-none" />

        {/* Content */}
        <motion.div className="relative z-10 container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:p-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="max-w-xl pb-10">
            {/* Badge */}
            <span className="inline-block px-4 py-1 mb-6 rounded-full bg-white/80 text-[#6c2f00] text-sm tracking-[0.2em] font-semibold shadow-sm border border-orange-100">
              RECETA FAMILIAR
            </span>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl leading-tight font-serif text-[#2b1611] mb-6">
              El sabor que <br />
              <span className="whitespace-nowrap">
                <span className="text-[#934b19] italic">
                  endulza
                </span>{" "}
                <br className="block md:hidden" />
                <span>
                  tus momentos
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#000000] mb-10 leading-relaxed max-w-md">
              Somos Fabricantes de Manjar Blanco.<br />
              Atendemos pedidos al por mayor y menor, garantizando calidad en
              cada uno de nuestros productos.
            </p>

            {/* CTA */}
            <a
              href={`https://wa.me/${51970754616}?text=${encodeURIComponent("Hola, vengo de su sitio web. Quisiera obtener más información sobre sus productos.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6c2f00] text-white px-8 py-4 rounded-full text-base font-medium shadow-lg hover:bg-[#8b4513] hover:-translate-y-1 transition-all duration-300"
            >
              <span><MessageSquareMore /></span>
              Pedir por WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Bottom Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              //fill="#fff8f6" -> Color anterior
              fill="#f7cba2"
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.8,13.23,153.05,42.52,227.1,52.27,258.91,56.44,290.87,58.82,321.39,56.44Z"
            />
          </svg>
        </div>
      </header>
    </section>
  );
};

export default HeroSection;