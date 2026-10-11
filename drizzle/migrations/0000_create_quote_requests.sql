CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  locale text NOT NULL DEFAULT 'en',
  name text NOT NULL,
  email text NOT NULL,
  company text,
  product_service text NOT NULL,
  volume text NOT NULL,
  destination text NOT NULL,
  delivery_terms text NOT NULL,
  message text
);

GRANT INSERT ON public.quote_requests TO anon;
GRANT ALL ON public.quote_requests TO service_role;

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
  ON public.quote_requests FOR INSERT TO anon
  WITH CHECK (true);