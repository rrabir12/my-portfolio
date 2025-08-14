import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./navbar.css";
import { links } from "../data";
import Themes from "./Themes";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      let current = "";
      document.querySelectorAll("section[id]").forEach((section) => {
        const sectionTop = section.offsetTop - 90;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent background scroll when menu is open
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 top-0 start-0 transition-all duration-500 !py-3 bg-[#6856AE]`}
    >
      {/* <div className="max-w-7xl !px-4 sm:!px-6"> */}
        <div className="flex items-center max-w-7xl !px-4 sm:!px-6 justify-between !mx-auto">
          {/* Logo */}
          <a className="flex items-center space-x-3" href="/">
            <h2 className="text-3xl sm:text-4xl !text-white font-bold">
              Rabi <span className="text-[#D9A520]">Roy.</span>
            </h2>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-10">
            {links.map(({ name, path }) => (
              <a
                key={path}
                className={`!px-4 !py-2 text-white/90 hover:text-white font-medium text-md rounded-lg transition ${
                  activeSection === path.replace("#", "")
                    ? "bg-[#4d36a5] text-white"
                    : ""
                }`}
                href={path}
              >
                {name}
              </a>
            ))}
    
           <a
  href="/#contact"
  className="!px-5 !py-2.5 border border-white text-white font-medium rounded-lg text-sm transition hover:bg-white hover:text-[#4d36a5]"
>
  Let's Talk
</a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden !p-3 rounded-lg hover:bg-white/10 transition"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg
              className="!w-6 !h-6 !text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      {/* </div> */}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-100 bg-[#121212]/90 backdrop-blur-lg shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end !p-4">
          <button
            className="!p-2 text-white hover:bg-white/10 rounded-full"
            onClick={closeMobileMenu}
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 !px-6">
          {links.map(({ name, path }) => (
            <a
              key={path}
              href={path}
              onClick={closeMobileMenu}
              className={`!px-5 !py-3 text-white/90 hover:text-white rounded-lg transition ${
                activeSection === path.replace("#", "")
                  ? "bg-[#4d36a5] text-white"
                  : "hover:bg-white/10"
              }`}
            >
              {name}
            </a>
          ))}

          {/* Let's Talk */}
          <a
            href="/#contact"
            onClick={closeMobileMenu}
            className="!mt-4 text-center !px-5 !py-3 bg-[#4d36a5] hover:bg-[#3c259b] text-white rounded-lg shadow-md transition"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
