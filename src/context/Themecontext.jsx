"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default: black theme and cyan accent
  const [bgTheme, setBgTheme] = useState("black");
  const [accent, setAccentColor] = useState("#00ffff");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", bgTheme);
  }, [bgTheme]);

  const toggleBgTheme = () => {
    setBgTheme((prev) => (prev === "black" ? "white" : "black"));
  };

  const setAccent = (color) => setAccentColor(color);

  // Define color presets
  const themes = {
    black: {
      background: "#000000",
      text: "#ffffff",
    },
    white: {
      background: "#ffffff",
      text: "#000000",
    },
  };

  const activeTheme = themes[bgTheme];

  return (
    <ThemeContext.Provider
      value={{
        bgTheme,
        accent,
        toggleBgTheme,
        setAccent,
        themes,
      }}
    >
      <div
        className="min-h-screen transition-colors duration-500"
        style={{
          backgroundColor: activeTheme.background,
          color: activeTheme.text,
          "--accent-color": accent,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
