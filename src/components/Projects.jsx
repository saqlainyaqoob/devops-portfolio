import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Server Health Monitor"
          desc="Bash-based monitoring system logging CPU, memory, disk and uptime with cron automation."
        />
        <ProjectCard
          title="Network & HTTP Monitor"
          desc="Automated connectivity checker using ping + curl for reliability testing."
        />
      </div>
    </section>
  );
}
