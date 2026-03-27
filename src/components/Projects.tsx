const projects = [
  {
    title: "News in Brief",
    description:
      "A personalized news briefing platform powered by Claude AI. Curates articles from RSS feeds and NewsAPI, generates concise summaries with conversation starters, and delivers them daily via email. Built with FastAPI, PostgreSQL, and Amazon SES.",
    tags: ["Python", "FastAPI", "Claude AI", "Supabase"],
    demo: "https://newsinbrief.cc",
    source: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/50 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4 text-sm">
                <a
                  href={project.demo}
                  className="text-muted transition-colors hover:text-accent"
                >
                  Live Demo &rarr;
                </a>
                {project.source && (
                  <a
                    href={project.source}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    Source
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
