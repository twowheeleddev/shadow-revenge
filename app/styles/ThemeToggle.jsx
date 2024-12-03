"use client";

import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="fixed top-4 right-4 p-2 bg-gray-200 rounded"
      onClick={toggleTheme}
    >
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}
