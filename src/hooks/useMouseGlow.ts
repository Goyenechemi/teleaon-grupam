import { useEffect } from "react";

/**
 * Tracks mouse position and updates the CSS custom properties
 * `--mouse-x` and `--mouse-y` on the `#mouse-glow` element,
 * driving the radial-gradient glow effect.
 */
export function useMouseGlow() {
  useEffect(() => {
    const glowEl = document.getElementById("mouse-glow");
    if (!glowEl) return;

    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          glowEl.style.setProperty("--mouse-x", `${e.clientX}px`);
          glowEl.style.setProperty("--mouse-y", `${e.clientY}px`);
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
}
