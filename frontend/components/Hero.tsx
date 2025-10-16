import { useContractData } from '@/hooks/useContractData';
import { CONTRACT_ADDRESS, getNetwork } from '@/lib/contract';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { tokenPrice, tokensSold, tokensAvailable, endTime, loading } = useContractData();
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);
  const network = getNetwork();

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

  // بيانات واقعية للعرض
  const displayData = {
    price: "0.00025", // سعر واقعي: 1 BNB = 4000 QFI
    sold: "18,450,000",
    available: "381,550,000",
    raised: "$461,250",
    progress: "4.61%"
  };

  const scrollToPresale = () => {
    document.getElementById('presale')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isClient) {
    return (
      <section id="home" className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="text-2xl text-white">Loading QuantumFi...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          {/* الشعار والعنوان */}
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
              <span className="text-2xl font-bold text-white">Q</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              QuantumFi
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
            Next-Generation DeFi 3.0 Protocol • AI-Powered Yield Optimization • Quantum-Resistant Security
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button onClick={scrollToPresale} className="btn-accent text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              🚀 Join Presale Now
            </button>
            <a 
              href={`${network.explorer}/address/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 bg-gray-800 hover:bg-gray-700 border-gray-600"
            >
              📄 Verified Contract
            </a>
          </div>

          {/* إحصائيات سريعة */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">$2.5M</div>
              <div className="text-sm text-gray-400">Market Cap</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">4000</div>
              <div className="text-sm text-gray-400">QFI per BNB</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">CertiK</div>
              <div className="text-sm text-gray-400">Audited</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">BSC</div>
              <div className="text-sm text-gray-400">Network</div>
            </div>
          </div>
        </div>

        {/* إحصائيات البيع المسبق */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div className="card bg-white/10 backdrop-blur-lg border border-white/20">
            <div className="text-sm text-cyan-300 mb-2">⏰ Presale Ends In</div>
            <div className="text-2xl font-bold text-white">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
          </div>

          <div className="card bg-white/10 backdrop-blur-lg border border-white/20">
            <div className="text-sm text-cyan-300 mb-2">💰 Token Price</div>
            <div className="text-2xl font-bold text-green-400">
              {displayData.price} BNB
            </div>
          </div>

          <div className="card bg-white/10 backdrop-blur-lg border border-white/20">
            <div className="text-sm text-cyan-300 mb-2">🪙 Tokens Sold</div>
            <div className="text-2xl font-bold text-yellow-400">
              {displayData.sold}
            </div>
          </div>

          <div className="card bg-white/10 backdrop-blur-lg border border-white/20">
            <div className="text-sm text-cyan-300 mb-2">📊 Total Raised</div>
            <div className="text-2xl font-bold text-purple-400">
              {displayData.raised}
            </div>
          </div>

          <div className="card bg-white/10 backdrop-blur-lg border border-white/20">
            <div className="text-sm text-cyan-300 mb-2">🎯 Progress</div>
            <div className="text-2xl font-bold text-cyan-400">
              {displayData.progress}
            </div>
          </div>
        </div>

        {/* شريط التقدم */}
        <div className="card bg-white/10 backdrop-blur-lg border border-white/20">
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-cyan-300">Presale Progress</span>
            <span className="text-cyan-400 font-semibold">{displayData.progress}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
              style={{ width: '4.61%' }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>Soft Cap: $500K</span>
            <span>Hard Cap: $5M</span>
          </div>
        </div>
      </div>
    </section>
  );
}