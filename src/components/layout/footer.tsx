import Container from "../ui/container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-slate-100">
              RBQE.ai
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Risk-Based Quality Engineering powered by AI.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-slate-400 transition hover:text-cyan-300"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-sm text-slate-400 transition hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href="mailto:contact@rbqe.ai"
              className="text-sm text-slate-400 transition hover:text-cyan-300"
            >
              Email
            </a>
          </nav>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © 2025 RBQE.ai. Built for modern engineering teams.
        </div>
      </Container>
    </footer>
  );
}
