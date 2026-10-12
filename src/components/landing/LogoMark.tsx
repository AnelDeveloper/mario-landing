/** Brand mark: ink-2 tile, paper "M", orange dot. */
export function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" aria-hidden="true">
      <rect width="512" height="512" rx="104" className="fill-ink-2" />
      <path
        d="M140 372 V180 l58 84 58-84 V372"
        fill="none"
        strokeWidth="30"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-paper"
      />
      <circle cx="420" cy="118" r="26" className="fill-accent" />
    </svg>
  );
}
