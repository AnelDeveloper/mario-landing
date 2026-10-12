import { primaryButton } from "./buttons";
import { AppLink } from "./AppLink";

const MODULES = [
  { id: "M2", title: "Stvarni food cost i prinos" },
  { id: "M3", title: "Menu engineering" },
  { id: "M5", title: "Organizacija kuhinje" },
  { id: "M7", title: "Zero-waste kao profitni sistem" },
  { id: "M8", title: "Plan za narednih 90 dana" },
];

/**
 * Scroll target of "Istraži programe" (#programi). ExploreLink scrolls it to 24px below the
 * top of the viewport, like the prototype's scrollToEl; scroll-margin-top gives deep links
 * (/#programi) and the no-JS fallback the same offset.
 */
export function FlagshipProgram() {
  return (
    <section
      id="programi"
      className="mx-auto max-w-[1200px] scroll-mt-[24px] px-[clamp(18px,4vw,48px)] py-[clamp(40px,6vw,72px)]"
    >
      <div className="flex flex-wrap items-center gap-[clamp(24px,4vw,56px)] rounded-[16px] bg-ink p-[clamp(24px,4vw,48px)] text-paper">
        <div className="min-w-[min(100%,280px)] flex-[1_1_400px]">
          <div className="mb-[14px] font-mono text-[12px] tracking-[.2em] text-accent">
            GLAVNI PROGRAM
          </div>
          <h2 className="mb-[10px] font-display text-[length:clamp(38px,5.5vw,64px)] leading-[.95] font-semibold uppercase">
            Restaurant Reset 30
          </h2>
          <div className="mb-[18px] font-mono text-[13px] text-grey">
            30 dana · 8 modula · za vlasnike i timove
          </div>
          <p className="mb-[22px] max-w-[520px] text-[rgba(244,242,236,.78)]">
            Praktični program koji restoran vodi kroz food cost, menu engineering, normative,
            organizaciju kuhinje i tim — do plana za narednih 90 dana.
          </p>
          <AppLink
            path="/program/reset30"
            className={`${primaryButton} min-h-[48px] rounded-[10px] px-[22px] text-[15px]`}
          >
            Pogledaj program
          </AppLink>
        </div>
        <div className="min-w-[min(100%,260px)] flex-[1_1_320px]">
          {/* role="list": Safari/VoiceOver drops list semantics once Preflight sets list-style: none. */}
          <ul role="list" className="flex flex-col">
            {MODULES.map((m) => (
              <li
                key={m.id}
                className="flex items-baseline gap-[14px] border-b border-[rgba(244,242,236,.12)] py-[11px] last:border-b-0"
              >
                <span className="w-[28px] flex-none font-mono text-[12px] text-accent">{m.id}</span>
                <span className="text-[14.5px]">{m.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
