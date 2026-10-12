"use client";

import { useEffect, useRef, useState } from "react";
import { isButtonSpace } from "./keyboard";
import { Splash } from "./Splash";

/** How long the splash plays before navigating (prototype `startDemo`). */
const SPLASH_MS = 1150;

function appLinkFrom(target: EventTarget | null): HTMLAnchorElement | null {
  return target instanceof Element ? target.closest<HTMLAnchorElement>("a[data-app-link]") : null;
}

/**
 * Progressive enhancement for every <AppLink>: a plain primary click shows the
 * splash, then navigates to the link's href. Space does the same, as on the
 * prototype's <button>s. Modified clicks (ctrl/cmd/shift/alt, middle button) and
 * clicks before hydration keep normal link behaviour.
 */
export function AppLauncher() {
  const [launching, setLaunching] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      const link = appLinkFrom(event.target);
      if (!link) return;

      event.preventDefault();
      if (timer.current !== undefined) return; // already launching

      const href = link.href;
      setLaunching(true);
      timer.current = window.setTimeout(() => window.location.assign(href), SPLASH_MS);
    }

    // Links ignore Space (it scrolls the page); these look and act like buttons, so every
    // Space keydown is swallowed and the first one triggers the same plain click as above.
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || !isButtonSpace(event)) return;
      const link = appLinkFrom(event.target);
      if (!link) return;

      event.preventDefault();
      if (!event.repeat) link.click();
    }

    // Coming back from the app via the back/forward cache: drop the leftover splash.
    function onPageShow(event: PageTransitionEvent) {
      if (!event.persisted) return;
      window.clearTimeout(timer.current);
      timer.current = undefined;
      setLaunching(false);
    }

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("pageshow", onPageShow);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pageshow", onPageShow);
      window.clearTimeout(timer.current);
      timer.current = undefined;
    };
  }, []);

  return launching ? <Splash /> : null;
}
