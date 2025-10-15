import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WalletStatus() {
  const [hasMetaMask, setHasMetaMask] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const checkMetaMask = () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        setHasMetaMask(true);
      }
      setIsChecking(false);
    };

    setTimeout(checkMetaMask, 500);
  }, []);

  if (isChecking) return null;

  if (!hasMetaMask) {
    return (
      <div className="fixed bottom-4 right-4 rtl:right-auto rtl:left-4 bg-red-900 border border-red-500 rounded-lg p-4 max-w-sm z-50">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <h4 className="font-bold mb-1 text-red-300">{t.wallet.installMetaMask}</h4>
            <p className="text-sm text-red-200 mb-2">
              {t.wallet.installText}
            </p>
            <a
              href="https://metamask.io/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-red-700 hover:bg-red-600 px-3 py-1 rounded inline-block"
            >
              {t.wallet.download}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

