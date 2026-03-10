import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Athlete from "@/components/Athlete";
import Footer from "@/components/Footer";
import BlobCursor from "@/components/BlobCursor";
import Cursor from "@/components/Cursor";
import Dither from "@/components/Dither";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Dithered wave background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.1}
          colorNum={38.5}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.02}
        />
      </div>

      {/* Small dot cursor - on top of everything */}
      <Cursor />

      {/* Blob cursor - between background and content */}
      <BlobCursor
        blobType="circle"
        fillColor="#0251a7"
        trailCount={5}
        sizes={[83, 83, 83, 83, 83]}
        innerSizes={[20, 20, 20, 20, 20]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[0.6, 0.6, 0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={5}
      />

      {/* Content */}
      <div className="relative z-10 pointer-events-auto">
        <Navbar />
        <main>
          <Hero />
          <div id="student" className="py-6 px-6">
            <div className="mx-auto max-w-3xl flex items-center gap-4">
              <div className="h-px flex-1 bg-foreground/15" />
              <span className="text-base font-semibold tracking-wide text-foreground">Student</span>
              <div className="h-px flex-1 bg-foreground/15" />
            </div>
          </div>
          <About />
          <Experience />
          <Projects />
          <div className="py-6 px-6">
            <div className="mx-auto max-w-3xl flex items-center gap-4">
              <div className="h-px flex-1 bg-foreground/15" />
              <span className="text-base font-semibold tracking-wide text-foreground">Athlete</span>
              <div className="h-px flex-1 bg-foreground/15" />
            </div>
          </div>
          <Athlete />
        </main>
        <Footer />
      </div>
    </div>
  );
}
