/** Full-screen launch splash shown while the app loads (prototype "splash" overlay). */
export function Splash() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-[22px] bg-ink">
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="stroke-accent"
      >
        <path d="M4 15a8 8 0 0 1 16 0 M2 19h20 M12 7V5 M10.5 5h3" />
      </svg>
      <div className="font-display text-[36px] font-semibold tracking-[.16em] text-paper">
        MANDARIĆ METHOD
      </div>
      <svg width="240" height="24" viewBox="0 0 240 24" aria-hidden="true">
        <path
          d="M4 12 H236"
          strokeWidth="2"
          strokeDasharray="2 7"
          fill="none"
          className="stroke-paper/16"
        />
        <path
          d="M4 12 H236"
          strokeWidth="2"
          strokeDasharray="232"
          strokeDashoffset="232"
          fill="none"
          className="animate-[mmDraw_1s_ease_forwards] stroke-accent"
        />
        <circle
          cx="236"
          cy="12"
          r="5"
          className="animate-[mmPulse_1.3s_ease_infinite] fill-accent"
        />
      </svg>
      <div className="font-mono text-[11px] tracking-[.22em] text-grey">STANDARD BEZ KOMPROMISA</div>
    </div>
  );
}
