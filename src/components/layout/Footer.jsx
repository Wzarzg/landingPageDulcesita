import Container from "./Container";
import logo from "../../assets/imgs/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#C5896E] border-t border-orange-100 py-5 px-4">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Empresa */}
          <div className="flex items-center gap-2">
            <div className="w-20 h-20 shrink-0">
              <img
                src={logo}
                draggable={false}
                alt="Logo de la empresa"
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-lg md:text-xl text-[#3a2413] font-serif text-center md:text-left">
              Elaboraciones & Distribuciones Gil S.A.C.
            </h3>
          </div>

          {/* Slogan */}
          <div className="text-center hidden md:block">
            <p className="text-xl md:text-2xl font-serif italic text-[#3a2413]">
              Pasión por el dulce,
            </p>
            <p className="text-xl md:text-2xl font-serif italic text-[#3a2413]">
              amor por el manjar
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm md:text-base text-[#3a2413]/90">
              © 2026 Manjar Blanco Dulcesita.
            </p>
            <p className="text-sm md:text-base text-[#3a2413]/90">
              Todos los derechos reservados.
            </p>
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;