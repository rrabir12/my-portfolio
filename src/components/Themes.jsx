import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const getStorageTheme = () => localStorage.getItem("theme") ?? "dark-theme";

function Themes({ className = "" }) {
  const [theme, setTheme] = useState(getStorageTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light-theme" ? "dark-theme" : "light-theme"));
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      className={`theme_toggler ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={theme === "light-theme" ? "Enable dark mode" : "Enable light mode"}
      title={theme === "light-theme" ? "Dark mode" : "Light mode"}
    >
      {theme === "light-theme" ? <BsMoon /> : <BsSun />}
    </button>
  );
}

export default Themes;
