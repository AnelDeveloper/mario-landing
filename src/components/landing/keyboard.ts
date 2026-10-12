type KeyPress = Pick<KeyboardEvent, "key" | "altKey" | "ctrlKey" | "metaKey">;

/**
 * Space as a native <button> treats it: with or without Shift, including auto-repeat.
 * The landing's buttons are links (see buttons.ts), so on its own Space would scroll the page.
 * Callers swallow every matching keydown and activate only on the first, non-repeat one.
 */
export function isButtonSpace(event: KeyPress): boolean {
  return event.key === " " && !event.altKey && !event.ctrlKey && !event.metaKey;
}
