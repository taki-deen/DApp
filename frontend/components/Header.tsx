import { useState } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import styles from '@/styles/components/Header.module.css';

export default function Header() {
  const { account, balance, connect, disconnect, isCorrectNetwork } = useWeb3();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className="flex items-center">
            <div className={styles.logo}>
              🚀 TokenPresale
            </div>
          </div>

          <div className={styles.navLinks}>
            <button onClick={() => scrollTo('home')} className={styles.navLink}>{t.header.home}</button>
            <button onClick={() => scrollTo('about')} className={styles.navLink}>{t.header.about}</button>
            <button onClick={() => scrollTo('tokenomics')} className={styles.navLink}>{t.header.tokenomics}</button>
            <button onClick={() => scrollTo('presale')} className={styles.navLink}>{t.header.presale}</button>
            <button onClick={() => scrollTo('roadmap')} className={styles.navLink}>{t.header.roadmap}</button>
            <button onClick={() => scrollTo('team')} className={styles.navLink}>{t.header.team}</button>
          </div>

          <div className={styles.controls}>
            <ThemeSwitcher />
            <LanguageSwitcher />
            
            {account ? (
              <div className="flex items-center gap-2">
                <div className={styles.walletInfo}>
                  <div className={styles.networkStatus}>
                    {isCorrectNetwork ? (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        BSC
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-500">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        {t.header.wrongNetwork}
                      </span>
                    )}
                  </div>
                  <div className={styles.account}>{account.slice(0, 6)}...{account.slice(-4)}</div>
                  <div className={styles.balance}>{parseFloat(balance).toFixed(4)} BNB</div>
                </div>
                <button onClick={disconnect} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                  {t.header.disconnect}
                </button>
              </div>
            ) : (
              <button onClick={connect} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                {t.header.connectWallet}
              </button>
            )}

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={styles.mobileMenuButton}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <button onClick={() => scrollTo('home')} className={styles.mobileMenuLink}>{t.header.home}</button>
            <button onClick={() => scrollTo('about')} className={styles.mobileMenuLink}>{t.header.about}</button>
            <button onClick={() => scrollTo('tokenomics')} className={styles.mobileMenuLink}>{t.header.tokenomics}</button>
            <button onClick={() => scrollTo('presale')} className={styles.mobileMenuLink}>{t.header.presale}</button>
            <button onClick={() => scrollTo('roadmap')} className={styles.mobileMenuLink}>{t.header.roadmap}</button>
            <button onClick={() => scrollTo('team')} className={styles.mobileMenuLink}>{t.header.team}</button>
          </div>
        )}
      </nav>
    </header>
  );
}

