import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/marsan-logo.png";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marsan Petroleum — Crude Oil Exports & Petroleum Products" },
      { name: "description", content: "Marsan Petroleum (OOO \"Marsan Petroleum\"), Moscow: crude oil and petroleum product supply, export trading, chartering and oilfield services." },
      { property: "og:title", content: "Marsan Petroleum — Oil Exports & Services" },
      { property: "og:description", content: "Moscow-based crude oil and petroleum product supply, export trading and oilfield services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const COMPANY = {
  legalName: 'LIMITED LIABILITY COMPANY "MARSAN PETROLEUM"',
  shortName: 'OOO "MARSAN PETROLEUM"',
  director: "Aliev Anar Khudayarovich",
  role: "General Director",
  email: "marsanpetroleum@mail.ru",
  phone: "+7 (926) 749-9623",
  phoneHref: "tel:+79267499623",
  whatsapp: "https://wa.me/79267499623",
  address: "129090, Moscow, Bolshaya Sukharevskaya Square, 9th floor, premises 7, room 1",
  mapHref: "https://www.google.com/maps/search/?api=1&query=129090%20Moscow%2C%20Bolshaya%20Sukharevskaya%20Square%209",
  inn: "7709464164",
  ogrn: "1157746683302",
  kpp: "770801001",
  okopf: "Limited Liability Companies",
  okfs: "Private property",
  capital: "RUB 21,000",
};

const exportsList = [
  ["Crude Oil", "Light and medium crude grades offered to refiners and traders on FOB, CIF and DESP terms."],
  ["Petroleum Products", "Diesel fuel EN 590, fuel oil M100, jet fuel, LPG, naphtha and bitumen supplied to specification."],
  ["Spot & Contract Cargoes", "One-off shipments or monthly contract volumes, priced against the agreed benchmark."],
];
const servicesList = [
  ["Cargo Origination", "Sourcing, allocation and nomination of cargoes against your volume and quality requirements."],
  ["Chartering & Logistics", "Vessel selection, shipment scheduling, port coordination and documentation."],
  ["Inspection & Documentation", "Independent quantity and quality inspection, SGS/Bureau Veritas certificates, customs paperwork."],
  ["Contract Structuring", "SPA drafting, payment terms, letters of credit and settlement coordination."],
];
const facts = [
  ["2015", "Registered in Moscow"],
  ["Moscow", "Head office"],
  ["LLC", "Legal form (OOO)"],
  ["FOB · CIF", "Contract terms"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Marsan Petroleum logo" className="h-10 w-auto rounded-sm bg-white px-2 py-1" />
            <span className="font-display text-xl font-extrabold tracking-tight">MARSAN<span className="text-gold">.</span></span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#exports" className="hover:text-foreground">Exports</a>
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#company" className="hover:text-foreground">Company details</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/ru" className="text-sm font-semibold text-muted-foreground hover:text-foreground">RU</Link>
            <a href={`mailto:${COMPANY.email}`} className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Request a quote</a>
          </div>
        </nav>
      </header>

      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img src={hero} alt="Offshore oil platform and tanker at dusk" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">Oil exports · Energy services</p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] md:text-7xl">Moving energy from wellhead to world markets.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Marsan Petroleum supplies crude oil and petroleum products, and handles the logistics, inspection and paperwork behind every shipment.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#exports" className="rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground">Explore exports</a>
            <a href="#services" className="rounded-sm border border-border px-6 py-3 font-semibold hover:bg-surface">Our services</a>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {facts.map(([n, l]) => (
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
            <h2 className="mt-4 text-4xl font-bold">Reliable supply to refiners and traders.</h2>
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
          <h2 className="mt-4 max-w-2xl text-4xl font-bold">From cargo to contract, end to end.</h2>
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
          <h2 className="mt-4 text-4xl font-bold">One accountable partner across the deal.</h2>
        </div>
        <div className="text-lg text-muted-foreground">
          <p>Marsan Petroleum is a Moscow-based limited liability company working in crude oil and petroleum product exports and the services around them: sourcing, logistics, inspection and settlement.</p>
          <p className="mt-4">We deal directly with producers, refiners and buyers, so counterparties get a single contact from first enquiry through to final payment.</p>
        </div>
      </section>

      <section id="company" className="border-t border-border bg-surface py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">04 — Company details</p>
          <h2 className="mt-4 text-4xl font-bold">Registered information.</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {[
              ["Full legal name", COMPANY.legalName],
              ["English name", COMPANY.shortName],
              ["General Director", COMPANY.director],
              ["Registered address", COMPANY.address],
              ["INN", COMPANY.inn],
              ["OGRN", COMPANY.ogrn],
              ["KPP", COMPANY.kpp],
              ["Legal form (OKOPF)", COMPANY.okopf],
              ["Ownership type (OKFS)", COMPANY.okfs],
              ["Authorized capital", COMPANY.capital],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-2 bg-background p-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <dt className="shrink-0 text-sm uppercase tracking-wider text-muted-foreground">{k}</dt>
                <dd className="font-medium tabular-nums sm:text-right">{v}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">Let's talk cargo or contracts.</h2>
            <p className="mt-3 text-muted-foreground">Send a request by email, phone or WhatsApp — we reply with terms and availability.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={`mailto:${COMPANY.email}`} className="rounded-sm bg-primary px-8 py-4 font-semibold text-primary-foreground">Email us</a>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-sm border border-border px-8 py-4 font-semibold hover:bg-surface">WhatsApp</a>
            </div>
          </div>
          <dl className="grid gap-6 text-sm">
            <div>
              <dt className="uppercase tracking-wider text-muted-foreground">Email</dt>
              <dd className="mt-1 text-lg"><a href={`mailto:${COMPANY.email}`} className="hover:text-gold">{COMPANY.email}</a></dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-muted-foreground">Phone &amp; WhatsApp</dt>
              <dd className="mt-1 text-lg"><a href={COMPANY.phoneHref} className="hover:text-gold">{COMPANY.phone}</a></dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-muted-foreground">Address</dt>
              <dd className="mt-1 text-lg">{COMPANY.address}</dd>
              <dd className="mt-2"><a href={COMPANY.mapHref} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-4">Open in Google Maps</a></dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-muted-foreground">{COMPANY.role}</dt>
              <dd className="mt-1 text-lg">{COMPANY.director}</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground">
          <img src={logo} alt="Marsan Petroleum logo" className="h-12 w-auto self-start rounded-sm bg-white px-2 py-1" />
          <span className="font-display font-bold text-foreground">MARSAN PETROLEUM</span>
          <span>{COMPANY.legalName} · INN {COMPANY.inn} · OGRN {COMPANY.ogrn} · KPP {COMPANY.kpp}</span>
          <span>© 2026 {COMPANY.shortName}. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
