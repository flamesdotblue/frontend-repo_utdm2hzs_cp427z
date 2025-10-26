import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import ReferralCTA from "./components/ReferralCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1020] via-[#0b1020] to-[#11142a] text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-[#0b1020]/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500" />
            <span className="font-semibold tracking-tight">Comet</span>
            <span className="ml-2 text-white/50 text-sm">by Perplexity</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#referral-cta" className="hover:text-white">Referral</a>
            <a href="#" className="rounded-lg bg-white/10 px-3 py-1.5 hover:bg-white/15">Download</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <ReferralCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
