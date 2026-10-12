import Image from "next/image";
import { ghostButton, primaryButton } from "./buttons";
import { AppLink } from "./AppLink";
import { ExploreLink } from "./ExploreLink";

export function Hero() {
  return (
    <section className="relative bg-ink text-paper">
      {/* Every viewport gets the full 1672px original, exactly like the prototype's CSS
          background: the cover-scaled photo renders ~940–1180px wide even on phones, and any
          smaller candidate gets resampled twice and looks visibly softer. */}
      <Image
        src="/assets/hero-kitchen.png"
        alt=""
        fill
        preload
        quality={90}
        sizes="1680px"
        className="object-cover object-right"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,32,.94)_0%,rgba(17,24,32,.72)_48%,rgba(17,24,32,.22)_100%)]"
      />
      <div className="relative mx-auto flex min-h-[clamp(420px,58vh,620px)] max-w-[1200px] flex-wrap items-center gap-[clamp(32px,5vw,64px)] px-[clamp(18px,4vw,48px)] pt-[clamp(48px,8vw,110px)] pb-[clamp(44px,7vw,96px)]">
        <div className="max-w-[680px] min-w-[min(100%,300px)] flex-[1_1_440px]">
          <div className="mb-[18px] font-mono text-[12px] tracking-[.24em] text-accent">
            MANDARIĆ METHOD
          </div>
          <h1 className="mb-5 font-display text-[length:clamp(46px,8.5vw,96px)] leading-[.94] font-semibold tracking-[.01em] text-balance uppercase">
            Znanje koje kuhinju pretvara u sistem.
          </h1>
          <p className="mb-7 max-w-[560px] text-[length:clamp(15px,1.6vw,17px)] leading-[1.6] text-[rgba(244,242,236,.78)]">
            Praktični programi, alati i iskustva za ljude koji žele voditi bolji, profitabilniji i
            organizovaniji hospitality biznis.
          </p>
          <div className="mb-[26px] flex flex-wrap gap-3">
            <AppLink
              className={`${primaryButton} min-h-[52px] gap-[10px] rounded-[10px] px-[26px] text-[15.5px] active:[transform:translateY(1px)]`}
            >
              Započni
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14 M13 6l6 6-6 6" />
              </svg>
            </AppLink>
            <ExploreLink
              className={`${ghostButton} min-h-[52px] rounded-[10px] px-6 text-[15px] hover:bg-[rgba(244,242,236,.08)]`}
            >
              Istraži programe
            </ExploreLink>
          </div>
          <div className="font-mono text-[12px] tracking-[.06em] text-grey">
            Hospitality consulting · Zero-waste sistemi · Forbes 30 Under 30
          </div>
        </div>
      </div>
    </section>
  );
}
