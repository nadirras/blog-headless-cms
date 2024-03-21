"use client";
import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useLocalStorage } from "usehooks-ts";

export default function SwitchTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [hydrated, setHydrated] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <button className="btn btn-circle" onClick={toggleTheme}>
      {hydrated && theme === "dark" ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
}
