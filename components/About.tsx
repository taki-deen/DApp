import { CONTRACT_ADDRESS, getNetwork } from '@/lib/contract';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function About() {
  const network = getNetwork();
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-accent">{t.about.overview}</h3>
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
              {t.about.overviewText1}
            </p>
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
              {t.about.overviewText2}
            </p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-accent">{t.about.technicalDetails}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-700">
                <span className="text-slate-400">{t.about.blockchain}:</span>
                <span className="font-semibold">{network.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-700">
                <span className="text-slate-400">{t.about.tokenStandard}:</span>
                <span className="font-semibold">BEP-20</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-700">
                <span className="text-slate-400">{t.about.contractAddress}:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs">{CONTRACT_ADDRESS.slice(0, 10)}...{CONTRACT_ADDRESS.slice(-8)}</span>
                  <button onClick={copyAddress} className="text-accent hover:text-yellow-400">
                    {copied ? '✓' : '📋'}
                  </button>
                </div>
              </div>
              <div className="pt-2">
                <a 
                  href={`${network.explorer}/address/${CONTRACT_ADDRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-purple-400 underline"
                >
                  {t.about.viewOnExplorer} {network.name === 'BSC Mainnet' ? 'BscScan' : 'BSC Testnet Explorer'}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-8 bg-yellow-900/20 border-accent/30">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔒</span>
            <div>
              <h4 className="font-bold mb-2 text-accent">{t.about.securityTitle}</h4>
              <p className="text-sm text-slate-300">
                {t.about.securityText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
