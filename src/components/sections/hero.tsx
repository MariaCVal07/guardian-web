import Link from "next/link";
import { messages, type Locale } from "@/lib/i18n";

type HeroProps = {
  locale?: Locale;
};

export default function Hero({ locale = "en" }: HeroProps) {
  const t = messages[locale].hero;

  return (
    <section className="relative overflow-hidden bg-[#050816]">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Glow */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-0 pb-8">

        {/* ================= LEFT ================= */}

        <div className="w-full lg:w-1/2">

          <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            {t.badge}
          </div>

          <h1 className="mt-6 max-w-xl text-6xl font-bold leading-[1.05] text-white lg:text-7xl">
            {t.title}
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-400">
            {t.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://wa.me/+36305936472?text=Hello%20RBQE.ai%2C%20I%20would%20like%20to%20book%20a%20technical%20review."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-cyan-400"
            >
              {t.primaryButton}
            </Link>

            <Link
              href="#rbqe-framework"
              className="rounded-full border border-slate-700 px-8 py-4 text-base font-semibold text-white transition hover:border-cyan-400"
            >
              {t.secondaryButton}
            </Link>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="relative hidden w-1/2 items-center justify-center lg:flex">

          {/* Glow */}
          <div className="absolute h-[650px] w-[650px] rounded-full bg-cyan-400/15 blur-[120px]" />
          <div className="absolute h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[100px]" />

          {/* Orbit 1 */}
          <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10" />

          {/* Orbit 2 */}
          <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10" />

          {/* Orbit 3 */}
          <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/15" />

          {/* Orbit 4 */}
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20" />

          {/* Orbit 5 */}
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30" />

          {/* RBQE Diagram */}
          <div className="relative h-[520px] w-[520px] animate-[float_8s_ease-in-out_infinite]">

            {/* ================= Centro ================= */}
            <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 shadow-[0_0_70px_rgba(34,211,238,.25)]">
              <span className="text-center">
                <span className="block text-2xl font-bold tracking-[0.18em] text-white">
                  RBQE
                </span>

                <span className="mt-2 block text-[10px] uppercase tracking-[0.35em] text-cyan-300">
                  AI ENGINE
                </span>
              </span>
            </div>

            {/* ================= Business ================= */}

            <div className="absolute left-1/2 top-2 -translate-x-1/2 rounded-2xl border border-slate-700 bg-slate-900/90 px-6 py-3 backdrop-blur transition duration-300 hover:border-cyan-400/40 animate-[floatCard_7s_ease-in-out_infinite]">
              <p className="text-sm font-semibold text-white">
                Business
              </p>
            </div>

            {/* ================= Requirements ================= */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 rounded-2xl border border-slate-700 bg-slate-900/90 px-6 py-3 backdrop-blur transition duration-300 hover:border-cyan-400/40 animate-[floatCard_8s_ease-in-out_infinite]">
              <p className="text-sm font-semibold text-white">
                Requirements
              </p>
            </div>

            {/* ================= Risk ================= */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-2xl border border-slate-700 bg-slate-900/90 px-6 py-3 backdrop-blur transition duration-300 hover:border-cyan-400/40 animate-[floatCard_9s_ease-in-out_infinite]">
              <p className="text-sm font-semibold text-white">
                Risk
              </p>
            </div>

            {/* ================= Test Strategy ================= */}
            <div className="absolute bottom-12 left-12 rounded-2xl border border-slate-700 bg-slate-900/90 px-6 py-3 backdrop-blur transition duration-300 hover:border-cyan-400/40 animate-[floatCard_10s_ease-in-out_infinite]">
              <p className="text-sm font-semibold text-white">
                Test Strategy
              </p>
            </div>

            {/* ================= Release ================= */}
            <div className="absolute bottom-12 right-12 rounded-2xl border border-slate-700 bg-slate-900/90 px-6 py-3 backdrop-blur transition duration-300 hover:border-cyan-400/40 animate-[floatCard_7.5s_ease-in-out_infinite]">
              <p className="text-sm font-semibold text-white">
                Release
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}