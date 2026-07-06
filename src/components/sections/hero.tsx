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

          <h1 className="whitespace-pre-line text-6xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl lg:text-[88px]">
            {t.title}
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-400">
            {t.description}
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact">
              {t.primaryButton}
            </Button>

            <Button href="#how-it-works" variant="outline">
              {t.secondaryButton}
            </Button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <div className="space-y-8">

              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                  01
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Requirements
                  </h3>
                  <p className="text-sm text-slate-400">
                    Understand business goals.
                  </p>
                </div>
              </div>

              <div className="ml-6 h-10 w-px bg-gradient-to-b from-cyan-500 to-slate-700" />

              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                  02
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Risk Analysis
                  </h3>
                  <p className="text-sm text-slate-400">
                    Prioritize what really matters.
                  </p>
                </div>
              </div>

              <div className="ml-6 h-10 w-px bg-gradient-to-b from-cyan-500 to-slate-700" />

              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                  03
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    AI Assistance
                  </h3>
                  <p className="text-sm text-slate-400">
                    Accelerate engineering decisions.
                  </p>
                </div>
              </div>

              <div className="ml-6 h-10 w-px bg-gradient-to-b from-cyan-500 to-slate-700" />

              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                  04
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Release Confidence
                  </h3>
                  <p className="text-sm text-slate-400">
                    Better releases through risk-first QA.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
