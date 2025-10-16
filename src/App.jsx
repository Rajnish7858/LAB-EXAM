import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",q
        justifyContent: "center",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "#222" : "#f5f5f5",
        transition: "0.3s",
      }}
    >
      <h1>{theme === "light" ? " Light Theme" : " Dark Theme"}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#222" : "#f5f5f5",
          color: theme === "light" ? "#f5f5f5" : "#222",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;

