import Hero from "./components/Hero";
import CoreSkills from "./components/CoreSkills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <CoreSkills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
