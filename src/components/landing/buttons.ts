// The prototype uses <button>s; here they are links. These classes reproduce the
// UA button box (centred content, line-height: normal) plus the shared colours and
// interaction states. Size, padding, radius and font size are set per instance.

const base =
  "inline-flex items-center justify-center text-center leading-[normal] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2";

/** Orange CTA on dark surfaces: hover #E39040, paper focus ring. */
export const primaryButton = `${base} bg-accent font-bold text-ink hover:bg-accent-hover focus-visible:outline-paper`;

/** Transparent button on dark surfaces: paper text and border, orange focus ring. */
export const ghostButton = `${base} border border-[rgba(244,242,236,.35)] bg-transparent font-semibold text-paper focus-visible:outline-accent`;
