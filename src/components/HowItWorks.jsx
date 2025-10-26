import { Gift, Link, Shield } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Get your link",
      desc: "Generate a personalized referral link you can share anywhere.",
      icon: Link,
    },
    {
      title: "Invite friends",
      desc: "Share Comet with friends, teammates, and your community.",
      icon: Gift,
    },
    {
      title: "Earn rewards",
      desc: "Unlock perks when your referrals join and explore with Comet.",
      icon: Shield,
    },
  ];

  return (
    <section id="how" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">How referrals work</h2>
          <p className="mt-2 text-white/70">Three quick steps to start earning</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-indigo-300" />
                <h3 className="text-white font-medium">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
