import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Portfolio from "./pages/portfolio/portfolio";
import Themes from "./components/Themes";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Themes /> */}
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <Routes>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
