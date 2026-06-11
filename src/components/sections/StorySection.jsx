import Almacen1 from "../../assets/imgs/Almacen1.webp"
import Almacen2 from "../../assets/imgs/Almacen2.webp"
import Almacen1o from "../../assets/imgs/Almacen1o.webp"
import Almacen2o from "../../assets/imgs/Almacen2o.webp"
import Maquinaria from "../../assets/imgs/Maquinaria.webp"
import Maquinariao from "../../assets/imgs/Maquinariao.webp"
import Oficinas1 from "../../assets/imgs/Oficinas1.webp"
import Oficinas2 from "../../assets/imgs/Oficinas2.webp"

import { motion } from "framer-motion";

const sections = [
  {
    title: "NUESTRAS OFICINAS",
    subtitle: "Organización, compromiso y eficiencia",
    image: Oficinas1,
    description:
      "Contamos con espacios modernos y funcionales que nos permiten brindar un servicio eficiente, garantizando la mejor atención a nuestros clientes y el óptimo desarrollo de nuestro equipo.",
  },
  {
    title: "OFICINAS QUE IMPULSAN ORGANIZACIÓN Y PRODUCTIVIDAD",
    subtitle: "ORDEN | LIMPIEZA | CONTROL",
    image: Oficinas2,
    description:
      "Entornos de trabajo ordenados y eficientes que optimizan el desempeño del equipo y la atención al cliente.",
  },
  {
    title: "ALMACENAJE SEGURO, CALIDAD GARANTIZADA",
    subtitle: "ORDEN | LIMPIEZA | CONTROL",
    image: Almacen1o,
    hoverImage: Almacen1,
    description:
      "Mantenemos un control riguroso de los insumos secos para asegurar la calidad, frescura y trazabilidad en cada proceso.",
  },
  {
    title: "ALMACÉN ORGANIZADO, PROCESOS EFICIENTES",
    subtitle: "ORDEN | LIMPIEZA | CONTROL",
    image: Almacen2o,
    hoverImage: Almacen2,
    description:
      "Espacios diseñados para asegurar el almacenamiento adecuado de materias primas e insumos, optimizando la trazabilidad y calidad en cada etapa.",
  },
  {
    title: "PRODUCCIÓN EFICIENTE",
    subtitle: "ORDEN | LIMPIEZA | CONTROL",
    image: Maquinariao,
    hoverImage: Maquinaria,
    description:
      "Contamos con sistemas de alta eficiencia para el procesamiento óptimo de la materia prima, garantizando un control térmico preciso que asegura la consistencia y sabor de nuestro manjar blanco.",
  },
];

const StorySection = () => {
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
          <h2 className="relative inline-block text-4xl md:text-6xl font-serif text-[#582a07] mb-8">
            Sobre Nosotros

            <span className="absolute -bottom-3 left-0 w-3/4 h-1 bg-[#eeccb5] rounded-full opacity-50" />
          </h2>

          <h3 className="text-xl italic text-[#2b1611] mb-6 font-serif mt-4">
            Manjar Blanco Dulcesita es el motor industrial que impulsa el mercado del dulce premium
          </h3>

          {/**parrafos */}
          <p className="hidden md:block text-lg leading-relaxed text-[#201610] m-5">
            Nos especializamos en la fabricación a gran escala de manjar blanco de calidad superior,
            combinando tecnología de vanguardia con el dinamismo que exige el comercio actual.
            Diseñamos un producto de alta rotación, rendimiento óptimo y estabilidad garantizada,
            ideal para optimizar los márgenes de ganancia de nuestros distribuidores y clientes corporativos.
            Entendemos el ritmo acelerado del negocio urbano, por lo que respondemos con una cadena de
            suministro ágil, formal y estrictamente certificada.
          </p>

          <p className="hidden md:block text-lg leading-relaxed text-[#201610]">
            Elegir Manjar Blanco Dulcesita es asegurar un estándar de sabor impecable y un socio estratégico
            enfocado en multiplicar sus resultados de ventas.
          </p>
        </motion.div>

        {/* Storytelling */}
        <div className="space-y-20 md:space-y-32">
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
                className="group relative overflow-hidden rounded-4xl shadow-2xl floating"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  draggable={false}
                  className="
                    w-full
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
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-700
                    "
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