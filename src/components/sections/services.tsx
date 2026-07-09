import Container from "../ui/container";
import { messages, type Locale } from "@/lib/i18n";
import { Search, ShieldCheck, BrainCircuit } from "lucide-react";

type ServicesProps = {
  locale?: Locale;
};
export default function Services({
  locale = "en",
}: ServicesProps) {
  const t = messages[locale].services;
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="h-7 w-7 text-cyan-400" />;

      case 1:
        return <ShieldCheck className="h-7 w-7 text-cyan-400" />;

      case 2:
        return <BrainCircuit className="h-7 w-7 text-cyan-400" />;

      default:
        return <Search className="h-7 w-7 text-cyan-400" />;
    }
  };
  return (
    <section id="services" className="relative flex min-h-screen items-center overflow-hidden py-8 scroll-mt-24">
      <Container>
        <div className="space-y-8">
          <div className="max-w-5xl space-y-4">
            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {t.badge}
            </span>

            <h2 id="services-title" className="max-w-5xl text-3xl font-bold leading-tight tracking-tight text-slate-100 lg:text-4xl">
              {t.title}
            </h2>

            <p className="max-w-5xl text-lg leading-8 text-slate-400">
              {t.description}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {t.items.map((service, index) => (
                <article
                    key={service.title}
                    className="group relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900">
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    </div>
                    <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/15 bg-gradient-to-br from-cyan-500/10 to-transparent">
                      {getIcon(index)}
                    </div>
                    <h3 className="relative z-10 mb-4 text-2xl font-semibold text-white">
                    {service.title}
                    </h3>

                    <p className="relative z-10 mb-8 leading-7 text-slate-400">
                    {service.description}
                    </p>

                    <ul className="relative z-10 space-y-3 text-sm text-slate-300">
                      <li>✓ AI-powered analysis</li>
                      <li>✓ Actionable recommendations</li>
                      <li>✓ Faster release decisions</li>
                    </ul>

                  <div className="relative z-10 mt-8 text-sm font-semibold text-cyan-400 transition-transform group-hover:translate-x-1">
                      Learn More →
                  </div>
                </article>
                ))}
          </div>
        </div>
      </Container>
    </section>
  );
}