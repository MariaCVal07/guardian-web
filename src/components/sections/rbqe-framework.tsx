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
    <section
      id="rbqe-framework"
      aria-labelledby="rbqe-framework-title"
      className="bg-slate-950 py-24"
    >
      <Container>
        <div className="space-y-12">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {t.badge}
            </span>

            <h2
              id="rbqe-framework-title"
              className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-4xl lg:text-5xl"
            >
              {t.title}
            </h2>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              {t.description}
            </p>
          </div>

          <div className="space-y-5">
            {t.steps.map((step, index) => (
              <article
                key={step.title}
                className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900 md:flex-row md:items-center"
              >
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-xl font-bold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="max-w-3xl leading-8 text-slate-400">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
