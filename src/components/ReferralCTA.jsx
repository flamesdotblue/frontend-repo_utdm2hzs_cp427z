import { useMemo, useState } from "react";
import { Copy, Check, Share2 } from "lucide-react";

export default function ReferralCTA() {
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);

  const base = typeof window !== "undefined" ? window.location.origin : "https://comet.perplexity.ai";
  const link = useMemo(() => {
    const c = (code || "").trim();
    const url = new URL(base);
    url.pathname = "/join";
    if (c) url.searchParams.set("ref", c);
    return url.toString();
  }, [base, code]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = link;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join me on Comet by Perplexity",
          text: "Faster answers with an AI-native browser. Use my invite!",
          url: link,
        });
      } catch (e) {
        // ignore
      }
    } else {
      copyLink();
    }
  };

  return (
    <section id="referral-cta" className="relative">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-indigo-600/20 to-violet-600/10 p-6 sm:p-8">
          <h3 className="text-white text-xl sm:text-2xl font-semibold">Your Comet referral</h3>
          <p className="mt-2 text-white/70 text-sm">
            Enter your code to generate a shareable invite link. When friends join, you both get perks.
          </p>

          <div className="mt-5 grid sm:grid-cols-[1fr_auto_auto] gap-3">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter referral code"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button onClick={copyLink} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/90 text-gray-900 px-4 py-3 font-medium hover:bg-white">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy link"}
            </button>
            <button onClick={shareNative} className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-3 font-medium hover:bg-indigo-500">
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>

          <div className="mt-4">
            <p className="text-xs text-white/60 break-all">
              {link}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
