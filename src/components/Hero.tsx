import FuzzyText from "@/components/FuzzyText";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="animate-fade-in-up text-5xl font-bold tracking-tight sm:text-7xl">
          Hi, I&apos;m Ben
        </h1>
        <div className="animate-fade-in-up animation-delay-200 mt-6 flex flex-col sm:flex-row items-center justify-center gap-0">
          <a href="#student" className="cursor-pointer shrink-0">
            <FuzzyText
              fontSize="clamp(3rem, 8vw, 3.5rem)"
              fontWeight={700}
              color="#ededed"
              baseIntensity={0.3}
              hoverIntensity={0.8}
              fuzzRange={14}
              enableHover
              clickEffect
              className="shrink-0"
            >
              Student
            </FuzzyText>
          </a>
          <span className="text-muted select-none text-3xl sm:text-5xl shrink-0">—</span>
          <a href="#athlete" className="cursor-pointer shrink-0">
            <FuzzyText
              fontSize="clamp(3rem, 8vw, 3.5rem)"
              fontWeight={700}
              color="#ededed"
              baseIntensity={0.3}
              hoverIntensity={0.8}
              fuzzRange={14}
              enableHover
              clickEffect
              className="shrink-0"
            >
              Athlete
            </FuzzyText>
          </a>
        </div>
        <div className="animate-fade-in-up animation-delay-400 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-card-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
