
import Container from "./Container";
import logo from "../../assets/imgs/logo.webp"

const Footer = () => {
  return (
    <footer className="bg-[#C5896E] border-t border-orange-100 pt-5 pb-5 px-4">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="w-30 h-30 rounded-full mb-2 flex items-center justify-center">
              <img src={logo} alt="Logo de la empresa" className="w-full h-full object-contain" >
              </img>
            </div>

            <h3 className="text-xl text-[#3a2413] mb-3 font-serif">
              Elaboraciones & Distribuciones Gil S.A.C.
            </h3>
          </div>

          {/* Copyr */}
          <div className="flex items-center justify-center md:justify-end">
            <p className="text-md text-[#3a2413]/90 text-center md:text-right">
              © 2026 Manjar Blanco Dulcesita. Todos los derechos reservados.
            </p>
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;