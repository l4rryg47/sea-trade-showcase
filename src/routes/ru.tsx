import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/marsan-logo.png";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/ru")({
  head: () => ({
    meta: [
      { title: "Марсан Петролеум — экспорт нефти и нефтепродуктов" },
      { name: "description", content: "ООО «Марсан Петролеум», Москва: поставки сырой нефти и нефтепродуктов, экспортная торговля, фрахтование и нефтесервисные услуги." },
      { property: "og:title", content: "Марсан Петролеум — экспорт нефти и услуги" },
      { property: "og:description", content: "Московская компания: поставки сырой нефти и нефтепродуктов, экспортная торговля и нефтесервисные услуги." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ru" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ru" }],
  }),
  component: RuPage,
});

const COMPANY = {
  legalName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «МАРСАН ПЕТРОЛЕУМ»',
  shortName: 'ООО «МАРСАН ПЕТРОЛЕУМ»',
  director: "Алиев Анар Худаярович",
  role: "Генеральный директор",
  email: "marsanpetroleum@mail.ru",
  phone: "+7 (926) 749-9623",
  phoneHref: "tel:+79267499623",
  whatsapp: "https://wa.me/79267499623",
  address: "129090, г. Москва, Большая Сухаревская площадь, 9-й этаж, помещение 7, комната 1",
  mapHref: "https://www.google.com/maps/search/?api=1&query=129090%20Moscow%2C%20Bolshaya%20Sukharevskaya%20Square%209",
  inn: "7709464164",
  ogrn: "1157746683302",
  kpp: "770801001",
  okopf: "Общества с ограниченной ответственностью",
  okfs: "Частная собственность",
  capital: "21 000 руб.",
};

const exportsList = [
  ["Сырая нефть", "Лёгкие и средние сорта нефти для нефтеперерабатывающих заводов и трейдеров на условиях FOB, CIF и DESP."],
  ["Нефтепродукты", "Дизельное топливо EN 590, мазут М100, авиационный керосин, СУГ, нафта и битум — по согласованной спецификации."],
  ["Спотовые и контрактные партии", "Разовые отгрузки или ежемесячные контрактные объёмы с ценообразованием от согласованного бенчмарка."],
];
const servicesList = [
  ["Организация поставок", "Подбор, распределение и номинация партий под ваши требования по объёму и качеству."],
  ["Фрахт и логистика", "Подбор судна, график отгрузок, координация с портами и документальное сопровождение."],
  ["Инспекция и документы", "Независимая инспекция количества и качества, сертификаты SGS/Bureau Veritas, таможенное оформление."],
  ["Структурирование контрактов", "Подготовка договоров купли-продажи, условия оплаты, аккредитивы и координация расчётов."],
];
const facts = [
  ["2015", "Зарегистрирована в Москве"],
  ["Москва", "Головной офис"],
  ["ООО", "Организационно-правовая форма"],
  ["FOB · CIF", "Условия контрактов"],
];

function RuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Логотип Марсан Петролеум" className="h-10 w-auto rounded-sm bg-white px-2 py-1" />
            <span className="font-display text-xl font-extrabold tracking-tight">MARSAN<span className="text-gold">.</span></span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#exports" className="hover:text-foreground">Экспорт</a>
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#about" className="hover:text-foreground">О компании</a>
            <a href="#company" className="hover:text-foreground">Реквизиты</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground">EN</Link>
            <a href={`mailto:${COMPANY.email}`} className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Запросить цену</a>
          </div>
        </nav>
      </header>

      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img src={hero} alt="Морская нефтяная платформа и танкер на закате" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">Экспорт нефти · Энергетические услуги</p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] md:text-7xl">Поставляем энергию от месторождения на мировые рынки.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">«Марсан Петролеум» поставляет сырую нефть и нефтепродукты и обеспечивает логистику, инспекцию и документальное сопровождение каждой отгрузки.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#exports" className="rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground">Экспортные поставки</a>
            <a href="#services" className="rounded-sm border border-border px-6 py-3 font-semibold hover:bg-surface">Наши услуги</a>
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">01 — Экспорт</p>
            <h2 className="mt-4 text-4xl font-bold">Надёжные поставки нефтепереработчикам и трейдерам.</h2>
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">02 — Услуги</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold">От партии до контракта — полный цикл.</h2>
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">03 — О компании</p>
          <h2 className="mt-4 text-4xl font-bold">Один ответственный партнёр на всю сделку.</h2>
        </div>
        <div className="text-lg text-muted-foreground">
          <p>«Марсан Петролеум» — московское общество с ограниченной ответственностью, работающее в сфере экспорта сырой нефти и нефтепродуктов и сопутствующих услуг: sourcing, логистика, инспекция и расчёты.</p>
          <p className="mt-4">Мы работаем напрямую с производителями, нефтепереработчиками и покупателями, поэтому контрагенты получают единый контакт — от первого запроса до окончательного расчёта.</p>
        </div>
      </section>

      <section id="company" className="border-t border-border bg-surface py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">04 — Реквизиты</p>
          <h2 className="mt-4 text-4xl font-bold">Регистрационные данные.</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {[
              ["Полное наименование", COMPANY.legalName],
              ["Наименование на английском", 'OOO "MARSAN PETROLEUM"'],
              ["Генеральный директор", COMPANY.director],
              ["Юридический адрес", COMPANY.address],
              ["ИНН", COMPANY.inn],
              ["ОГРН", COMPANY.ogrn],
              ["КПП", COMPANY.kpp],
              ["ОКОПФ", COMPANY.okopf],
              ["ОКФС", COMPANY.okfs],
              ["Уставный капитал", COMPANY.capital],
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
            <h2 className="text-4xl font-bold">Обсудим партию или контракт.</h2>
            <p className="mt-3 text-muted-foreground">Направьте запрос по электронной почте, телефону или в WhatsApp — ответим с условиями и наличием.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={`mailto:${COMPANY.email}`} className="rounded-sm bg-primary px-8 py-4 font-semibold text-primary-foreground">Написать нам</a>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-sm border border-border px-8 py-4 font-semibold hover:bg-surface">WhatsApp</a>
            </div>
          </div>
          <dl className="grid gap-6 text-sm">
            <div>
              <dt className="uppercase tracking-wider text-muted-foreground">Электронная почта</dt>
              <dd className="mt-1 text-lg"><a href={`mailto:${COMPANY.email}`} className="hover:text-gold">{COMPANY.email}</a></dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-muted-foreground">Телефон и WhatsApp</dt>
              <dd className="mt-1 text-lg"><a href={COMPANY.phoneHref} className="hover:text-gold">{COMPANY.phone}</a></dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-muted-foreground">Адрес</dt>
              <dd className="mt-1 text-lg">{COMPANY.address}</dd>
              <dd className="mt-2"><a href={COMPANY.mapHref} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-4">Открыть в Google Maps</a></dd>
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
          <img src={logo} alt="Логотип Марсан Петролеум" className="h-12 w-auto self-start rounded-sm bg-white px-2 py-1" />
          <span className="font-display font-bold text-foreground">МАРСАН ПЕТРОЛЕУМ</span>
          <span>{COMPANY.legalName} · ИНН {COMPANY.inn} · ОГРН {COMPANY.ogrn} · КПП {COMPANY.kpp}</span>
          <span>© 2026 {COMPANY.shortName}. Все права защищены.</span>
        </div>
      </footer>
    </div>
  );
}
