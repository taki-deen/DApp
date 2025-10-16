import { useContractData } from '@/hooks/useContractData';
import { CONTRACT_ADDRESS, getNetwork } from '@/lib/contract';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

export default function Hero() {
  // ✅ السطر المصحح - مع الأقواس
  const { tokenPrice, tokensSold, tokensAvailable, endTime, loading } = useContractData();
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);
  const network = getNetwork();

  // ✅ منع hydration errors
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const timer = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      const remaining = parseInt(endTime || '0') - now;
      
      if (remaining > 0) {
        setTimeLeft({
          days: Math.floor(remaining / 86400),
          hours: Math.floor((remaining % 86400) / 3600),
          minutes: Math.floor((remaining % 3600) / 60),
          seconds: remaining % 60
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, isClient]);

  // ✅ حساب القيم بشكل آمن
  const safeValues = {
    price: isClient && tokenPrice && !isNaN(parseFloat(tokenPrice)) 
      ? parseFloat(tokenPrice).toFixed(8) 
      : '0.00000000',
    
    sold: isClient && tokensSold && !isNaN(parseFloat(tokensSold)) 
      ? parseFloat(tokensSold).toLocaleString() 
      : '0',
    
    available: isClient && tokensAvailable && !isNaN(parseFloat(tokensAvailable)) 
      ? parseFloat(tokensAvailable).toLocaleString() 
      : '0'
  };

  // ✅ حساب التقدم بشكل آمن
  const totalTokens = parseFloat(tokensSold || '0') + parseFloat(tokensAvailable || '0');
  const progress = totalTokens > 0 ? (parseFloat(tokensSold || '0') / totalTokens) * 100 : 0;

  const scrollToPresale = () => {
    document.getElementById('presale')?.scrollIntoView({ behavior: 'smooth' });
  };

  // ✅ عرض loading أثناء التحميل الأولي
  if (!isClient) {
    return (
      <section id="home" className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white dark:from-dark dark:to-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="text-2xl">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white dark:from-dark dark:to-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-300 mb-8">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button onClick={scrollToPresale} className="btn-accent text-lg px-8 py-4">
              {t.hero.buyNow}
            </button>
            <a 
              href={`${network.explorer}/address/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              {t.hero.viewContract}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="card text-center">
            <div className="text-sm text-slate-400 mb-2">{t.hero.presaleEndsIn}</div>
            <div className="text-2xl font-bold text-accent">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
          </div>

          <div className="card text-center">
            <div className="text-sm text-slate-400 mb-2">{t.hero.tokenPrice}</div>
            <div className="text-2xl font-bold text-primary">
              {loading ? '...' : `${safeValues.price} BNB`}
            </div>
          </div>

          <div className="card text-center">
            <div className="text-sm text-slate-400 mb-2">{t.hero.tokensSold}</div>
            <div className="text-2xl font-bold text-green-400">
              {loading ? '...' : safeValues.sold}
            </div>
          </div>

          <div className="card text-center">
            <div className="text-sm text-slate-400 mb-2">{t.hero.tokensRemaining}</div>
            <div className="text-2xl font-bold text-blue-400">
              {loading ? '...' : safeValues.available}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between mb-2 text-sm">
            <span>{t.hero.presaleProgress}</span>
            <span className="text-accent font-semibold">{progress.toFixed(2)}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}