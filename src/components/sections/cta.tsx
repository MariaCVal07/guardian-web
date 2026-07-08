import Container from "../ui/container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950 py-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            TECHNICAL REVIEW
          </p>

          <h2 className="text-5xl font-semibold leading-tight text-white">
            Ready to improve
            <br />
            your next release?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Let's review your current testing strategy, identify the highest
            business risks and define where AI-assisted quality engineering can
            provide the greatest impact.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex rounded-full bg-cyan-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-cyan-500"
          >
            Book a Technical Review
          </a>

        </div>
      </Container>
    </section>
  );
}