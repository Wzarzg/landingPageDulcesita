import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import blancogrande from "../../assets/imgs/blanco-grande.webp";
import blancopequeno from "../../assets/imgs/blanco-pequena.webp";
import blancomini from "../../assets/imgs/blanco-mini.webp";
import especialgrande from "../../assets/imgs/especial-grande.webp";
import fudgegrande from "../../assets/imgs/fudge-grande.webp";
import fudgepequeno from "../../assets/imgs/fudge-pequena.webp";
import superespecialgrande from "../../assets/imgs/super-especial-grande.webp";
import toffegrande from "../../assets/imgs/toffe-grande.webp";
import toffepequeno from "../../assets/imgs/toffe-pequena.webp";

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.98 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.98 }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

// ─── Card principal ─────────────────────────────────────────────────────────
const MainCard = ({ product, drag, onDragEnd }) => (
  <motion.div
    key={product.id}
    custom={drag}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ type: "spring", stiffness: 260, damping: 24 }}
    drag={drag !== undefined ? "x" : false}
    dragConstraints={{ left: 0, right: 0 }}
    dragElastic={0.2}
    onDragEnd={onDragEnd}
    className="relative pt-28 h-full"
  >
    {/* Imagen sobresaliente */}
    <motion.img
      key={product.image}
      src={product.image}
      alt={product.title}
      draggable="false"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-1/2 -translate-y-1/5 md:-translate-y-1/8 -translate-x-1/2 w-75 md:w-92  object-contain drop-shadow-xl z-10 pointer-events-none"
    />

    {/* Card con contenido */}
    <div className="bg-[#ffd8b3] border border-[#dac2b6]/40 rounded-4xl shadow-[0_10px_30px_rgba(139,69,19,0.08)] px-8 pt-24 pb-7 flex flex-col items-center text-center h-full">
      <div
        className="
          flex
          gap-2
          mb-3
          flex-wrap
          justify-center
          lg:justify-end
          w-full
        "
      >
        {product.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-[#ffe9e4] text-[#9a4600] text-xs tracking-wider rounded-full font-semibold">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl md:text-3xl font-serif text-[#2b1611] mb-3">
        {product.title}
      </h3>
      <p className="text-[#54433a] leading-relaxed text-sm md:text-base grow">
        {product.description}
      </p>
    </div>
  </motion.div>
);

// ─── Card preview ────────────────────────────────────────────────────────────
const PreviewCard = ({ product, drag, onDragEnd }) => (
  <motion.div
    key={product.id}
    custom={drag}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.04 }}
    drag="x"
    dragConstraints={{ left: 0, right: 0 }}
    dragElastic={0.2}
    onDragEnd={onDragEnd}
    className="relative pt-20 h-full"
  >
    {/* Imagen sobresaliente */}
    <motion.img
      key={product.image}
      src={product.image}
      alt={product.title}
      draggable="false"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-1/2 -translate-y-1/4 -translate-x-1/2 w-70  object-contain drop-shadow-lg z-10 pointer-events-none"
    />

    {/* Card con contenido */}
    <div className="bg-[#ffd8b3] border border-[#dac2b6]/40 rounded-4xl shadow-[0_10px_30px_rgba(139,69,19,0.06)] px-6 pt-20 pb-8 flex flex-col items-center text-center h-full">
      <div className="flex gap-2 mb-3 flex-wrap justify-center">
        {product.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-[#ffe9e4] text-[#9a4600] text-xs tracking-wider rounded-full font-semibold">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-serif text-[#2b1611] mb-2">
        {product.title}
      </h3>

    </div>
  </motion.div>
);

// ─── Componente base ────────────────────────────────────────────────────────
const CarouselRow = ({ products }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const isSingle = products.length === 1;

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleDragEnd = (_, info) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);
    if (swipe < -swipeConfidenceThreshold) next();
    else if (swipe > swipeConfidenceThreshold) prev();
  };

  const mainProduct = products[current];
  const nextProduct = products[(current + 1) % products.length];

  return (
    <div>
      {/* Espacio extra arriba para que la imagen sobresalga sin recortarse */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-12">

        {/* Main Card */}
        <div className={`${isSingle ? "md:col-span-8 md:col-start-3" : "md:col-span-8"} relative`}>
          <AnimatePresence custom={direction} mode="wait">
            <MainCard
              key={mainProduct.id}
              product={mainProduct}
              drag={isSingle ? undefined : direction}
              onDragEnd={isSingle ? undefined : handleDragEnd}
            />
          </AnimatePresence>
        </div>

        {/* Preview Card — solo desktop y solo si hay más de 1 */}
        {!isSingle && (
          <div className="hidden md:block md:col-span-4 relative">
            <AnimatePresence custom={direction} mode="wait">
              <PreviewCard
                key={nextProduct.id}
                product={nextProduct}
                onDragEnd={handleDragEnd}
              />
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Controls */}
      {!isSingle && (
        <div className="mt-10 flex items-center justify-center">
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={prev}
              aria-label="Producto anterior"
              className="w-12 h-12 rounded-full border-2 border-[#6c2f00] text-[#6c2f00] flex items-center justify-center hover:bg-[#6c2f00] hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="flex gap-2 mx-4">
            {products.map((_, i) => (
              <motion.button
                key={i}
                aria-label={`Ir al producto ${i + 1}`}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                animate={{ width: i === current ? 32 : 8 }}
                transition={{ duration: 0.25 }}
                className={`h-2 rounded-full transition-colors ${
                  i === current ? "bg-[#6c2f00]" : "bg-[#ffd8b3]"
                }`}
              />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={next}
              aria-label="Siguiente producto"
              className="w-12 h-12 rounded-full border-2 border-[#6c2f00] text-[#6c2f00] flex items-center justify-center hover:bg-[#6c2f00] hover:text-white transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── SECCIÓN 1: Grandes ─────────────────────────────────────────────────────
const grande = [
  {
    id: 1,
    title: "Manjar Blanco Super Especial",
    tags: ["BALDE GRANDE", "19Kg"],
    description:
      "Nuestra versión más selecta. Elaborado a fuego lento con leche fresca de alta calidad, logra una textura ultra cremosa y un sabor profundo, ideal para repostería profesional y pedidos de alta demanda.",
    image: superespecialgrande,
  },
  {
    id: 2,
    title: "Manjar Blanco Especial",
    tags: ["BALDE GRANDE", "19Kg"],
    description:
      "Receta especial con el punto exacto de dulzura. Perfecto para alfajores, tortas y rellenos en general. Rinde de manera consistente en todo tipo de preparaciones.",
    image: especialgrande,
  },
  {
    id: 3,
    title: "Manjar Blanco Premium",
    tags: ["BALDE GRANDE", "20Kg"],
    description:
      "La combinación ideal entre sabor y rendimiento. Su textura firme y homogénea lo hace perfecto para decoración y relleno de postres que requieren precisión.",
    image: blancogrande,
  },
  {
    id: 4,
    title: "Manjar Blanco Fudge Premium",
    tags: ["BALDE GRANDE", "20Kg"],
    description:
      "Con notas más intensas y un acabado brillante, el Fudge Premium es la elección de reposteros que buscan un manjar con carácter. Ideal para coberturas y ganaches artesanales.",
    image: fudgegrande,
  },
  {
    id: 5,
    title: "Manjar Blanco Toffe",
    tags: ["BALDE GRANDE", "19Kg"],
    description:
      "Sabor a caramelo tostado con la cremosidad del manjar tradicional. Su perfil dulce y tostado lo hace perfecto para helados, waffles y postres de inspiración clásica.",
    image: toffegrande,
  },
];

export const SeccionGrande = () => (
  <section className="bg-[#f7cba2] relative overflow-hidden py-8">
    <div className="container mx-auto px-6 lg:px-4 max-w-7xl">
      <div className="mb-4">
        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-[#ffe9e4] text-[#9a4600] text-sm tracking-widest font-semibold">
          PRESENTACIÓN GRANDE
        </span>
        <h3 className="text-3xl md:text-4xl font-serif text-[#6c2f00] pb-4">
          Para pedidos al por mayor
        </h3>
      </div>
      <CarouselRow products={grande} />
    </div>
  </section>
);

// ─── SECCIÓN 2: Pequeños ────────────────────────────────────────────────────
const pequeno = [
  {
    id: 6,
    title: "Manjar Blanco Toffe",
    tags: ["BALDE PEQUEÑO", "5Kg"],
    description:
      "El mismo Toffe que enamora, ahora en formato ideal para negocios medianos y pastelerías. Sabor a caramelo suave con textura sedosa en cada cucharada.",
    image: toffepequeno,
  },
  {
    id: 7,
    title: "Manjar Blanco Premium",
    tags: ["BALDE PEQUEÑO", "5Kg"],
    description:
      "Nuestro clásico de siempre en una presentación más manejable. Ideal para cafeterías, restaurantes y emprendimientos de repostería que buscan calidad consistente.",
    image: blancopequeno,
  },
  {
    id: 8,
    title: "Manjar Blanco Fudge Premium",
    tags: ["BALDE PEQUEÑO", "5Kg"],
    description:
      "Intensidad y brillo en cada porción. El Fudge Premium en presentación pequeña es perfecto para quienes quieren incorporar un manjar diferenciado sin comprometer volumen.",
    image: fudgepequeno,
  },
];

export const SeccionPequena = () => (
  <section className="bg-[#f7cba2] relative overflow-hidden py-8">
    <div className="absolute left-0 top-20 w-125 h-125 bg-orange-100/40 rounded-full blur-[100px] -z-10 pointer-events-none" />
    <div className="container mx-auto px-6 lg:px-4 max-w-7xl">
      <div className="mb-4">
        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-[#ffe9e4] text-[#9a4600] text-sm tracking-widest font-semibold">
          PRESENTACIÓN PEQUEÑA
        </span>
        <h3 className="text-3xl md:text-4xl font-serif text-[#6c2f00] pb-4">
          Para pedidos al por menor
        </h3>
      </div>
      <CarouselRow products={pequeno} />
    </div>
  </section>
);

// ─── SECCIÓN 3: Mini ────────────────────────────────────────────────────────
const mini = [
  {
    id: 9,
    title: "Manjar Blanco",
    tags: ["POTE MINI", "500g"],
    description:
      "La presentación perfecta para el consumo en casa. Mismo sabor artesanal de siempre, en un pote práctico que se guarda fácil y acompaña cada momento dulce del día.",
    image: blancomini,
  },
];

export const SeccionMini = () => (
  <section className="bg-[#f7cba2] relative overflow-hidden py-6 pb-32">
    <div className="absolute right-0 top-20 w-125 h-125 bg-orange-100/40 rounded-full blur-[100px] -z-10 pointer-events-none" />
    <div className="container mx-auto px-6 lg:px-4 max-w-7xl">
      <div className="mb-4">
        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-[#ffe9e4] text-[#9a4600] text-sm tracking-widest font-semibold">
          PRESENTACIÓN MINI
        </span>
        <h3 className="text-3xl md:text-4xl font-serif text-[#6c2f00]">
          Para el consumo en casa
        </h3>
      </div>
      <CarouselRow products={mini} />
    </div>
  </section>
);

// ─── ProductsSection principal ───────────────────────────────────────────────
const ProductsSection = () => {
  return (
    <div id="catalogo" >
      <section className="bg-[#f7cba2] pt-32 md:pt-40 pb-4">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-[#6c2f00] mb-4">
            Nuestras Delicias
          </h2>
          <div className="w-24 h-1 bg-[#572c10] mx-auto rounded-full  opacity-50" />
          <p className="text-lg text-[#54433a] max-w-2xl mx-auto leading-relaxed pt-3">
            Elaboramos cada producto con receta familiar y los mejores
            ingredientes. Desde baldes para repostería profesional hasta
            potes para disfrutar en casa.
          </p>
        </div>
      </section>

      <SeccionGrande />
      <SeccionPequena />
      <SeccionMini />

    </div>
  );
};

export default ProductsSection;