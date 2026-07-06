import Container from "../ui/container";
import { messages, type Locale } from "@/lib/i18n";

type ServicesProps = {
  locale?: Locale;
};

export default function Services({
  locale = "en",
}: ServicesProps) {
  const t = messages[locale].services;

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-slate-900 py-24"
    >
      <Container>
        <div className="space-y-12">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {t.badge}
            </span>

            <h2
              id="services-title"
              className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-4xl lg:text-5xl"
            >
              {t.title}
            </h2>

            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              {t.description}
            </p>
          </div>

          <div className="divide-y divide-slate-800 rounded-3xl border border-slate-800 overflow-hidden">
            {t.items.map((service, index) => (
                <article
                    key={service.title}
                    className="grid gap-6 p-8 transition hover:bg-slate-900/40 md:grid-cols-[80px_260px_1fr]"
                >
                    <div className="text-3xl font-semibold text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                    </h3>

                    <p className="max-w-2xl leading-8 text-slate-400">
                    {service.description}
                    </p>
                </article>
                ))}
          </div>
        </div>
      </Container>
    </section>
  );
}