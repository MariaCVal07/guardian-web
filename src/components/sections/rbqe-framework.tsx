import Container from "../ui/container";
import { messages, type Locale } from "@/lib/i18n";

type RBQEFrameworkProps = {
  locale?: Locale;
};

export default function RBQEFramework({
  locale = "en",
}: RBQEFrameworkProps) {
  const t = messages[locale].rbqeFramework;

  return (
    <section id="rbqe-framework" className="bg-slate-950 py-24">
      <Container>
        {/* Header */}

        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
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

        {/* Timeline */}

        <div className="relative">
          {/* Línea del proceso */}

          <div className="absolute left-0 right-0 top-16 h-px bg-slate-700">
            <div className="h-full w-full bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500 opacity-40" />
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
            {t.steps.map((step, index) => (
              <article
                key={step.title}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(34,211,238,.15)]"
              >
                <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/40 bg-slate-950 text-cyan-300 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mb-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}