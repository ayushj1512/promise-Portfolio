"use client";

import React from "react";
import { ThemeProvider } from "../../context/Themecontext"; // ✅ ensure file name matches exactly (Themecontext.jsx)

export default function ThemeWrapper({ children }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col transition-all duration-500">
        {children}
      </div>
    </ThemeProvider>
  );
}
