const AUDIENCES = [
  {
    n: "01",
    title: "Vlasnici i menadžeri",
    text: "Profit, food cost, standardi i tim — pod kontrolom, s brojevima.",
  },
  {
    n: "02",
    title: "Profesionalni chefovi",
    text: "Zero-waste sistemi, organizacija kuhinje i vođenje ljudi bez sagorijevanja.",
  },
  {
    n: "03",
    title: "Kućni kuhari",
    text: "Bolje kuhanje i manje bacanja — profesionalne navike za kućnu kuhinju.",
  },
];

export function ForWhom() {
  return (
    <section className="mx-auto max-w-[1200px] px-[clamp(18px,4vw,48px)] pt-[clamp(40px,6vw,72px)] pb-2">
      <h2 className="mb-5 font-mono text-[12px] tracking-[.2em] text-grey">ZA KOGA</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(18px,3vw,36px)]">
        {AUDIENCES.map((a) => (
          <div key={a.n} className="border-t-2 border-ink pt-4">
            <div className="mb-2 font-mono text-[12px] text-accent">{a.n}</div>
            <h3 className="mb-[6px] text-[17px] font-semibold">{a.title}</h3>
            <p className="text-[14px] text-grey">{a.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
