const experiences = [
  {
    role: "Winter Analyst Intern",
    company: "Bracebridge Capital",
    period: "Dec 2025 – Jan 2026",
    description:
      "I spent a winter at a multi-strat fixed income hedge fund where I dove into interest rate swaps and relative value trades.",
  },
  {
    role: "Data Curation Intern",
    company: "AfterQuery Experts",
    period: "Oct 2025 – Feb 2026",
    description:
      "I worked under a senior PM to optimize data curation pipelines to enterprise clients. I also optimized processes to save hours of work per project.",
  },
  {
    role: "Mathematics Teacher",
    company: "Russian School of Mathematics",
    period: "Jul 2025 – Aug 2025",
    description:
      "I taught accelerated Algebra II and Precalculus to 40+ high schoolers over a compressed summer term. I designed the lessons and problem sets myself and ended up getting top performance reviews.",
  },
  {
    role: "Hardware Engineering Intern",
    company: "Nia Therapeutics",
    period: "Summers 2022 – 2024",
    description:
      "I spent three summers building neural implant hardware for FDA trials. I hand-assembled over 50 prototype boards and pushed design improvements that shrank enclosures by 30% and halved PCB thickness. I got to present my proposals directly to the C-suite.",
  },
  {
    role: "Materials R&D Intern",
    company: "Metis Design Corporation",
    period: "Jun 2024 – Jul 2024",
    description:
      "I ran carbon-fiber curing experiments on a Lockheed Martin DARPA subcontract. I spent my days between ovens, autoclaves, and test rigs dialing in cure profiles. I also built an end-to-end workflow for a new proprietary materials tech that is still the SOP today.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Experience
        </h2>
        <div className="mt-12 space-y-8">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="group relative rounded-xl border border-card-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-accent">{exp.company}</p>
                </div>
                <span className="text-sm text-muted font-mono">
                  {exp.period}
                </span>
              </div>
              {exp.description && (
                <p className="mt-4 text-muted leading-relaxed">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
