import Link from "next/link";
import { Button } from "@/components/ui/button";
import { messages, type Locale } from "@/lib/i18n";

type HeroProps = {
  locale?: Locale;
};

export default function Hero({ locale = "en" }: HeroProps) {
  const t = messages[locale].hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950">
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="mx-auto flex min-h-[720px] max-w-7xl flex-col justify-center gap-12 px-6 py-24 sm:px-8 lg:flex-row lg:items-center lg:gap-24 lg:px-12">
        <div className="flex-1">
          <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-slate-700 bg-slate-800/40 px-3 py-1 text-sm font-medium text-slate-300">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              {t.badge}
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight text-slate-100 sm:text-6xl lg:text-[64px]">
            {t.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-7 text-slate-300">
            {t.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full bg-cyan-600 text-white shadow-md hover:brightness-105">
              <Link href="#contact">{t.primaryButton}</Link>
            </Button>

            <Button variant="outline" asChild className="rounded-full border-slate-600 text-slate-200">
              <Link href="#how-it-works">{t.secondaryButton}</Link>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            <li className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/30 px-3 py-1 text-sm font-medium text-slate-200">
              <span className="text-emerald-400">✓</span>
              Requirement Analysis
            </li>
            <li className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/30 px-3 py-1 text-sm font-medium text-slate-200">
              <span className="text-emerald-400">✓</span>
              Risk-Based Testing
            </li>
            <li className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/30 px-3 py-1 text-sm font-medium text-slate-200">
              <span className="text-emerald-400">✓</span>
              AI-Assisted QA
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto w-full max-w-[640px] rounded-3xl p-6 sm:p-8">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-800/30 to-transparent blur-[30px] opacity-60" />

            <div className="relative z-10 flex h-[560px] items-center justify-center">
              {/* Central node */}
              <div className="relative flex items-center justify-center">
                <div className="absolute -left-24 -top-12 flex flex-col items-center gap-3">
                  <div className="rounded-2xl border border-slate-700 bg-slate-800 p-3 text-sm text-slate-200 shadow">Requirements</div>
                  <div className="h-0.5 w-24 bg-slate-600" />
                </div>

                <div className="rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 p-6 shadow-[0_20px_60px_-20px_rgba(59,130,246,0.2)]">
                  <div className="h-8 w-8 rounded-full bg-white/90" />
                </div>

                {/* connections */}
                <div className="absolute left-1/2 top-12 h-[1px] w-40 -translate-x-1/2 bg-slate-500/60" />
                <div className="absolute left-1/2 bottom-12 h-[1px] w-44 -translate-x-1/2 bg-slate-500/60" />

                <div className="absolute -right-24 -top-8 flex flex-col items-center gap-3">
                  <div className="rounded-2xl border border-slate-700 bg-white/5 p-3 text-sm text-slate-200 shadow">Risk</div>
                  <div className="h-0.5 w-24 bg-slate-600" />
                </div>

                <div className="absolute -right-4 top-36 flex flex-col items-center gap-3">
                  <div className="rounded-2xl border border-slate-700 bg-white/5 p-3 text-sm text-slate-200 shadow">AI</div>
                </div>

                <div className="absolute -left-24 bottom-24 flex flex-col items-center gap-3">
                  <div className="rounded-2xl border border-slate-700 bg-white/5 p-3 text-sm text-slate-200 shadow">Tests</div>
                </div>

                {/* subtle node glows */}
                <div className="pointer-events-none absolute -bottom-36 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-cyan-600/10 blur-3xl" />
              </div>

              {/* floating cards grid */}
              <div className="absolute left-8 top-12 grid gap-4">
                <div className="w-40 rounded-2xl border border-slate-700 bg-slate-800/40 p-3 text-sm text-slate-200 shadow">Coverage 94%</div>
                <div className="w-48 rounded-2xl border border-slate-700 bg-white/3 p-3 text-sm text-slate-200 shadow">Critical paths 12</div>
              </div>

              <div className="absolute right-8 bottom-12 grid gap-4">
                <div className="w-44 rounded-2xl border border-slate-700 bg-white/3 p-3 text-sm text-slate-200 shadow">Signals</div>
                <div className="w-36 rounded-2xl border border-slate-700 bg-slate-800/40 p-3 text-sm text-slate-200 shadow">Decisions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
