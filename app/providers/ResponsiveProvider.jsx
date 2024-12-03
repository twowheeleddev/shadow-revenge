"use client";

import { createContext, useState, useEffect } from "react";

export const ResponsiveContext = createContext();

export default function ResponsiveProvider({ children }) {
  // State to hold the window width
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Function to update width state
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Set initial width
    handleResize();

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Provide the width to children
  return (
    <ResponsiveContext.Provider value={{ width }}>
      {children}
    </ResponsiveContext.Provider>
  );
}
