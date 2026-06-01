
import Container from "./Container";
//#ffe9e4
const Footer = () => {
  return (
    <footer className="bg-[#ffe9] border-t border-orange-100 pt-7 pb-8 px-4">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="w-24 h-24 rounded-full bg-white shadow-md mb-6 flex items-center justify-center">
              <span className="text-[#6c2f00] text-lg font-semibold">
                Logo
              </span>
            </div>

            <h3 className="text-2xl text-[#6c2f00] mb-3 font-serif">
              NOMBRE EMPRESA S.A.C.
            </h3>

            <p className="text-[#54433a] text-lg leading-relaxed font-medium">
              RUC:
            </p>
          </div>

          {/* Copyr */}
          <div className="flex items-center justify-center md:justify-end">
            <p className="text-md text-[#54433a]/70 text-center md:text-right">
              © 2026 Manjar Dulcesita. Todos los derechos reservados.
            </p>
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;