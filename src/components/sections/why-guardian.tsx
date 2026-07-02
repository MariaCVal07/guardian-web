import React, { useEffect, useState } from "react";

type IconComponents = {
  Shield?: React.ComponentType<any>;
  Sparkles?: React.ComponentType<any>;
  CheckCircle?: React.ComponentType<any>;
};

export default function WhyGuardian() {
  const [Icons, setIcons] = useState<IconComponents>({});

  useEffect(() => {
    let mounted = true;
    // Try to load lucide-react at runtime. Use eval('require') to avoid TypeScript module resolution errors when the
    // dependency is not installed. If it fails, fall back to inline SVGs below.
    try {
      // eslint-disable-next-line no-eval
      const req: any = eval("require");
      const mod = req("lucide-react");
      if (mounted && mod) {
        setIcons({
          Shield: mod.Shield,
          Sparkles: mod.Sparkles,
          CheckCircle: mod.CheckCircle,
        });
      }
    } catch (e) {
      // dependency not available — fall back to inline svgs
    }
    return () => {
      mounted = false;
    };
  }, []);

  const ShieldIcon = Icons.Shield || (() => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l7 3v5c0 5-3.58 9.74-7 10-3.42-.26-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ));

  const SparklesIcon = Icons.Sparkles || (() => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l1.5 3 3 1.5-3 1.5L12 12l-1.5-3L7 7.5 10 6 11.5 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ));

  const CheckCircleIcon = Icons.CheckCircle || (() => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ));

  return (
    <section
      aria-labelledby="why-guardian-title"
      className="relative z-0 overflow-hidden bg-slate-900/95 py-20"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-800/30 px-3 py-1 text-sm text-slate-300">
            <span className="text-xs font-semibold tracking-wider text-slate-400">WHY GUARDIAN</span>
          </div>

          <h2 id="why-guardian-title" className="text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl">
            Engineering Before Automation
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Most QA teams automate everything equally. Guardian identifies the highest business risks first,
            then applies engineering judgement and AI assistance to maximize testing impact.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <article
              className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800/40 to-transparent p-6 shadow-[0_8px_30px_-12px_rgba(2,6,23,0.6)] transition hover:shadow-[0_12px_40px_-12px_rgba(2,6,23,0.7)]"
              aria-labelledby="wg-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-emerald-300">
                  <ShieldIcon />
                </div>
                <div>
                  <h3 id="wg-1" className="text-lg font-semibold text-slate-100">
                    Risk First
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Focus testing efforts on the scenarios that have the highest business impact.
                  </p>
                </div>
              </div>
            </article>

            <article
              className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800/40 to-transparent p-6 shadow-[0_8px_30px_-12px_rgba(2,6,23,0.6)] transition hover:shadow-[0_12px_40px_-12px_rgba(2,6,23,0.7)]"
              aria-labelledby="wg-2"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-cyan-300">
                  <SparklesIcon />
                </div>
                <div>
                  <h3 id="wg-2" className="text-lg font-semibold text-slate-100">
                    AI-Assisted Engineering
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Accelerate requirement analysis and test strategy while keeping human decision-making in control.
                  </p>
                </div>
              </div>
            </article>

            <article
              className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800/40 to-transparent p-6 shadow-[0_8px_30px_-12px_rgba(2,6,23,0.6)] transition hover:shadow-[0_12px_40px_-12px_rgba(2,6,23,0.7)]"
              aria-labelledby="wg-3"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-emerald-300">
                  <CheckCircleIcon />
                </div>
                <div>
                  <h3 id="wg-3" className="text-lg font-semibold text-slate-100">
                    Release Confidence
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Deliver software with meaningful test coverage and better release decisions.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
