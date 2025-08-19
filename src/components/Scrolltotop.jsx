import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
     <button
  onClick={scrollToTop}
  className="scroll-to-top"
>
  <div className="">
  <FaArrowUp className="arrow !text-lg" />
  </div>
  <div className="gap-1 !pt-2">
    <div>T</div>
    <div>O</div>
    <div>P</div>
  </div>
</button>

    )
  );
}

export default ScrollToTopButton;
