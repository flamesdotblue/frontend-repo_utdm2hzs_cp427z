import { ShieldCheck, Search, Stars } from "lucide-react";

export default function Benefits() {
  const perks = [
    {
      icon: Search,
      title: "Conversational search",
      desc: "Ask follow-ups, compare sources, and stay in flow with AI."
    },
    {
      icon: Stars,
      title: "Crystal-clear answers",
      desc: "Get concise, cited responses you can trust."
    },
    {
      icon: ShieldCheck,
      title: "Privacy-forward",
      desc: "Your activity stays yours with privacy-first defaults."
    }
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {perks.map((p, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <p.icon className="h-6 w-6 text-indigo-300" />
              <h3 className="mt-4 text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
