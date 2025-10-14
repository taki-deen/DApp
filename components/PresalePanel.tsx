import { useState } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { useContractData } from '@/hooks/useContractData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getNetwork } from '@/lib/contract';
import toast, { Toaster } from 'react-hot-toast';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function PresalePanel() {
  const { account, balance, connect, buyTokens, isCorrectNetwork } = useWeb3();
  const { tokenPrice, refresh } = useContractData();
  const { t } = useLanguage();
  const [bnbAmount, setBnbAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const network = getNetwork();

  const calculateTokens = () => {
    if (!bnbAmount || !tokenPrice || parseFloat(tokenPrice) === 0) return '0';
    return (parseFloat(bnbAmount) / parseFloat(tokenPrice)).toFixed(2);
  };

  const handleBuy = async () => {
    if (!account) {
      toast.error(t.presale.errors.connectFirst);
      return;
    }

    if (!isCorrectNetwork) {
      toast.error(`${t.presale.errors.wrongNetwork} ${network.name}`);
      return;
    }

    const amount = parseFloat(bnbAmount);
    if (!amount || amount <= 0) {
      toast.error(t.presale.errors.invalidAmount);
      return;
    }

    if (amount > parseFloat(balance)) {
      toast.error(t.presale.errors.insufficientBalance);
      return;
    }

    setLoading(true);
    try {
      const tx = await buyTokens(bnbAmount);
      toast.loading(`${t.presale.pending} ${tx.hash.slice(0, 10)}...`, { duration: 3000 });
      
      const receipt = await tx.wait();
      
      toast.success(
        <div>
          <div className="font-bold">{t.presale.success.title}</div>
          <div className="text-sm">{t.presale.success.tokensAdded}</div>
          <a 
            href={`${network.explorer}/tx/${receipt.hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline text-xs"
          >
            {t.presale.success.viewTx}
          </a>
        </div>,
        { duration: 5000 }
      );

      setBnbAmount('');
      refresh();
    } catch (error: any) {
      console.error('Purchase error:', error);
      if (error.code === 'ACTION_REJECTED') {
        toast.error(t.presale.errors.rejected);
      } else if (error.message?.includes('insufficient funds')) {
        toast.error(t.presale.errors.insufficientFunds);
      } else {
        toast.error(error.reason || t.presale.errors.failed);
      }
    } finally {
      setLoading(false);
    }
  };

  const setMaxAmount = () => {
    const max = Math.max(0, parseFloat(balance) - 0.01);
    setBnbAmount(max.toFixed(4));
  };

  return (
    <section id="presale" className="py-20 bg-slate-900/50">
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t.presale.title}
        </h2>

        <div className="card max-w-2xl mx-auto">
          {!account ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold mb-4">{t.presale.connectTitle}</h3>
              <p className="text-slate-400 mb-6">
                {t.presale.connectText}
              </p>
              <button onClick={connect} className="btn-accent">
                {t.header.connectWallet}
              </button>
            </div>
          ) : !isCorrectNetwork ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold mb-4">{t.presale.wrongNetworkTitle}</h3>
              <p className="text-slate-400 mb-6">
                {t.presale.wrongNetworkText} {network.name}
              </p>
              <button 
                onClick={async () => {
                  try {
                    await window.ethereum.request({
                      method: 'wallet_switchEthereumChain',
                      params: [{ chainId: `0x${network.chainId.toString(16)}` }],
                    });
                  } catch (error: any) {
                    if (error.code === 4902) {
                      await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                          chainId: `0x${network.chainId.toString(16)}`,
                          chainName: network.name,
                          rpcUrls: [network.rpcUrl],
                          nativeCurrency: {
                            name: 'BNB',
                            symbol: 'BNB',
                            decimals: 18
                          },
                          blockExplorerUrls: [network.explorer]
                        }],
                      });
                    }
                  }
                }}
                className="btn-accent"
              >
                {t.presale.switchNetwork} {network.name}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label className="font-semibold">{t.presale.amount}</label>
                  <span className="text-slate-400">{t.presale.balance}: {parseFloat(balance).toFixed(4)} BNB</span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={bnbAmount}
                    onChange={(e) => setBnbAmount(e.target.value)}
                    placeholder="0.0"
                    className="input-field pr-20"
                    step="0.001"
                    min="0"
                  />
                  <button
                    onClick={setMaxAmount}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-accent hover:text-yellow-400 font-semibold text-sm"
                  >
                    {t.presale.max}
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">{t.presale.youReceive}</span>
                  <span className="font-semibold text-lg text-accent">{calculateTokens()} Tokens</span>
                </div>
                <div className="text-xs text-slate-500">
                  {t.presale.rate}: 1 BNB = {tokenPrice !== '0' ? (1 / parseFloat(tokenPrice)).toFixed(2) : '...'} Tokens
                </div>
              </div>

              <button
                onClick={handleBuy}
                disabled={loading || !bnbAmount || parseFloat(bnbAmount) <= 0}
                className="w-full btn-accent text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? t.presale.processing : t.presale.buy}
              </button>

              <div className="text-xs text-slate-400 text-center">
                {t.presale.terms}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
