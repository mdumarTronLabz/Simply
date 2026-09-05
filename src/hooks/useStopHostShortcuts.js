import { useEffect } from "react";

// Prevents host page (Facebook/Instagram/etc.) global keyboard shortcuts
// from swallowing keystrokes while the user types inside extension's inputs.
export function useStopHostShortcuts(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const stop = (e) => e.stopPropagation();

    el.addEventListener("keydown", stop, true);
    el.addEventListener("keyup", stop, true);
    el.addEventListener("keypress", stop, true);

    return () => {
      el.removeEventListener("keydown", stop, true);
      el.removeEventListener("keyup", stop, true);
      el.removeEventListener("keypress", stop, true);
    };
  }, [ref]);
}
