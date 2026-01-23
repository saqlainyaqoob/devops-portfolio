export default function Skill({ icon, title, desc }) {
  return (
    <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 shadow-md hover:border-indigo-500 transition">
      <div className="text-indigo-400 mb-3">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-400 mt-1">{desc}</p>
    </div>
  );
}
