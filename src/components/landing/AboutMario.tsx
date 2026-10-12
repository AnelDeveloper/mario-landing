import Image from "next/image";
import { BIO } from "@/content/bio";

export function AboutMario() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-[clamp(28px,5vw,64px)] px-[clamp(18px,4vw,48px)] pt-0 pb-[clamp(48px,7vw,88px)]">
      <div className="min-w-[min(100%,260px)] flex-[0_1_340px]">
        <div className="aspect-[4/5] max-w-[360px] overflow-hidden rounded-[14px]">
          {/* Like the prototype's <img>: the full 516×645 source at every pixel density, scaled
              down by the browser to the ~340px box. A smaller candidate (384w) blurs the face. */}
          <Image
            src="/assets/mario-2026.png"
            alt="Mario Mandarić, chef"
            width={516}
            height={645}
            quality={90}
            className="block h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="min-w-[min(100%,280px)] flex-[1_1_380px]">
        <div className="mb-[14px] font-mono text-[12px] tracking-[.2em] text-grey">O MARIJU</div>
        <h2 className="mb-4 font-display text-[length:clamp(32px,4.5vw,52px)] leading-none font-semibold uppercase">
          Mario Mandarić
        </h2>
        <p className="mb-[14px] text-[16px] leading-[1.6]">{BIO.line}</p>
        <p className="mb-5 text-[14.5px] leading-[1.6] text-grey">{BIO.extra}</p>
        <div className="flex flex-wrap gap-x-[18px] gap-y-2 font-mono text-[12px] text-grey">
          <span>· Hospitality consulting</span>
          <span>· Kulinarska edukacija</span>
          <span>· Zero-waste sistemi</span>
        </div>
      </div>
    </section>
  );
}
