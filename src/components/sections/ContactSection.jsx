import { Clock, MapPin, Phone, Mail,  } from "lucide-react";
import map from "../../assets/imgs/mappe.webp"
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import fondo from "../../assets/imgs/fondo.webp"

const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="bg-[#ffcea0] relative py-22 md:py-40"
      style={{
              backgroundImage: `url(${fondo})`,
              backgroundRepeat: "repeat",
              backgroundSize: "1080px", /* Controla qué tan grandes o pequeñas se ven las figuras */
            }}
    >
      {/* Top Divider Invertido */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-4 scale-y-[-1]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#d89575"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.8,13.23,153.05,42.52,227.1,52.27,258.91,56.44,290.87,58.82,321.39,56.44Z"
          />
        </svg>
      </div>

      <motion.div className="container mx-auto px-4 lg:px-16 max-w-7xl relative z-10 pt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="bg-[#fff8f6] p-8 lg:p-12 rounded-4xl shadow-[0_10px_30px_rgba(139,69,19,0.08)]">
            <h2 className="text-4xl md:text-4xl font-serif text-[#6c2f00] mb-3">
              Contáctanos
            </h2>

            <p className="text-[#54433a]  text-lg">
              ¿Tienes pedidos especiales, eventos o dudas? Escríbenos, visita nuestras redes o contáctanos por WhatsApp.
            </p>
            {/* Email */}
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-[#2b1611] mb-4">
                    Nuestro Correo Electrónico
                  </h3>

                  <a
                    href="mailto:dulcesitaelaboraciones@hotmail.com"
                    className="
                      flex items-center gap-3
                      text-base sm:text-lg md:text-xl
                      text-[#934b19]
                      hover:text-[#6c2f00]
                      border-b-2 border-[#dac2b6]
                      pb-3
                      break-all
                      hover:scale-105 transition-all duration-300
                    "
                  >
                    <span>dulcesitaelaboraciones@hotmail.com</span>
                    <Mail size={22} />
                  </a>
                </div>
                      
              {/* Facebook */}
                <div className="mt-10">
                    <h3 className="text-lg font-semibold text-[#2b1611] mb-4">
                    Nuestro Facebook
                    </h3>

                    <a
                    href="https://www.facebook.com/people/Manjar-Blanco-Dulcesita/100086346011457/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-base sm:text-lg md:text-xl text-[#934b19] hover:text-[#6c2f00]  border-b-2 border-[#dac2b6] pb-3 hover:scale-105 transition-all duration-300"
                    >
                      Manjar Blanco Dulcesita
                      <FaFacebookF size={20} />
                    </a>
                </div>                      
          </div>

          {/* Contact Info */}
          <motion.div className="flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="mb-7">
              <h3 className="text-3xl font-serif text-[#2b1611] mb-8">
                Sobre Nosotros
              </h3>

              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex items-start gap-4">
                  <div className="text-[#934b19] text-2xl"><MapPin /></div>

                  <div>
                    <p className="font-semibold text-[#2b1611]">
                      San Pedro, Carabayllo, Perú
                    </p>

                    <p className="text-[#54433a]">
                      Lima, Perú
                    </p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start gap-4">
                  <div className="text-[#934b19] text-2xl"><Clock /></div>

                  <div>
                    <p className="font-semibold text-[#2b1611]">
                      Horario de Atención
                    </p>

                    <p className="text-[#54433a]">
                      Lun - Sáb: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="text-[#934b19] text-2xl"><Phone /></div>

                  <div>
                    <p className="font-semibold text-[#2b1611]">
                      Teléfono / WhatsApp
                    </p>

                    <p className="text-[#54433a]">
                      +51 970 754 616
                    </p>
                  </div>
                </div>
              </div>
            </div>

              {/* Map */}
              <div className="text-center text-[#54433a]">
                  <p>Realizamos envíos a nivel nacional</p>
                  <p>Escríbenos para más información.</p>
              </div>
              <div>
                  <img src={map} alt="Mapa peru" draggable={false} className="h-40 mt-6" />
              </div>
          </motion.div>
        </div>
        
      </motion.div>
    </section>
  );
};

export default ContactSection;