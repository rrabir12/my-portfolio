import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site_footer">
      <div className="container">
        <div className="footer_panel">
          <div className="footer_brand">
            <h3 className="footer_name">Rabi Roy</h3>
            <p className="footer_role">
              Software Quality Assurance & Technical Support Engineer
            </p>
          </div>

          <nav className="footer_nav" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer_contact">
            <a href="mailto:rrabir9815@gmail.com">rrabir9815@gmail.com</a>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>

        <div className="footer_bottom">
          <span>© {new Date().getFullYear()} Rabi Roy. All rights reserved.</span>
          <a href="#home" className="footer_top_link">
            Back to top <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
