import { Github, Shield, Terminal, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-orange-500" />
              <span className="text-xl font-bold">Rusty Vault</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Solution modulaire de protection et hardening de binaires Rust avec techniques avancées d'obfuscation et d'évasion.
            </p>
            <a
              href="https://github.com/Squerys/Rusty-Vault"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="font-mono text-sm">@Squerys</span>
            </a>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Project</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/Squerys/Rusty-Vault" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/Squerys/Rusty-Vault/tree/main/exemples" className="text-gray-400 hover:text-white transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="https://github.com/Squerys/Rusty-Vault/issues" className="text-gray-400 hover:text-white transition-colors">
                  Issues
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.rust-lang.org/" className="text-gray-400 hover:text-white transition-colors">
                  Rust Lang
                </a>
              </li>
              <li>
                <a href="https://github.com/Squerys/Rusty-Vault" className="text-gray-400 hover:text-white transition-colors">
                  GitHub Repo
                </a>
              </li>
              <li>
                <a href="https://github.com/Squerys" className="text-gray-400 hover:text-white transition-colors">
                  Author
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Terminal className="w-4 h-4" />
            <span className="font-mono">Built with Rust</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Squerys</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600 font-mono">
            ⚠️ For educational and authorized security research purposes only
          </p>
        </div>
      </div>
    </footer>
  );
}
