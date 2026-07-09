import Link from "next/link";
import Image from "next/image";

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
          <Link
            href="/"
            className="flex items-center gap-3 transition hover:opacity-90"
          >
            <Image
              src="/images/guardian-logo.png"
              alt="RBQE.ai"
              width={42}
              height={42}
              priority
              className="rounded-xl drop-shadow-[0_0_18px_rgba(34,211,238,.35)]"
            />

            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-wide text-white">
                RBQE.ai
              </span>

              <span className="text-[11px] uppercase tracking-[0.22em] text-cyan-300">
                Risk-Based QA
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#rbqe-framework"
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {t.howItWorks}
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

            {/* Language */}
            <div className="hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm md:flex">
              <button className="font-medium text-cyan-300 transition hover:text-white">
                EN
              </button>

              <span className="text-slate-600">/</span>

              <button className="text-slate-400 transition hover:text-white">
                ES
              </button>
            </div>

            {/* CTA */}
            <a href="#contact" className="rounded-full bg-cyan-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-cyan-500">
              {t.bookCall}
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}