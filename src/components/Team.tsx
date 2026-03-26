import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const team = [
  {
    name: 'sQuerys',
    role: 'Chef de Projet',
    bio: "Profesionnel de l'approximation et expert douteux en retroingéniérie",
    specialty: 'Binary Hardening',
    image: 'https://github.com/Chefmine8/Rusty-Vault-website/blob/main/images/mathieu.png?raw=true',
    github: 'https://github.com/Squerys',
    highlight: 'orange',
  },
  {
    name: 'Chefmine8',
    role: 'Responsable chiffrement',
    bio: 'Spécialiste en bidouillage et trucs mathématiques obscurs',
    specialty: 'Cipher Systems',
    image: 'https://github.com/Chefmine8/Rusty-Vault-website/blob/main/images/me.png?raw=true',
    github: 'https://github.com/Chefmine8',
    highlight: 'pink',
  },
  {
    name: 'AAllmmaattrrii',
    role: 'Responsable Anti-Debug',
    bio: "Spécialiste en anti debug (meme empress a peur)",
    specialty: 'Research & Development',
    image: 'https://github.com/Chefmine8/Rusty-Vault-website/blob/main/images/max.png?raw=true',
    github: 'https://github.com/Max67220',
    highlight: 'emerald',
  },
   {
    name: 'Tioco ',
    role: 'Architecte & Front-end',
    bio: "Spécialiste de l'organisation et des beaux design (vous avez vu il claque le site hein)",
    specialty: 'Front-End',
    image: 'https://github.com/Chefmine8/Rusty-Vault-website/blob/main/images/laurent.png?raw=true',
    github: 'https://github.com/Squerys/Rusty-Vault',
    highlight: 'blue',
  },
];

// Fonction pour mapper les couleurs correctement pour Tailwind
const getColorStyles = (color: string) => {
  const styles: Record<string, any> = {
    orange: {
      gradient: 'from-orange-500/30 to-orange-600/30',
      blur: 'bg-orange-500/20',
      textSub: 'text-orange-400',
      bgDot: 'bg-orange-500',
      hover: 'hover:text-orange-500'
    },
    emerald: {
      gradient: 'from-emerald-500/30 to-emerald-600/30',
      blur: 'bg-emerald-500/20',
      textSub: 'text-emerald-400',
      bgDot: 'bg-emerald-500',
      hover: 'hover:text-emerald-500'
    },
    pink: {
      gradient: 'from-pink-500/30 to-pink-600/30',
      blur: 'bg-pink-500/20',
      textSub: 'text-pink-400',
      bgDot: 'bg-pink-500',
      hover: 'hover:text-pink-500'
    },
    blue: {
      gradient: 'from-blue-500/30 to-blue-600/30',
      blur: 'bg-blue-500/20',
      textSub: 'text-blue-400',
      bgDot: 'bg-blue-500',
      hover: 'hover:text-blue-500'
    }
  };
  return styles[color] || styles.emerald;
};

export default function Team() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <Code2 className="w-4 h-4 text-emerald-500" />
            <span className="text-sm text-gray-400 font-mono">Meet The Team</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
              Les Cerveaux Derrière
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Une équipe de passionnés de sécurité binaire et Rust repoussant les limites de la protection logicielle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {team.map((member, idx) => {
            const colors = getColorStyles(member.highlight);
            
            return (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all blur-xl`} />

                <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all h-full flex flex-col">
                  <div className="flex-1">
                    <div className="mb-6 relative">
                      <div className={`absolute inset-0 rounded-xl blur-lg ${colors.blur}`} />
                      {/* Container de l'image optimisé */}
                      <div className="relative w-20 h-20 rounded-xl bg-gray-800 flex items-center justify-center overflow-hidden border border-white/10">
                        <img 
                          src={member.image} 
                          alt={`Photo de profil de ${member.name}`}
                          // object-cover permet de remplir le cadre sans déformer l'image
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className={`text-sm font-semibold mb-2 ${colors.textSub}`}>
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>

                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg w-fit">
                      <span className={`inline-block w-2 h-2 rounded-full ${colors.bgDot}`} />
                      <span className="text-xs text-gray-400 font-mono">{member.specialty}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all hover:scale-110 ${colors.hover}`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <div className="text-xs text-gray-500 flex-1">Voir sur GitHub</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <Mail className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Rejoindre l'Équipe</h4>
                <p className="text-gray-400 mb-4">Intéressé par la sécurité binaire et le développement Rust ?</p>
                <a
                  href="https://github.com/Squerys/Rusty-Vault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-mono text-sm transition-colors"
                >
                  Contribuer sur GitHub →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <Code2 className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Communauté Active</h4>
                <p className="text-gray-400 mb-4">Discussions, ideas et collaborations bienvenues</p>
                <a
                  href="https://github.com/Squerys/Rusty-Vault/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-mono text-sm transition-colors"
                >
                  Participez aux discussions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}