import { messages, type Locale } from "@/lib/i18n";
import Container from "../ui/container";

type NavbarProps = {
  locale?: Locale;
};

export default function Navbar({ locale = "en" }: NavbarProps) {
  const t = messages[locale].navigation;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="text-xl font-semibold tracking-tight text-white"
          >
            RBQE.ai
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#rbqe-framework"
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {t.howItWorks}
            </a>

            <a
              href="#why-guardian"
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {t.why}
            </a>

            <a
              href="#services"
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              Services
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {t.contact}
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-5">

            {/* Language Selector (visual por ahora) */}
            <div className="hidden items-center gap-2 text-sm text-slate-400 md:flex">
              <button className="transition hover:text-white">
                EN
              </button>

              <span>/</span>

              <button className="transition hover:text-white">
                ES
              </button>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="rounded-full bg-cyan-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-cyan-500"
            >
              {t.bookCall}
            </a>

          </div>

        </div>
      </Container>
    </header>
  );
}
