export default function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-6 py-10 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Perplexity · Comet</p>
          <div className="flex items-center gap-6 text-sm">
            <a className="text-white/70 hover:text-white" href="#how">How it works</a>
            <a className="text-white/70 hover:text-white" href="#">Privacy</a>
            <a className="text-white/70 hover:text-white" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
