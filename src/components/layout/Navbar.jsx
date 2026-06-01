import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Nosotros", href: "#historia" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b
      ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-lg border-orange-100"
          : "bg-[#fff8f6]/85 backdrop-blur-sm border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl md:text-3xl tracking-tight text-[#6c2f00] font-serif"
        >
          Manjar Blanco Dulcesita
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#54433a] hover:text-[#934b19] transition-colors duration-300 text-lg"
                >
                  {link.label}
                </a>
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
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[#54433a] hover:text-[#934b19] transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

        </Container>
      </div>
    </nav>
  );
};

export default Navbar;