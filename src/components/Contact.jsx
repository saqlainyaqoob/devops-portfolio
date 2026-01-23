import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      <div className="flex flex-col sm:flex-row gap-6 text-slate-400">
        <a
          href="mailto:saqlainyaqoob7@gmail.com"
          className="flex items-center gap-2 hover:text-indigo-400 transition"
        >
          <IoMdMail size={16} />
          saqlainyaqoob7@gmail.com
        </a>

        <a
          href="https://github.com/saqlainyaqoob"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-indigo-400 transition"
        >
          <FaGithub size={16} />
          github.com/saqlainyaqoob
        </a>

                <a
          href="https://www.linkedin.com/in/saqlain-yaqoob-2022621a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-indigo-400 transition"
        >
          <FaLinkedin size={16} />
          linkedin.com/in/saqlain-yaqoob-2022621a4/
        </a>
      </div>
    </section>
  );
}