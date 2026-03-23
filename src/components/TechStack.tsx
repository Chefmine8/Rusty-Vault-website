import { Terminal, Cpu, Lock, Zap, Cog, Shield } from 'lucide-react';

const techniques = [
  {
    category: 'Anti-Debug',
    items: [
      { name: 'IsDebuggerPresent()', desc: 'Vérification API standard' },
      { name: 'RDTSC Timing', desc: 'Détection de step-over anormal' },
      { name: 'Payload Corruption', desc: 'Kill-switch automatique' },
    ],
  },
  {
    category: 'Protection',
    items: [
      { name: 'obfstr', desc: 'Obfuscation de chaînes' },
      { name: 'Chiffrement XOR', desc: 'Protection du payload' },
      { name: 'Process Hollowing', desc: 'Injection mémoire' },
    ],
  },
];

const technologies = [
  {
    name: 'Rust',
    description: 'Langage principal pour performance et sécurité mémoire',
    icon: '🦀',
    highlight: 'orange',
  },
  {
    name: 'WinAPI',
    description: 'Intégration système Windows profonde',
    icon: '🪟',
    highlight: 'emerald',
  },
  {
    name: 'PE Format',
    description: 'Manipulation directe des exécutables',
    icon: '📦',
    highlight: 'orange',
  },
  {
    name: 'Assembly',
    description: 'Optimisations bas-niveau et injection',
    icon: '⚙️',
    highlight: 'emerald',
  },
  {
    name: 'Cargo',
    description: 'Gestionnaire de dépendances Rust',
    icon: '📦',
    highlight: 'orange',
  },
  {
    name: 'LLVM',
    description: 'Compilation optimisée et fiable',
    icon: '⚡',
    highlight: 'emerald',
  },
];

export default function TechStack() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <Terminal className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-400 font-mono">Technical Stack</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-emerald-400 bg-clip-text text-transparent">
              Technos & Architecture
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Une stack technologique moderne et performante pour la protection binaire
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {techniques.map((tech, idx) => (
            <div
              key={idx}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                {idx === 0 ? (
                  <Lock className="w-6 h-6 text-orange-500" />
                ) : (
                  <Zap className="w-6 h-6 text-emerald-500" />
                )}
                {tech.category}
              </h3>
              <div className="space-y-4">
                {tech.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                  >
                    <div className={`mt-1 w-2 h-2 rounded-full ${idx === 0 ? 'bg-orange-500' : 'bg-emerald-500'} flex-shrink-0`} />
                    <div>
                      <div className="font-mono text-sm mb-1">{item.name}</div>
                      <div className="text-gray-500 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">Technologies Utilisées</h3>
            <p className="text-gray-400">Stack complet pour une protection maximale</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className={`group relative bg-black/40 backdrop-blur-xl border ${
                  tech.highlight === 'orange'
                    ? 'border-orange-500/20 hover:border-orange-500/50'
                    : 'border-emerald-500/20 hover:border-emerald-500/50'
                } rounded-xl p-6 transition-all hover:scale-105`}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${
                  tech.highlight === 'orange'
                    ? 'from-orange-500/20 to-orange-600/20'
                    : 'from-emerald-500/20 to-emerald-600/20'
                } rounded-xl opacity-0 group-hover:opacity-100 blur transition-all -z-10`} />

                <div className="flex items-start gap-4">
                  <div className="text-3xl">{tech.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">{tech.name}</h4>
                    <p className="text-sm text-gray-400">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />

          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-orange-500" />
              <h3 className="text-3xl font-bold">Architecture Robuste</h3>
            </div>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Entièrement développé en Rust pour garantir performance, sécurité mémoire et fiabilité.
              Utilisation des API Windows natives pour une intégration système profonde et optimale.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {['Memory Safety', 'No Runtime', 'Zero-Cost Abstractions', 'Concurrent'].map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg"
                >
                  <Shield className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm font-mono text-gray-300">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
