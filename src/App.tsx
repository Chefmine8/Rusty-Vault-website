import { useState, useEffect } from 'react';
import { Shield, Github } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Team from './components/Team';
import Footer from './components/Footer';
import logo from '../images/groupe.png'

function App() {
  function Header() {
    return (
      <nav>
        <img src={logo} alt="Rusty Vault Logo" className="h-12" />
      </nav>
    )
  }
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% ${50 + scrollY * 0.05}%, rgba(255, 120, 50, 0.15), transparent 50%)`,
        }}
      />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Shield className="w-8 h-8 text-orange-500" />
              <div className="absolute inset-0 blur-lg bg-orange-500/50" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-emerald-400 bg-clip-text text-transparent">
              Rusty Vault
            </span>
          </div>
          <a
            href="https://github.com/Squerys/Rusty-Vault"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </nav>

      <Hero />
      <Features />
      <TechStack />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
