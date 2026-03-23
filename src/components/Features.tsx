import { Code2, Lock, Eye, Box, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Obfuscation',
    description: 'Protection avancée du code avec obfstr pour masquer les chaînes sensibles et compliquer la rétro-ingénierie',
    color: 'orange',
    gradient: 'from-orange-500/20 to-orange-600/5',
    iconColor: 'text-orange-500',
  },
  {
    icon: Box,
    title: 'Packing',
    description: 'Compression et chiffrement du payload pour réduire la taille et protéger le binaire final',
    color: 'emerald',
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Zap,
    title: 'Process Hollowing',
    description: "Injection de code dans un processus légitime pour contourner les mécanismes de détection",
    color: 'orange',
    gradient: 'from-orange-500/20 to-orange-600/5',
    iconColor: 'text-orange-500',
  },
  {
    icon: Eye,
    title: 'Anti-Debug',
    description: "Détection active des debuggers avec IsDebuggerPresent, timing checks et corruption de payload",
    color: 'emerald',
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Shield,
    title: 'Evasion',
    description: 'Kill-switch automatique qui corrompt le payload si une anomalie est détectée lors du déchiffrement',
    color: 'orange',
    gradient: 'from-orange-500/20 to-orange-600/5',
    iconColor: 'text-orange-500',
  },
  {
    icon: Lock,
    title: 'Analyse Heuristique',
    description: 'Détection automatique du type de fichier pour adapter les techniques de protection',
    color: 'emerald',
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    iconColor: 'text-emerald-500',
  },
];

export default function Features() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="text-sm text-gray-400 font-mono">Features</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Arsenal Complet
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Techniques avancées de protection et d'obfuscation pour vos binaires Rust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all hover:scale-105 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="relative">
                <div className={`inline-flex p-4 bg-white/5 rounded-xl mb-6 ${feature.iconColor}`}>
                  <feature.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>

              <div className={`absolute top-4 right-4 w-2 h-2 ${feature.iconColor} rounded-full animate-pulse`} />
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-orange-500/10 to-emerald-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Roadmap</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'Renforcement du chiffrement',
                'Anti-debug étendu',
                'Control Flow Flattening',
                'IAT Hooking runtime',
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
