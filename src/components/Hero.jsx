import { Rocket, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById("referral-cta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
            <span>Introducing Comet by Perplexity</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Browse at the speed of curiosity
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-white/70">
            Comet is an AI-native browser by Perplexity that turns every search into a conversation. Share your invite and unlock rewards when friends join.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button onClick={handleScroll} className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition">
              Claim referral rewards
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#how" className="text-white/70 hover:text-white transition">
              See how it works
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left w-full">
            {[
              { label: "Faster answers", icon: Rocket },
              { label: "Trusted sources", icon: Sparkles },
              { label: "Private by design", icon: Rocket },
              { label: "Smart summaries", icon: Sparkles },
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex items-center gap-3 text-white">
                  <item.icon className="h-4 w-4 text-indigo-300" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[110%] -translate-x-1/2 rounded-[50%] bg-indigo-500/20 blur-3xl" />
    </section>
  );
}
