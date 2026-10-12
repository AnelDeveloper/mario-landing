import type { ReactNode } from "react";

const TOOLS = [
  { name: "Food Cost Kalkulator", value: "28%" },
  { name: "Kalkulator prinosa i otpada", value: "62% prinos" },
  { name: "Brzi audit menija", value: "8 pitanja" },
];

const EXPERIENCES = [
  { name: "Cook, Rest & Reset", meta: "vikend" },
  { name: "Amber Chef's Table", meta: "Sarajevo" },
  { name: "Private Masterclass", meta: "mala grupa" },
];

/** White card. Its eyebrow is the card's heading (h2, as for "ZA KOGA"); Preflight keeps it looking like the prototype's <div>. */
function Card({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div className="rounded-[14px] border border-[rgba(17,24,32,.09)] bg-white p-6">
      <h2 className="mb-[14px] font-mono text-[11.5px] tracking-[.18em] text-grey">{eyebrow}</h2>
      {children}
    </div>
  );
}

// role="list": Safari/VoiceOver drops list semantics from <ul>s with `list-style: none` (Preflight).
export function Offerings() {
  return (
    <section className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,48px)] pt-2 pb-[clamp(40px,6vw,72px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(18px,3vw,28px)]">
        <Card eyebrow="PROFESIONALNI ALATI">
          <ul role="list">
            {TOOLS.map((t) => (
              <li
                key={t.name}
                className="flex items-baseline justify-between border-b border-[rgba(17,24,32,.08)] py-[10px] last:border-b-0"
              >
                <span className="text-[14.5px] font-medium">{t.name}</span>
                <span className="font-mono text-[13px] text-accent">{t.value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-[14px] text-[13.5px] text-grey">
            Instrumenti za svakodnevne odluke — rade i offline, rezultati se čuvaju.
          </p>
        </Card>

        <Card eyebrow="UŽIVO SESIJE">
          <div className="mb-[6px] font-mono text-[12.5px] text-accent">3. SEPTEMBAR · 18:00</div>
          <h3 className="mb-2 text-[17px] leading-[1.35] font-semibold">
            Kako prepoznati gdje restoran gubi novac
          </h3>
          <p className="text-[13.5px] text-grey">
            Mjesečna Q&amp;A predavanja s Mariom — pitanja unaprijed, snimke ostaju u aplikaciji.
          </p>
        </Card>

        <Card eyebrow="PREMIUM ISKUSTVA">
          <ul role="list">
            {EXPERIENCES.map((e) => (
              <li
                key={e.name}
                className="border-b border-[rgba(17,24,32,.08)] py-[9px] text-[14.5px] font-medium last:border-b-0"
              >
                {/* single text nodes (incl. the trailing space) so text shapes exactly like the prototype */}
                {`${e.name} `}
                <span className="font-normal text-grey">{`· ${e.meta}`}</span>
              </li>
            ))}
          </ul>
          <p className="mt-[14px] text-[13.5px] text-grey">
            Mala grupa, stol uz pass i vrijeme za pitanja koja se ne stignu postaviti online.
          </p>
        </Card>
      </div>
    </section>
  );
}
