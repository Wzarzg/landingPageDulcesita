import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import logo from "../../assets/imgs/logo.webp"

const navLinks = [
  { label: "Catálogo", id: "catalogo" },
  { label: "Nosotros", id: "historia" },
  { label: "Contacto", id: "contacto" },
];


const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Bajando
        setIsVisible(false);
      } else {
        // Subiendo
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500
          border-b
          ${
            isVisible
              ? "translate-y-0"
              : "-translate-y-full"
          }
          ${
            isScrolled
              ? "bg-white/85 backdrop-blur-md shadow-lg border-orange-100"
              : "bg-[#fff8f6]/85 backdrop-blur-sm border-transparent"
          }
        `}
      >
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-3"
          >
            {/* Logo solo desktop */}
            <img
              src={logo}
              alt="Manjar Blanco Dulcesita"
              draggable={false}
              className="
                hidden md:block
                h-14
                w-auto
                object-contain
                select-none
              "
            />

            <span
              className="
                text-2xl
                md:text-3xl
                tracking-tight
                text-[#6c2f00]
                font-serif
              "
            >
              Manjar Blanco Dulcesita
            </span>
          </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-[#54433a] hover:text-[#934b19]  duration-300 text-lg font-medium hover:scale-105 transition-all ease-in-out"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

        </div>

        {/* Mobile Button */}
        <button
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-12 h-12 rounded-full flex items-center justify-center text-[#6c2f00] hover:bg-[#6c2f00] hover:text-white transition-all duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${
          isOpen
            ? "max-h-100 opacity-100 border-t border-orange-100"
            : "max-h-0 opacity-0"
        } bg-[#fff8f6]`}
      >
        <Container className="py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    scrollToSection(link.id);
                    setIsOpen(false);
                  }}
                  className="block text-[#54433a] hover:text-[#934b19] transition-colors duration-300 font-medium"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

        </Container>
      </div>
    </nav>
  );
};

export default Navbar;