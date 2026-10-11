import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitQuoteRequest } from "@/lib/quote.functions";

const strings = {
  en: {
    name: "Your name",
    email: "Email",
    company: "Company (optional)",
    product: "Product or service",
    productPlaceholder: "e.g. Diesel EN 590, crude oil, chartering",
    volume: "Volume",
    volumePlaceholder: "e.g. 10,000 MT / month",
    destination: "Destination",
    destinationPlaceholder: "e.g. Port of Rotterdam",
    terms: "Delivery terms",
    message: "Message (optional)",
    submit: "Send request",
    sending: "Sending…",
    success: "Request received — we'll reply with terms and availability.",
    error: "Something went wrong. Please try again or email us directly.",
    required: "Please fill in all required fields.",
  },
  ru: {
    name: "Ваше имя",
    email: "Электронная почта",
    company: "Компания (необязательно)",
    product: "Продукт или услуга",
    productPlaceholder: "напр. дизель EN 590, сырая нефть, фрахт",
    volume: "Объём",
    volumePlaceholder: "напр. 10 000 т / месяц",
    destination: "Пункт назначения",
    destinationPlaceholder: "напр. порт Роттердам",
    terms: "Условия поставки",
    message: "Сообщение (необязательно)",
    submit: "Отправить запрос",
    sending: "Отправка…",
    success: "Запрос получен — мы ответим с условиями и наличием.",
    error: "Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую.",
    required: "Пожалуйста, заполните все обязательные поля.",
  },
} as const;

const deliveryOptions = {
  en: ["FOB", "CIF", "DESP", "DAP", "EXW", "Other / to be discussed"],
  ru: ["FOB", "CIF", "DESP", "DAP", "EXW", "Другое / обсуждается"],
} as const;

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none";

export function QuoteForm({ locale }: { locale: "en" | "ru" }) {
  const t = strings[locale];
  const submit = useServerFn(submitQuoteRequest);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    const fd = new FormData(e.currentTarget);
    const data = {
      locale,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      productService: String(fd.get("productService") ?? ""),
      volume: String(fd.get("volume") ?? ""),
      destination: String(fd.get("destination") ?? ""),
      deliveryTerms: String(fd.get("deliveryTerms") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    if (!data.name.trim() || !data.email.trim() || !data.productService.trim() || !data.volume.trim() || !data.destination.trim() || !data.deliveryTerms.trim()) {
      setFormError(t.required);
      return;
    }
    setStatus("sending");
    try {
      await submit({ data });
      setStatus("success");
    } catch {
      setStatus("error");
      setFormError(t.error);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-gold/40 bg-background p-8">
        <p className="text-lg font-semibold text-gold">{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-sm border border-border bg-background p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required maxLength={100} placeholder={t.name} className={inputClass} aria-label={t.name} />
        <input name="email" type="email" required maxLength={255} placeholder={t.email} className={inputClass} aria-label={t.email} />
      </div>
      <input name="company" maxLength={200} placeholder={t.company} className={inputClass} aria-label={t.company} />
      <input name="productService" required maxLength={200} placeholder={t.productPlaceholder} className={inputClass} aria-label={t.product} />
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="volume" required maxLength={100} placeholder={t.volumePlaceholder} className={inputClass} aria-label={t.volume} />
        <input name="destination" required maxLength={200} placeholder={t.destinationPlaceholder} className={inputClass} aria-label={t.destination} />
      </div>
      <select name="deliveryTerms" required defaultValue="" className={inputClass} aria-label={t.terms}>
        <option value="" disabled>{t.terms}</option>
        {deliveryOptions[locale].map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <textarea name="message" maxLength={2000} rows={4} placeholder={t.message} className={inputClass} aria-label={t.message} />
      {formError && <p className="text-sm text-destructive">{formError}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-sm bg-primary px-8 py-4 font-semibold text-primary-foreground disabled:opacity-60"
      >
        {status === "sending" ? t.sending : t.submit}
      </button>
    </form>
  );
}
