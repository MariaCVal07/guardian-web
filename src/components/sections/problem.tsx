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

            <ol className="m-0 list-none space-y-6 pl-14 md:pl-20">
              {t.flow.map((step) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="mt-2 block h-3.5 w-3.5 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.22)] flex-shrink-0" />

                  <article className="w-full rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-sm transition duration-200 ease-out hover:-translate-y-1 hover:border-slate-500/40 hover:bg-slate-900/80">
                    <div className="p-5 md:p-6">
                      <p className="m-0 text-base font-semibold leading-7 text-slate-100 md:text-lg">
                        {step}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
