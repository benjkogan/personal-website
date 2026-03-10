import FuzzyText from "@/components/FuzzyText";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="animate-fade-in-up text-5xl font-bold tracking-tight sm:text-7xl">
          Hi, I&apos;m Ben
        </h1>
        <div className="animate-fade-in-up animation-delay-200 mt-6 flex items-center justify-center gap-0">
          <a href="#student" className="cursor-pointer">
            <FuzzyText
              fontSize="clamp(2.2rem, 5vw, 2.4rem)"
              fontWeight={700}
              color="#ededed"
              baseIntensity={0.3}
              hoverIntensity={0.8}
              fuzzRange={14}
              enableHover
              clickEffect
            >
              Student
            </FuzzyText>
          </a>
          <span className="text-muted select-none" style={{ fontSize: "clamp(2.2rem, 5vw, 2.4rem)" }}>—</span>
          <a href="#athlete" className="cursor-pointer">
            <FuzzyText
              fontSize="clamp(2.2rem, 5vw, 2.4rem)"
              fontWeight={700}
              color="#ededed"
              baseIntensity={0.3}
              hoverIntensity={0.8}
              fuzzRange={14}
              enableHover
              clickEffect
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
