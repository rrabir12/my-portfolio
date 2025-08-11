import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Navbar.css';
import { links } from '../data';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Detect which section is currently in view
      let current = "";
      document.querySelectorAll("section[id]").forEach((section) => {
        const sectionTop = section.offsetTop - 80; // offset for navbar height
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 top-0 start-0 transition-all duration-500 ${
        isScrolled ? "!py-2 bg-[#6856AE] modern-glass" : "!py-4 bg-[#6856AE]"
      }`}
    >
      <div className="max-w-7xl mx-auto !px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a className="flex items-center space-x-3" href="/">
            <h2 className="text-4xl !text-white">
              Rabi <span className="text-[#D9A520]">Roy.</span>
            </h2>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-16">
            {links.map(({ name, path }) => (
              <a
                key={path}
                className={`relative px-4 py-2 text-white/90 hover:text-white font-medium text-md modern-nav-item ${
                  activeSection === path.replace("#", "")
                    ? "bg-[#4d36a5] text-white !py-2 !px-4 rounded"
                    : ""
                }`}
                href={path}
              >
                {name}
              </a>
            ))}
          </div>

          <button type="button" class="focus:outline-none text-white !bg-[#4d36a5] hover:!bg-[#3c259b]  !font-medium !rounded-lg !text-sm !px-5 !py-2.5 !me-2"><a href="/#contact">Let's Talk</a></button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden modern-button p-2 rounded-lg"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="rounded-xl modern-glass-mobile p-4">
            <div className="flex flex-col gap-2">
              {links.map(({ name, path }) => (
                <a
                  key={path}
                  className={`w-full px-4 py-3 text-white/90 hover:text-white font-medium text-sm modern-nav-item-mobile ${
                    activeSection === path.replace("#", "") ? "bg-[#4d36a5] text-white" : ""
                  }`}
                  href={path}
                  onClick={closeMobileMenu}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
