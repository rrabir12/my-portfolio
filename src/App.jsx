import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Portfolio from "./pages/portfolio/portfolio";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/Scrolltotop";

function App() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme ?? "dark-theme";
    document.documentElement.className = initialTheme;
    if (!storedTheme) {
      localStorage.setItem("theme", initialTheme);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app_scene">
        <div className="app_content">
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
          <ScrollToTopButton />
          {/* <Routes>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="Contact" element={<Contact />} />
          </Routes> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
