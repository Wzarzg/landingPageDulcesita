const StorySection = () => {
  return (
    <section
      id="historia"
      className="bg-[#ffe9e4] relative py-32 md:py-40 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative Blobs */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#ffdad2] rounded-full blur-3xl opacity-70" />

            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-70" />

            {/* Main Image */}
            <div className="relative rounded-t-full rounded-b-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(139,69,19,0.12)] border-8 border-[#fff8f6]">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1974&auto=format&fit=crop"
                alt="Proceso artesanal"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-1/4 -right-6 lg:-right-12 bg-white p-5 rounded-3xl shadow-lg border border-[#dac2b6]/20 flex flex-col items-center">
              <div className="text-4xl mb-2">
                🔥
              </div>

              <span className="text-2xl font-bold text-[#2b1611]">
                100%
              </span>

              <span className="text-xs tracking-[0.2em] text-[#54433a] font-semibold">
                FUEGO LENTO
              </span>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            {/* Title */}
            <h2 className="relative inline-block text-4xl md:text-6xl font-serif text-[#6c2f00] mb-8">
              Nuestra Esencia

              <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-[#fd8a3e] rounded-full opacity-50" />
            </h2>

            {/* Subtitle */}
            <h3 className="text-2xl italic text-[#2b1611] mb-8">
              De la olla de cobre a tu mesa.
            </h3>

            {/* Paragraphs */}
            <p className="text-lg leading-relaxed text-[#54433a] mb-6">
              En Manjar Artesano, creemos que el verdadero sabor
              requiere paciencia. Nuestra historia comenzó en la
              cocina de la abuela, donde la leche fresca y el azúcar
              de caña se transformaban mágicamente tras horas de
              cocción a fuego lento.
            </p>

            <p className="text-lg leading-relaxed text-[#54433a] mb-10">
              Hoy, mantenemos esa tradición intacta. Utilizamos
              exclusivamente ollas de cobre que garantizan una
              distribución perfecta del calor, logrando esa textura
              sedosa y ese color ámbar profundo característico de
              un auténtico manjar peruano.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-2xl">
                  🌿
                </div>

                <div>
                  <h4 className="font-semibold text-[#2b1611] mb-2">
                    Ingredientes Naturales
                  </h4>

                  <p className="text-sm text-[#54433a] leading-relaxed">
                    Solo leche de pastoreo y azúcar seleccionada.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-2xl">
                  👨‍🍳
                </div>

                <div>
                  <h4 className="font-semibold text-[#2b1611] mb-2">
                    Receta Familiar
                  </h4>

                  <p className="text-sm text-[#54433a] leading-relaxed">
                    3 generaciones perfeccionando el punto exacto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;