import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const quoteSchema = z.object({
  locale: z.enum(["en", "ru"]).default("en"),
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(200).optional().default(""),
  productService: z.string().trim().min(1).max(200),
  volume: z.string().trim().min(1).max(100),
  destination: z.string().trim().min(1).max(200),
  deliveryTerms: z.string().trim().min(1).max(100),
  message: z.string().trim().max(2000).optional().default(""),
});

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((data) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("quote_requests").insert({
      locale: data.locale,
      name: data.name,
      email: data.email,
      company: data.company || null,
      product_service: data.productService,
      volume: data.volume,
      destination: data.destination,
      delivery_terms: data.deliveryTerms,
      message: data.message || null,
    });
    if (error) {
      console.error("quote_requests insert failed:", error.code);
      throw new Error("Submission failed");
    }
    return { ok: true };
  });
