import { Shield, ArrowRight, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = '$ cargo run --bin builder <Payload path>';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-emerald-500 rounded-full animate-pulse delay-150" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse delay-300" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-8 animate-fade-in">
          <Terminal className="w-4 h-4 text-orange-500" />
          <span className="text-sm text-orange-300 font-mono">Binary Hardening Tool</span>
        </div>

        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black mb-6 tracking-tighter">
          <span className="bg-gradient-to-r from-white via-orange-200 to-emerald-200 bg-clip-text text-transparent inline-block animate-gradient">
            Rusty
          </span>
          <br />
          <span className="bg-gradient-to-r from-emerald-200 via-orange-200 to-white bg-clip-text text-transparent inline-block animate-gradient">
            Vault
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Protection avancée de binaires Rust avec obfuscation, anti-debug et techniques d'injection modernes
        </p>

        <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-12 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-gray-500 font-mono">terminal</span>
          </div>
          <div className="text-left font-mono text-lg">
            <span className="text-emerald-400">{text}</span>
            {showCursor && <span className="text-white">|</span>}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://github.com/Squerys/Rusty-Vault"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105"
          >
            <Shield className="w-5 h-5" />
            Voir sur GitHub
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <button className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition-all hover:scale-105">
            Documentation
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-black text-orange-500 mb-2">5+</div>
            <div className="text-sm text-gray-500">Features</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-emerald-500 mb-2">100%</div>
            <div className="text-sm text-gray-500">Rust</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-orange-500 mb-2">19+</div>
            <div className="text-sm text-gray-500">Commits</div>
          </div>
        </div>
      </div>
    </section>
  );
}
