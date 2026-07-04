"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
let currentTheme: Theme = "dark";
const listeners = new Set<() => void>();

function setThemeGlobal(next: Theme) {
  currentTheme = next;
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", next === "dark");
  }
  try {
    localStorage.setItem("theme", next);
  } catch {}
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribe,
    () => currentTheme,
    () => "dark" as Theme,
  );

  useEffect(() => {
    const stored =
      (typeof window !== "undefined" &&
        (localStorage.getItem("theme") as Theme | null)) || null;
    const initial: Theme = stored ?? "dark";
    if (initial !== currentTheme) setThemeGlobal(initial);
    else document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () =>
    setThemeGlobal(currentTheme === "dark" ? "light" : "dark");

  return { theme, toggle };
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative inline-flex h-9 w-16 items-center rounded-full border border-black/10 dark:border-white/20 bg-white dark:bg-white/10 backdrop-blur transition-colors"
    >
      <span
        className={`absolute top-1 left-1 flex h-7 w-7 items-center justify-center rounded-full bg-black text-white shadow transition-transform duration-300 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}