import { useState } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  const { account, balance, connect, disconnect, isCorrectNetwork } = useWeb3();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800 transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TokenPresale
            </div>
          </div>

          <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <button onClick={() => scrollTo('home')} className="text-gray-700 dark:text-white hover:text-accent transition">{t.header.home}</button>
            <button onClick={() => scrollTo('about')} className="text-gray-700 dark:text-white hover:text-accent transition">{t.header.about}</button>
            <button onClick={() => scrollTo('tokenomics')} className="text-gray-700 dark:text-white hover:text-accent transition">{t.header.tokenomics}</button>
            <button onClick={() => scrollTo('presale')} className="text-gray-700 dark:text-white hover:text-accent transition">{t.header.presale}</button>
            <button onClick={() => scrollTo('roadmap')} className="text-gray-700 dark:text-white hover:text-accent transition">{t.header.roadmap}</button>
            <button onClick={() => scrollTo('team')} className="text-gray-700 dark:text-white hover:text-accent transition">{t.header.team}</button>
          </div>

          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <LanguageSwitcher />
            
            {account ? (
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex flex-col items-end text-sm">
                  <div className="text-xs text-slate-400">
                    {isCorrectNetwork ? 'BSC' : `⚠️ ${t.header.wrongNetwork}`}
                  </div>
                  <div className="font-mono">{account.slice(0, 6)}...{account.slice(-4)}</div>
                  <div className="text-xs text-accent">{parseFloat(balance).toFixed(4)} BNB</div>
                </div>
                <button onClick={disconnect} className="btn-primary text-sm">
                  {t.header.disconnect}
                </button>
              </div>
            ) : (
              <button onClick={connect} className="btn-primary">
                {t.header.connectWallet}
              </button>
            )}

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button onClick={() => scrollTo('home')} className="block w-full text-left rtl:text-right py-2 hover:text-accent">{t.header.home}</button>
            <button onClick={() => scrollTo('about')} className="block w-full text-left rtl:text-right py-2 hover:text-accent">{t.header.about}</button>
            <button onClick={() => scrollTo('tokenomics')} className="block w-full text-left rtl:text-right py-2 hover:text-accent">{t.header.tokenomics}</button>
            <button onClick={() => scrollTo('presale')} className="block w-full text-left rtl:text-right py-2 hover:text-accent">{t.header.presale}</button>
            <button onClick={() => scrollTo('roadmap')} className="block w-full text-left rtl:text-right py-2 hover:text-accent">{t.header.roadmap}</button>
            <button onClick={() => scrollTo('team')} className="block w-full text-left rtl:text-right py-2 hover:text-accent">{t.header.team}</button>
          </div>
        )}
      </nav>
    </header>
  );
}

