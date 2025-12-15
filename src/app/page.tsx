import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechStacks from "@/components/ui/TechStacks";
import FloatingNextButton from "@/components/ui/FloatingNextButton";
import { resumeData } from "@/data/resume";

export default function Home() {
    return (
        <main className="relative w-full overflow-hidden text-white selection:bg-white selection:text-black">
            {/* Fixed Background Video - stays in place while content scrolls */}
            <video
                src="/assets/projects/backgroung_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="fixed inset-0 w-full h-full object-cover z-0"
            />

            {/* Scrollable Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section id="hero" className="h-screen w-full relative flex flex-col items-center justify-center px-4">
                    <div className="z-10 flex flex-col items-center justify-center text-center">
                        <h1 className="text-massive font-bold tracking-tighter text-transparent leading-none drop-shadow-[0_8px_32px_rgba(255,255,255,0.8)] [-webkit-text-stroke:_2px_rgba(255,255,255,1)] [text-shadow:_0_0_20px_rgba(255,255,255,0.4),_0_0_40px_rgba(255,255,255,0.2)]">
                            {resumeData.name.split(" ")[0]}<br />
                            {resumeData.name.split(" ").slice(1).join(" ")}
                        </h1>
                        <p className="text-xl md:text-2xl mt-8 font-light tracking-widest uppercase text-neutral-400">
                            {resumeData.title}
                        </p>
                        <TechStacks />
                    </div>
                </section>

                <div className="space-y-32 pb-32">
                    <Projects />
                    <About />
                    <Experience />
                    <Contact />
                </div>
            </div>

            {/* Floating Next Button */}
            <FloatingNextButton />
        </main>
    );
}
