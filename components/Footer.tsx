import { CONTRACT_ADDRESS, getNetwork } from '@/lib/contract';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const network = getNetwork();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-200 dark:bg-slate-900 border-t border-gray-300 dark:border-slate-800 py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 dark:text-slate-400">
            {t.footer.copyright}
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600 dark:text-slate-400">{t.footer.contract}:</span>
            <a 
              href={`${network.explorer}/address/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-accent hover:underline"
            >
              {CONTRACT_ADDRESS.slice(0, 6)}...{CONTRACT_ADDRESS.slice(-4)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

