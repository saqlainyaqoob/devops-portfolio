import { FaTerminal, FaServer, FaGithub } from "react-icons/fa";
import { FaCloudArrowUp } from "react-icons/fa6";
import Skill from "./Skill";

export default function CoreSkills() {
  return (
    <section className="bg-slate-900 border-y border-slate-800 hover:scale-105 hover:border-indigo-500 transition">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10">Core Skills</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-xl">
          <Skill
            icon={<FaTerminal size={22} />}
            title="Linux"
            desc="Ubuntu, shell scripting, automation"
          />
          <Skill
            icon={<FaServer size={22} />}
            title="DevOps"
            desc="CI/CD, monitoring, cron jobs"
          />
          <Skill
            icon={<FaCloudArrowUp size={22} />}
            title="Cloud"
            desc="Basic cloud deployment & infra concepts"
          />
          <Skill
            icon={<FaGithub size={22} />}
            title="Git"
            desc="Version control & GitHub workflows"
          />
        </div>
      </div>
    </section>
  );
}
