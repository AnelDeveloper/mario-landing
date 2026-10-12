import Image from "next/image";
import { primaryButton } from "./buttons";
import { AppLink } from "./AppLink";

/** Closing CTA and the footer row, sharing one kitchen background under an ink overlay. */
export function FinalCta() {
  return (
    <div className="relative bg-ink text-paper">
      {/* Cover-scaled: on phones and tablets it renders ~1000–1270px wide, wider than the
          774px source, so every viewport should get the full-resolution image. */}
      <Image
        src="/assets/cta-kitchen-wide.png"
        alt=""
        fill
        sizes="(max-width: 1023px) 1100px, 100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[rgba(17,24,32,.82)]" />

      <section
        aria-labelledby="cta-title"
        className="relative mx-auto max-w-[1200px] px-[clamp(18px,4vw,48px)] py-[clamp(52px,8vw,96px)] text-center"
      >
        <h2
          id="cta-title"
          className="mb-3 font-display text-[length:clamp(34px,5vw,56px)] leading-none font-semibold text-balance uppercase"
        >
          Standard bez kompromisa.
        </h2>
        <p className="mx-auto mb-[26px] max-w-[520px] text-[rgba(244,242,236,.75)]">
          Uđi u aplikaciju i prođi program, alate i rezervacije — prijava emailom, bez lozinke.
        </p>
        <AppLink className={`${primaryButton} min-h-[52px] rounded-[10px] px-[30px] text-[15.5px]`}>
          Započni
        </AppLink>
      </section>

      <footer className="relative border-t border-[rgba(244,242,236,.12)]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-[10px] px-[clamp(18px,4vw,48px)] py-5">
          <span className="font-display text-[15px] font-semibold tracking-[.12em] text-paper">
            MANDARIĆ METHOD
          </span>
          <span className="font-mono text-[11.5px] text-grey">
            © 2026 Mandarić Method
          </span>
        </div>
      </footer>
    </div>
  );
}
