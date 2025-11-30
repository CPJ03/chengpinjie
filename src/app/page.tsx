import HeroScene from "@/components/3d/HeroScene";
import BackgroundReveal from "@/components/ui/BackgroundReveal";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import { resumeData } from "@/data/resume";

export default function Home() {
    return (
        <main className="relative w-full overflow-hidden bg-black text-white selection:bg-white selection:text-black">
            {/* Hero Section */}
            <section className="h-screen w-full relative flex flex-col items-center justify-center px-4">
                <BackgroundReveal />
                <div className="z-10 flex flex-col items-center justify-center text-center">
                    <h1 className="text-massive font-bold tracking-tighter text-white leading-none">
                        {resumeData.name.split(" ")[0]}<br />
                        {resumeData.name.split(" ").slice(1).join(" ")}
                    </h1>
                    <p className="text-xl md:text-2xl mt-8 font-light tracking-widest uppercase text-neutral-400">
                        {resumeData.title}
                    </p>
                </div>
                <HeroScene />
            </section>

            <div className="space-y-32 pb-32">
                <Projects />
                <About />
                <Experience />
                <Contact />
            </div>
        </main>
    );
}
