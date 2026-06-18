import almacenenvasado from "../../assets/imgs/almacenenvasado.webp"
import almacenlogistica from "../../assets/imgs/almacenlogistica.webp"
import colaboradores from "../../assets/imgs/colaboradores.webp"
import equipo from "../../assets/imgs/equipo.webp"
import gerenciao from "../../assets/imgs/gerenciao.webp"
import oficinas from "../../assets/imgs/oficinas.webp"
import prueba from "../../assets/imgs/prueba2.webp"

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

//movil para hover-click


const sections = [
  {
    title: "EL CORAZÓN DE DULCESITA",
    subtitle: "Liderazgo, visión y compromiso",
    image: gerenciao,
    hoverImage: prueba,
    description:
      "Nuestra gerente y subgerente lideran cada proceso con dedicación y compromiso, impulsando el crecimiento de Dulcesita y garantizando que la calidad, la tradición y la satisfacción de nuestros clientes estén siempre en el centro de nuestras decisiones.",
  },
  {
    title: "ÁREA ADMINISTRATIVA Y LABORATORIO",
    subtitle: "Planificación, organización y gestión",
    image: oficinas,
    description:
      "Desde esta área coordinamos las operaciones administrativas y comerciales, asegurando una gestión eficiente que respalda el desarrollo y la continuidad de cada uno de nuestros procesos.",
  },
  {
    title: "ÁREA DE ALMACÉN Y LOGÍSTICA",
    subtitle: "Control, abastecimiento y distribución",
    image: almacenlogistica,
    description:
      "Gestionamos el almacenamiento y abastecimiento de insumos con estrictos controles de calidad, garantizando la disponibilidad oportuna de los recursos necesarios para nuestra producción.",
  },
  {
    title: "ÁREA DE ALMACÉN Y ENVASADO",
    subtitle: "Conservación, seguridad y presentación",
    image: almacenenvasado,
    description:
      "Nos encargamos del correcto almacenamiento y envasado de nuestros productos, preservando su calidad, frescura y presentación para que lleguen en óptimas condiciones a cada cliente.",
  },
  {
    title: "ÁREA DE PRODUCCIÓN",
    subtitle: "Tradición, calidad y excelencia",
    image: colaboradores,
    description:
      "Aquí elaboramos nuestro manjar blanco siguiendo procesos cuidadosamente supervisados, combinando experiencia, dedicación y altos estándares de calidad para ofrecer un producto excepcional.",
  },
];

const StorySection = () => {

  const [activeImage, setActiveImage] = useState(null);
  //intervalo para moviles
  useEffect(() => {
  if (window.innerWidth >= 1024) return;

  const interval = setInterval(() => {
    setActiveImage((prev) => (prev === 0 ? null : 0));
  }, 4000);

  return () => clearInterval(interval);
}, []);

  return (
    <section
      id="historia"
      className="bg-[#d89575] relative py-32 overflow-hidden"
      
    >
      {/* Divider superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-5 scale-y-[-1]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#f7cba2"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.8,13.23,153.05,42.52,227.1,52.27C258.91,56.44,290.87,58.82,321.39,56.44Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Introducción */}
        <motion.div className="max-w-4xl mx-auto text-center mb-18"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="relative inline-block text-4xl md:text-6xl font-serif text-[#582a07] mb-15">
            Sobre Nosotros

            <span className="absolute -bottom-3 left-0 w-3/4 h-1 bg-[#eeccb5] rounded-full opacity-50" />
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-4xl shadow-2xl floating"
          >
            <img src={equipo}
              draggable={false}
            className="
                    w-full
                    aspect-7/5
                    object-cover
                    transition-all
                    duration-700
                    
                  "
            >
          </img>
          </motion.div>

          {/**parrafos */}
          <p className="hidden md:block text-lg leading-relaxed text-[#201610] m-5 pt-3">
            Nos especializamos en la fabricación a gran escala de manjar blanco de calidad superior,
            combinando tecnología de vanguardia con el dinamismo que exige el comercio actual.
            Diseñamos un producto de alta rotación, rendimiento óptimo y estabilidad garantizada,
            ideal para optimizar los márgenes de ganancia de nuestros distribuidores y clientes corporativos.
            Entendemos el ritmo acelerado del negocio urbano, por lo que respondemos con una cadena de
            suministro ágil, formal y estrictamente certificada.
          </p>

          <p className="text-md italic md:text-lg leading-relaxed text-[#201610] pt-4">
            Elegir Manjar Blanco Dulcesita es asegurar un estándar de sabor impecable y un socio estratégico
            enfocado en multiplicar sus resultados de ventas.
          </p>
        </motion.div>

        {/* Storytelling */}
        <div className="space-y-15 md:space-y-24">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`
                grid lg:grid-cols-[50%_50%] gap-12 lg:gap-20 items-center
                ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >
              {/* Imagen */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="group relative overflow-hidden rounded-4xl shadow-2xl floating cursor-pointer"
                onClick={() =>
                  section.hoverImage &&
                  setActiveImage(
                    activeImage === index ? null : index
                  )
                }
              >
                <img
                  src={section.image}
                  alt={section.title}
                  draggable={false}
                  className="
                    
                    h-full
                    aspect-7/5
                    object-cover
                    transition-all
                    duration-700
                  "
                />

                {section.hoverImage && (
                  <img
                    src={section.hoverImage}
                    alt={section.title}
                    draggable={false}
                    className={`
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      transition-opacity
                      duration-700
                      ${
                        activeImage === index
                          ? "opacity-100"
                          : "opacity-0 md:group-hover:opacity-100"
                      }
                    `}
                  />
                )}
              </motion.div>

              {/* Texto */}
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                  }}
                  className="
                    text-2xl
                    md:text-5xl
                    font-serif
                    text-[#582a07]
                    mb-4
                    leading-tight
                  "
                >
                  {section.title}
                </motion.h3>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                  }}
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-[#77482f]
                    text-md
                    font-semibold
                    hidden md:block
                    mb-3
                  "
                >
                  {section.subtitle}
                </motion.span>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.45,
                  }}
                  className="
                    text-lg
                    leading-relaxed
                    text-[#201610]
                  "
                >
                  {section.description}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default StorySection;