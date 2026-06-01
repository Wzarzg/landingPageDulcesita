import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
};

// ─── Componente base reutilizable ───────────────────────────────────────────
const CarouselRow = ({ products }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };

  // ── nuevo: maneja el fin del drag ──
  const handleDragEnd = (_, info) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  };

  const mainProduct = products[current];
  const nextProduct = products[(current + 1) % products.length];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

        {/* Main Card */}
        <div className="md:col-span-8 relative overflow-hidden rounded-[2rem] min-h-[420px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={mainProduct.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              // ── drag solo en móvil ──
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(139,69,19,0.08)] hover:shadow-[0_20px_40px_rgba(139,69,19,0.12)] transition-shadow duration-500 border border-[#dac2b6]/20 flex flex-col md:flex-row h-full"
            >
              <div className="w-full md:w-1/2 h-72 md:h-auto overflow-hidden">
                <img
                  src={mainProduct.image}
                  alt={mainProduct.title}
                  draggable="false"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-[#fff8f6]">
                <div className="flex gap-2 mb-4">
                  {mainProduct.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#ffe9e4] text-[#9a4600] text-xs tracking-wider rounded-full font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-serif text-[#2b1611] mb-4">
                  {mainProduct.title}
                </h3>
                <p className="text-[#54433a] leading-relaxed mb-8 flex-grow">
                  {mainProduct.description}
                </p>
                <button className="self-start px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 border-[#6c2f00] text-[#6c2f00] hover:bg-[#6c2f00] hover:text-white">
                  Ver detalles
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Preview Card — solo desktop */}
        <div className="hidden md:block md:col-span-4 relative overflow-hidden rounded-[2rem]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={nextProduct.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut", delay: 0.05 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(139,69,19,0.08)] hover:shadow-[0_20px_40px_rgba(139,69,19,0.12)] transition-shadow duration-500 border border-[#dac2b6]/20 flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={nextProduct.image}
                  alt={nextProduct.title}
                  draggable="false"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-[#fff8f6]">
                <div className="flex gap-2 mb-4">
                  {nextProduct.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#ffe9e4] text-[#9a4600] text-xs tracking-wider rounded-full font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-serif text-[#2b1611] mb-3">
                  {nextProduct.title}
                </h3>
                <p className="text-[#54433a] leading-relaxed mb-8 flex-grow line-clamp-3">
                  {nextProduct.description}
                </p>
                <button className="w-full py-3 rounded-full font-medium transition-all duration-300 border border-[#6c2f00] text-[#6c2f00] hover:bg-[#ffdbc9]">
                  Ver detalles
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border-2 border-[#6c2f00] text-[#6c2f00] flex items-center justify-center hover:bg-[#6c2f00] hover:text-white transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-6 h-2 bg-[#6c2f00]" : "w-2 h-2 bg-[#dac2b6]"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full border-2 border-[#6c2f00] text-[#6c2f00] flex items-center justify-center hover:bg-[#6c2f00] hover:text-white transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};


// ─── SECCIÓN 1: Clásicos ────────────────────────────────────────────────────
const clasicos = [
  {
    id: 1,
    title: "Manjar Clásico",
    tags: ["TRADICIONAL", "250g"],
    description:
      "Nuestra receta original. Una textura suave y sedosa, ideal para untar en panes artesanales, rellenar alfajores o simplemente disfrutar directamente del frasco.",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Manjar con Nueces",
    tags: ["PREMIUM", "500g"],
    description:
      "El equilibrio perfecto. La dulzura de nuestro manjar clásico contrastada con el toque crujiente de nueces seleccionadas.",
    image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Manjar de Lúcuma",
    tags: ["ESPECIAL", "250g"],
    description:
      "El sabor único de la lúcuma peruana fusionado con nuestra receta tradicional. Una experiencia dulce y frutal inigualable.",
    image:
      "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=1974&auto=format&fit=crop",
  },
];

export const SeccionClasicos = () => (
  <section className="bg-[#fff8f6] relative overflow-hidden py-20">
    <div className="container mx-auto px-6 lg:px-16 max-w-7xl">

      {/* Encabezado */}
      <div className="mb-12">
        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-[#ffe9e4] text-[#9a4600] text-sm tracking-widest font-semibold">
          CLÁSICOS
        </span>
        <h3 className="text-3xl md:text-4xl font-serif text-[#6c2f00]">
          Los de siempre
        </h3>
      </div>

      <CarouselRow products={clasicos} />
    </div>
  </section>
);


// ─── SECCIÓN 2: Sabores especiales ──────────────────────────────────────────
const especiales = [
  {
    id: 4,
    title: "Manjar de Chocolate",
    tags: ["ESPECIAL", "250g"],
    description:
      "La fusión perfecta entre el chocolate oscuro y nuestro manjar tradicional. Intenso, cremoso y absolutamente irresistible.",
    image:
      "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Manjar de Fresa",
    tags: ["FRUTAL", "250g"],
    description:
      "La frescura natural de la fresa combinada con la dulzura del manjar. Un contraste delicioso en cada cucharada.",
    image:
      "https://images.unsplash.com/photo-1587394190277-7f2a1c1f6d99?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Manjar de Vainilla",
    tags: ["CLÁSICO", "250g"],
    description:
      "El aroma inconfundible de la vainilla natural realza nuestra receta base. Suave, aromático y perfecto para repostería.",
    image:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=1974&auto=format&fit=crop",
  },
];

export const SeccionEspeciales = () => (
  <section className="bg-[#fff8f6] relative overflow-hidden py-20">
    <div className="absolute left-0 top-20 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] -z-10 pointer-events-none" />
    <div className="container mx-auto px-6 lg:px-16 max-w-7xl">

      {/* Encabezado */}
      <div className="mb-12">
        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-[#ffe9e4] text-[#9a4600] text-sm tracking-widest font-semibold">
          SABORES ESPECIALES
        </span>
        <h3 className="text-3xl md:text-4xl font-serif text-[#6c2f00]">
          Nuevas experiencias
        </h3>
      </div>

      <CarouselRow products={especiales} />
    </div>
  </section>
);


// ─── SECCIÓN 3: Presentaciones ───────────────────────────────────────────────
const presentaciones = [
  {
    id: 7,
    title: "Pack Degustación",
    tags: ["PACK", "3x100g"],
    description:
      "Tres variedades en un solo pack. Ideal para regalar o para quienes quieren descubrir todos nuestros sabores.",
    image:
      "https://images.unsplash.com/photo-1549007953-2f2dc0b24019?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Presentación Familiar",
    tags: ["PREMIUM", "1kg"],
    description:
      "Para los que no se conforman con poco. Un kilo del mejor manjar artesanal con la misma receta de siempre.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Balde Mayorista",
    tags: ["MAYORISTA", "5kg"],
    description:
      "Para negocios y reposteros. Cinco kilos de calidad artesanal, perfecto para producción a escala.",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1974&auto=format&fit=crop",
  },
];

export const SeccionPresentaciones = () => (
  <section className="bg-[#fff8f6] relative overflow-hidden py-20">
    <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] -z-10 pointer-events-none" />
    <div className="container mx-auto px-6 lg:px-16 max-w-7xl">

      {/* Encabezado */}
      <div className="mb-12">
        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-[#ffe9e4] text-[#9a4600] text-sm tracking-widest font-semibold">
          PRESENTACIONES
        </span>
        <h3 className="text-3xl md:text-4xl font-serif text-[#6c2f00]">
          Para cada ocasión
        </h3>
      </div>

      <CarouselRow products={presentaciones} />
    </div>
  </section>
);


// ─── ProductsSection principal que agrupa las 3 ──────────────────────────────
const ProductsSection = () => {
  return (
    <div id="catalogo">
      {/* Título general de la sección */}
      <section className="bg-[#fff8f6] pt-32 md:pt-40 pb-4">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-[#6c2f00] mb-4">
            Nuestras Delicias
          </h2>
          <div className="w-24 h-1 bg-[#fd8a3e] mx-auto rounded-full mb-6 opacity-50" />
          <p className="text-lg text-[#54433a] max-w-2xl mx-auto leading-relaxed">
            Seleccionamos los mejores ingredientes para crear texturas
            inigualables. Perfectos para untar, rellenar o disfrutar a
            cucharadas.
          </p>
        </div>
      </section>

      <SeccionClasicos />
      <SeccionEspeciales />
      <SeccionPresentaciones />
    </div>
  );
};

export default ProductsSection;