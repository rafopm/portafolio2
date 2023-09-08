"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Providers({ children }) {
  const {theme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("En provider: ",theme);
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}