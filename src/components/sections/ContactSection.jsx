import { Clock, MapPin, Phone } from "lucide-react";
import map from "../../assets/imgs/mappe.webp"

const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="bg-[#ffe9e4] relative py-32 md:py-40"
    >
      
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-7.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff8f6"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.8,13.23,153.05,42.52,227.1,52.27,258.91,56.44,290.87,58.82,321.39,56.44Z"
          />
        </svg>
      </div>
      {/* Top Divider Invertido */}
      <div className="absolute top-7.5 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-4 scale-y-[-1]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff8f6"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.8,13.23,153.05,42.52,227.1,52.27,258.91,56.44,290.87,58.82,321.39,56.44Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10 pt-8">
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
                    className="block text-2xl text-[#934b19] hover:text-[#6c2f00] transition-colors duration-300 border-b-2 border-[#dac2b6] pb-3"
                    >
                    dulcesitaelaboraciones@hotmail.com
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
                    className="block text-2xl text-[#934b19] hover:text-[#6c2f00] transition-colors duration-300 border-b-2 border-[#dac2b6] pb-3"
                    >
                    Manjar Blanco Dulcesita
                    </a>
                </div>                      
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center items-center">
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
                <img src={map} alt="Mapa peru" className="h-40 mt-6" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;