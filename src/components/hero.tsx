import Link from "next/link";
import { Button } from "@/components/ui/button";
import { messages, type Locale } from "@/lib/i18n";

type HeroProps = {
  locale?: Locale;
};

export default function Hero({ locale = "en" }: HeroProps) {
  const t = messages[locale].hero;

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-[720px] max-w-7xl flex-col justify-center gap-12 px-6 py-20 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl flex-1">
          <div className="mb-6 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">
            {t.badge}
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {t.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {t.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full">
              <Link href="#contact">{t.primaryButton}</Link>
            </Button>
            <Button variant="outline" asChild className="rounded-full">
              <Link href="#how-it-works">{t.secondaryButton}</Link>
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto flex aspect-square max-w-[560px] items-center justify-center rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fafc_100%)] p-6 shadow-[0_24px_90px_-40px_rgba(15,23,42,0.35)] sm:p-8">
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_45%)]" />

            <div className="relative w-full">
              <div className="absolute left-1/2 top-0 h-16 w-px -translate-x-1/2 bg-slate-300" />
              <div className="absolute left-1/2 top-20 h-16 w-px -translate-x-1/2 bg-slate-300" />
              <div className="absolute left-0 top-1/2 h-px w-24 -translate-y-1/2 bg-slate-300" />
              <div className="absolute right-0 top-1/2 h-px w-24 -translate-y-1/2 bg-slate-300" />

              <div className="mx-auto flex w-48 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <div className="text-center">
                  <div className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                    AI
                  </div>
                  <div className="mt-1 text-lg font-semibold text-slate-900">Risk Intelligence</div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                    Risk
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">
                    Critical paths mapped
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                    Quality
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">
                    Scenarios prioritized
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-950 p-4 text-slate-100 shadow-sm">
                <div className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                  Engineering
                </div>
                <pre className="mt-3 overflow-x-auto text-sm leading-6">
                  <code>{`if (signal > threshold) {
  reviewRisk();
  prioritizeTests();
}`}</code>
                </pre>
              </div>

              <div className="absolute -left-3 top-24 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
                Graph
              </div>

              <div className="absolute -right-3 bottom-12 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
                Signals
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
