import Container from "../ui/container";
import { messages, type Locale } from "@/lib/i18n";

type ProblemProps = {
  locale?: Locale;
};

export default function Problem({ locale = "en" }: ProblemProps) {
  const t = messages[locale].problem;

  return (
    <section className="bg-slate-950 text-slate-100 py-16 lg:py-24" aria-labelledby="problem-heading">
      <Container>
        <div className="flex flex-col gap-10">
          <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            {t.badge}
          </span>

          <div className="space-y-5 md:space-y-6">
            <h2 id="problem-heading" className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="block">{t.title}</span>
              <span className="block text-cyan-300">{t.highlight}</span>
            </h2>

            <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg">
              {t.description}
            </p>
          </div>

          <div className="relative pt-6">
            <div
              className="pointer-events-none absolute left-5 top-0 bottom-0 w-px rounded-full bg-gradient-to-b from-cyan-400/50 to-slate-500/20"
              aria-hidden="true"
            />

            <div className="grid gap-5 md:grid-cols-4"></div>
              {t.flow.map((step, index) => (
              <article
                key={step}
                className="relative rounded-3xl border border-slate-700 bg-slate-900/60 p-6 transition hover:border-cyan-500/30 hover:-translate-y-1"
              >
                <div className="mb-6 text-sm font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="text-lg font-medium leading-8 text-slate-100">
                  {step}
                </p>

                {index < t.flow.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-cyan-500/30 md:block" />
                )}
              </article>
            ))}
            </div>
        </div>
      </Container>
    </section>
  );
}
