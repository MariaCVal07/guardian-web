"use client";

import { useState } from "react";
import Container from "../ui/container";
import { messages, type Locale } from "@/lib/i18n";

type RBQEFrameworkProps = {
  locale?: Locale;
};

export default function RBQEFramework({
  locale = "en",
}: RBQEFrameworkProps) {
  const t = messages[locale].rbqeFramework;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="rbqe-framework"
      className="flex min-h-screen items-center scroll-mt-24 bg-slate-950 py-20"
    >
      <Container>

        {/* Header */}

        <div className="mx-auto mb-14 max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">
            {t.badge}
          </span>

          <h2
            id="rbqe-framework-title"
            className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl"
          >
            {t.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {t.description}
          </p>

        </div>

        {/* Workflow */}

        <div className="relative mx-auto mt-12 max-w-6xl">

          <div className="flex items-center justify-between">

            {t.steps.map((step, index) => (

              <div
                key={step.title}
                className="flex flex-1 items-center"
              >

                <button
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className="relative z-20 flex flex-col items-center"
                >

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full border text-base font-bold transition-all duration-300 ${
                      activeStep === index
                        ? "scale-110 border-cyan-400 bg-cyan-500/20 text-cyan-300 shadow-[0_0_35px_rgba(34,211,238,.45)]"
                        : "border-slate-700 bg-slate-900 text-slate-500 hover:border-cyan-500/50 hover:text-cyan-300"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span
                    className={`mt-4 text-sm font-medium transition-colors ${
                      activeStep === index
                        ? "text-cyan-300"
                        : "text-slate-500"
                    }`}
                  >
                    {step.title}
                  </span>

                </button>

                {index < t.steps.length - 1 && (

                  <div className="mx-2 flex flex-1 items-center">

                    <div
                      className={`h-[2px] flex-1 transition-all duration-500 ${
                        index < activeStep
                          ? "bg-cyan-400"
                          : "bg-slate-700"
                      }`}
                    />

                    <svg
                      viewBox="0 0 24 24"
                      className={`h-5 w-5 transition-all duration-500 ${
                        index < activeStep
                          ? "text-cyan-400"
                          : "text-slate-700"
                      }`}
                      fill="currentColor"
                    >
                      <path d="M8 5l8 7-8 7V5z" />
                    </svg>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

        {/* Information Panel */}
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 lg:p-7">
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-500/10 font-bold text-cyan-300">
              {String(activeStep + 1).padStart(2, "0")}
            </div>

            <span className="text-xs font-semibold uppercase tracking-[.25em] text-cyan-300">
              Framework Step
            </span>
          </div>

          <h3 className="mt-4 text-3xl font-bold text-white">
            {t.steps[activeStep].title}
          </h3>

          <p className="mt-3 max-w-3xl text-lg leading-7 text-slate-400">
            {t.steps[activeStep].description}
          </p>

          {("aiContribution" in t.steps[activeStep] || "outcome" in t.steps[activeStep]) && (

            <div className="mt-6 grid gap-6 border-t border-slate-800 pt-6 lg:grid-cols-2">

              {"aiContribution" in t.steps[activeStep] && (

                <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">

                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">
                    AI Contribution
                  </h4>

                  <p className="leading-7 text-slate-400">
                    {String(t.steps[activeStep].aiContribution)}
                  </p>

                </div>

              )}

              {"outcome" in t.steps[activeStep] && (

                <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">

                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">
                    Expected Outcome
                  </h4>

                  <p className="leading-7 text-slate-400">
                    {String(t.steps[activeStep].outcome)}
                  </p>

                </div>

              )}

            </div>

          )}

        </div>

      </Container>

    </section>

  );
}