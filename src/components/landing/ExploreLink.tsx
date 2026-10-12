"use client";

import type { ComponentPropsWithoutRef, KeyboardEvent, MouseEvent } from "react";
import { isButtonSpace } from "./keyboard";

/** The programs section (FlagshipProgram) and the gap left above it (prototype `scrollToEl`). */
const TARGET_ID = "programi";
const OFFSET_PX = 24;

type ExploreLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "onClick" | "onKeyDown">;

/**
 * "Istraži programe": scrolls the programs section to 24px below the top of the viewport and
 * leaves the URL and history alone, like the prototype's goLandPrograms. The scroll is smooth
 * unless the user prefers reduced motion. Space activates it like the prototype's <button>.
 * Before hydration, without JS and on modified clicks it is a plain #programi link; the
 * section's scroll-margin keeps the same 24px offset.
 */
export function ExploreLink(props: ExploreLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    const target = document.getElementById(TARGET_ID);
    if (!target) return;

    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - OFFSET_PX,
      // "auto" follows the page's scroll-behavior, which is auto (an instant jump) here.
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLAnchorElement>) {
    if (!isButtonSpace(event)) return;
    event.preventDefault(); // otherwise Space scrolls the page by a screen (also while held)
    if (!event.repeat) event.currentTarget.click();
  }

  return <a {...props} href={`#${TARGET_ID}`} onClick={handleClick} onKeyDown={handleKeyDown} />;
}
