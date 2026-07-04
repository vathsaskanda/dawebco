"use client";
import { useTheme } from "@/components/theme-toggle";

export default function Switch() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <label
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        position: "relative",
        display: "inline-block",
        width: 64,
        height: 30,
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggle}
        aria-label="Toggle theme"
        style={{ opacity: 0, width: 0, height: 0, position: "absolute" }}
      />
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 999,
          background: isDark ? "#0a0a0a" : "#ffffff",
          border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"}`,
          boxShadow:
            "inset 0 1px 2px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
          transition: "background 0.35s ease, border-color 0.35s ease",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 3,
            left: 3,
            width: 24,
            height: 24,
            borderRadius: 999,
            background: "linear-gradient(180deg, #3a3a3a, #1a1a1a)",
            boxShadow:
              "0 2px 4px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
            transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isDark ? "translateX(34px)" : "translateX(0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              width: 2,
              height: 14,
              background: "rgba(255,255,255,0.55)",
              borderRadius: 2,
            }}
          />
        </span>
      </span>
    </label>
  );
}