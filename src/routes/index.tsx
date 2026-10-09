import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian Petroleum — Crude Oil Exports & Energy Services" },
      { name: "description", content: "Meridian Petroleum delivers crude oil exports, refined products and end-to-end oilfield services worldwide." },
      { property: "og:title", content: "Meridian Petroleum — Oil Exports & Services" },
      { property: "og:description", content: "Crude exports, refined products and oilfield services across global markets." },
    ],
  }),
  component: Index,
});

const exportsList = [
  ["Crude Oil Export", "Bonny Light and Qua Iboe grade crude supplied to refiners on FOB and CIF terms."],
  ["Refined Products", "AGO, PMS, Jet A-1 and LPG sourced, stored and shipped to spec."],
  ["Marine Logistics", "Chartered tanker fleet, ship-to-ship transfers and vessel inspection."],
];
const servicesList = [
  ["Drilling Support", "Rig mobilisation, well intervention and completion services."],
  ["Pipeline & Facilities", "Construction, inspection and maintenance of flowlines and terminals."],
  ["Engineering & Consulting", "Reservoir studies, project management and HSE advisory."],
  ["Storage & Terminals", "Secure tank-farm storage with metered, inspected loading."],
];
const stats = [["2.4M", "Barrels exported monthly"], ["18", "Countries served"], ["25+", "Years in operation"], ["0", "Lost-time incidents in 2025"]];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#" className="font-display text-xl font-extrabold tracking-tight">MERIDIAN<span className="text-gold">.</span></a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#exports" className="hover:text-foreground">Exports</a>
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
          <a href="#contact" className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Request a quote</a>
        </nav>
      </header>

      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img src={hero} alt="Offshore oil platform and tanker at dusk" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">Oil exports · Energy services</p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] md:text-7xl">Moving energy from wellhead to world markets.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Integrated crude export, refined product supply and oilfield services — delivered safely, on spec and on schedule.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#exports" className="rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground">Explore exports</a>
            <a href="#services" className="rounded-sm border border-border px-6 py-3 font-semibold hover:bg-surface">Our services</a>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="border-border px-6 py-10 [&:not(:last-child)]:border-r">
              <div className="font-display text-4xl font-extrabold text-gold">{n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="exports" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">01 — Exports</p>
            <h2 className="mt-4 text-4xl font-bold">Reliable supply to refiners worldwide.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border">
            {exportsList.map(([t, d]) => (
              <div key={t} className="bg-background p-8 transition-colors hover:bg-surface">
                <h3 className="text-xl font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-surface py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">02 — Services</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold">Upstream and midstream expertise, end to end.</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {servicesList.map(([t, d], i) => (
              <div key={t} className="rounded-sm border border-border bg-background p-8">
                <div className="font-display text-sm text-gold">0{i + 1}</div>
                <h3 className="mt-6 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">03 — About</p>
          <h2 className="mt-4 text-4xl font-bold">Built on safety, integrity and delivery.</h2>
        </div>
        <p className="text-lg text-muted-foreground">For over two decades, Meridian Petroleum has connected producing fields with buyers across Europe, Asia and the Americas. Our teams combine trading know-how with hands-on field operations, giving partners one accountable partner across the value chain.</p>
      </section>

      <section id="contact" className="border-t border-border bg-surface py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-bold">Let's talk cargo or contracts.</h2>
            <p className="mt-3 text-muted-foreground">info@meridianpetroleum.com · +234 800 000 0000</p>
          </div>
          <a href="mailto:info@meridianpetroleum.com" className="rounded-sm bg-primary px-8 py-4 font-semibold text-primary-foreground">Contact our team</a>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-8 text-sm text-muted-foreground">© 2026 Meridian Petroleum. All rights reserved.</footer>
    </div>
  );
}
