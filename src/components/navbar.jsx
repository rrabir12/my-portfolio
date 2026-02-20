import { useState, useEffect } from "react";
import "./navbar.css";
import { links } from "../data";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = links.map(({ path }) => path.replace("#", ""));

    const handleScroll = () => {
      const y = window.scrollY;
      const scrollMarker = y + 130;
      setIsScrolled(y > 10);

      let current = sectionIds[0] ?? "";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollMarker >= sectionTop && scrollMarker < sectionBottom) {
          current = id;
        }
      });

      if (window.innerHeight + y >= document.documentElement.scrollHeight - 2) {
        current = sectionIds[sectionIds.length - 1] ?? current;
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={`site_nav ${isScrolled ? "is_scrolled" : ""}`}>
        <div className="container nav_inner">
          <a className="nav_logo" href="#home">
            <span className="nav_logo_mark" aria-hidden="true">
              <span className="nav_logo_initials">RR</span>
            </span>
            <span className="nav_logo_text">
              Rabi <span>Roy</span>
            </span>
          </a>

          <div className="nav_links">
            {links.map(({ name, path }) => (
              <a
                key={path}
                className={`nav_link ${
                  activeSection === path.replace("#", "") ? "is-active" : ""
                }`}
                href={path}
              >
                {name}
              </a>
            ))}

            <a href="#contact" className="nav_cta">
              Let's Talk
            </a>
          </div>

          <button
            className={`nav_toggle ${isMobileMenuOpen ? "is-open" : ""}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Open navigation"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`mobile_menu ${isMobileMenuOpen ? "is-open" : ""}`}
        onClick={closeMobileMenu}
      >
        <div
          className="mobile_panel"
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile_header">
            <span>Menu</span>
            <button
              className="mobile_close"
              onClick={closeMobileMenu}
              type="button"
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>

          <div className="mobile_links">
            {links.map(({ name, path }) => (
              <a
                key={path}
                href={path}
                onClick={closeMobileMenu}
                className={`mobile_link ${
                  activeSection === path.replace("#", "") ? "is-active" : ""
                }`}
              >
                {name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mobile_cta"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
