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
import fondo from "../../assets/imgs/fondo.webp"

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
    <div
    
    >
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
    title: "Manjar Blanco Toffe",
    tags: ["BALDE GRANDE", "19Kg"],
    description:
      "Nuestro manjar toffe, es elaborado bajo una extricta y rigurosa coccion de leche mezclada con almidones y azúcares, obteniendo asi un intenso y cremoso sabor a dulce lácteo con un pequeño toque a caramelo toffe y una textura firme y brillante excelente para untar.",
    image: toffegrande,
  },
  {
    id: 2,
    title: "Manjar Blanco Especial",
    tags: ["BALDE GRANDE", "19Kg"],
    description:
      "Nuestro manjar blanco especial es elaborado con una rigurosa selección de insumos de alta calidad que resaltan un sabor tradicional de leche caramelizada. Su textura cremosa y untable lo convierte en una excelente opción para diversas aplicaciones en repostería y panadería",
    image: especialgrande,
  },
    {
    id: 3,
    title: "Manjar Blanco Super Especial",
    tags: ["BALDE GRANDE", "19Kg"],
    description:
      "Esta elaborado con leche fresca previamente seleccionada y materia prima de alta calidad. Nuestro manjar Super Especial, destaca por un sabor aunténticamente lácteo, ideal para decoraciones y pastelería fina. Una excelente opción que combina sabor y calidad",
    image: superespecialgrande,
  },
  {
    id: 4,
    title: "Manjar Blanco Premium",
    tags: ["BALDE GRANDE", "20Kg"],
    description:
      "Nuestro manjar premium representa nuestra máxima expresión de calidad y sabor, elaborado con leche fresca previamente seleccionada y un riguroso y cuidadoso proceso de cocción, obteniendo asi un intenso sabor lácteo ideal para decoraciones y diversas aplicaciones en la repostería y panaderia.",
    image: blancogrande,
  },
  {
    id: 5,
    title: "Manjar Blanco Fudge Premium",
    tags: ["BALDE GRANDE", "20Kg"],
    description:
      "Nuestro fudge premium, es una deliciosa combinación de cocoa y leche, elaborado para ofrecer una textura suave, brillante y cremosa con un intenso sabor a chocolate, ideal para relleno, cobertura y decoraciones, ya que su proceso es realizado con productos de alta calidad.",
    image: fudgegrande,
  },
];

export const SeccionGrande = () => (
  <section className="bg-[#f7cba2] relative overflow-hidden py-8"
  style={{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: "repeat",
        backgroundSize: "1080px", /* Controla qué tan grandes o pequeñas se ven las figuras */
      }}>
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
      "La misma receta de nuestro Toffe grande, en una presentación más práctica. Elaborado con leche y azúcares cuidadosamente cocidos para lograr ese característico sabor a caramelo con textura firme y brillante, ideal para negocios medianos y pastelerías.",
    image: toffepequeno,
  },
  {
    id: 7,
    title: "Manjar Blanco Premium",
    tags: ["BALDE PEQUEÑO", "5Kg"],
    description:
      "Nuestro manjar Premium en formato accesible. Elaborado con leche fresca seleccionada y un riguroso proceso de cocción que garantiza ese intenso sabor lácteo, perfecto para repostería y panadería sin necesidad de grandes volúmenes.",
    image: blancopequeno,
  },
  {
    id: 8,
    title: "Manjar Blanco Fudge Premium",
    tags: ["BALDE PEQUEÑO", "5Kg"],
    description:
      "La deliciosa combinación de cocoa y leche de nuestro Fudge Premium, ahora en presentación pequeña. Su textura suave, brillante y cremosa con intenso sabor a chocolate lo hace ideal para rellenos y coberturas en producciones medianas.",
    image: fudgepequeno,
  },
];

export const SeccionPequena = () => (
  <section className="bg-[#f7cba2] relative overflow-hidden py-8"
  style={{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: "repeat",
        backgroundSize: "1080px", /* Controla qué tan grandes o pequeñas se ven las figuras */
      }}>
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
      "La calidad de nuestro manjar blanco en un pote para el consumo en casa. Elaborado con los mismos insumos de alta calidad de nuestra línea profesional, con ese sabor auténtico a leche caramelizada que nos caracteriza.",
    image: blancomini,
  },
];

export const SeccionMini = () => (
  <section className="bg-[#f7cba2] relative overflow-hidden py-6 pb-32"
  style={{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: "repeat",
        backgroundSize: "1080px", /* Controla qué tan grandes o pequeñas se ven las figuras */
      }}>
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
      <section className="bg-[#f7cba2] pt-32 md:pt-40 pb-4"
        style={{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: "repeat",
        backgroundSize: "1080px", /* Controla qué tan grandes o pequeñas se ven las figuras */
      }}
      >
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