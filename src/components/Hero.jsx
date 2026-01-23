import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm a DevOps Engineer 👋
        </h1>

        <p className="mt-6 text-slate-400 text-lg leading-relaxed">
          Computer Science graduate focused on automation, Linux systems,
          cloud infrastructure and production-ready DevOps practices.
        </p>

        <div className="mt-8">
          <a
            href="/resume.pdf"
            download
            className="flex w-fit items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-xl shadow-lg"
          >
            <FiDownload size={22} />
            Download Resume
          </a>
        </div>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-800 hover:scale-105 hover:border-indigo-500 transition">
        <p className="text-2xl text-green-400">$ whoami</p>
        <p className="mt-2 text-slate-300">
          DevOps-oriented engineer passionate about reliability, automation,
          monitoring and scalable infrastructure.
        </p>
      </div>
    </section>
  );
}
