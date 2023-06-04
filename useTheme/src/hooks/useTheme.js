import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) setTheme(theme);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light-theme") setTheme("dark-theme");
    else setTheme("light-theme");
  };

  return { theme, toggleTheme };
};

export default useTheme;
