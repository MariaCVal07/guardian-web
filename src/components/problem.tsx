import React from "react";
import Container from "./ui/container";
import { en } from "../messages/en";

export default function Problem(): JSX.Element {
  const p = en.problem;

  return (
    <section
      className="text-[#e6eef8] py-16 lg:py-24 bg-gradient-to-b from-transparent to-[rgba(6,10,15,0.02)]"
      aria-labelledby="problem-heading"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="meta">
            <span className="inline-block text-xs font-semibold tracking-wider text-[#9fb3d1] border border-white/5 px-3 py-1 rounded-full bg-white/5">{p.badge}</span>
          </div>

          <h2 id="problem-heading" className="m-0 text-2xl md:text-4xl font-extrabold leading-tight flex flex-col gap-2">
            <span className="">{p.title}</span>
            <span className="text-[#9bd1ff]">{p.highlight}</span>
          </h2>

          <p className="m-0 text-[#c7d9ea] max-w-[820px] text-base md:text-lg leading-relaxed">{p.description}</p>

          <div className="relative pt-6">
            <div
              className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[rgba(155,209,255,0.25)] to-[rgba(155,209,255,0.06)] rounded-sm"
              aria-hidden="true"
            />

            <ol className="list-none m-0 p-0 pl-14 md:pl-20 flex flex-col gap-7">
              {p.flow.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#9bd1ff] to-[#6bb0e6] shadow-[0_0_12px_rgba(107,176,230,0.18)] mt-2 flex-shrink-0" />

                  <article className="flex-1 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md transition-transform will-change-transform hover:-translate-y-2 hover:shadow-2xl">
                    <div className="p-5 md:p-7">
                      <h4 className="m-0 text-base md:text-lg font-semibold text-[#eaf6ff]">{step}</h4>
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
