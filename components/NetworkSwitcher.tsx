import { getNetwork } from '@/lib/contract';
import { useWeb3 } from '@/contexts/Web3Context';

export default function NetworkSwitcher() {
  const { isCorrectNetwork, account } = useWeb3();
  const network = getNetwork();

  if (!account || isCorrectNetwork) return null;

  const switchNetwork = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${network.chainId.toString(16)}` }],
      });
    } catch (error: any) {
      if (error.code === 4902) {
        try {
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
        } catch (addError) {
          console.error('Error adding network:', addError);
        }
      }
    }
  };

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-yellow-900 border border-accent rounded-lg p-4 max-w-md z-50 shadow-lg">
      <div className="flex items-center gap-3">
        <span className="text-2xl">⚠️</span>
        <div className="flex-1">
          <h4 className="font-bold text-accent mb-1">شبكة خاطئة</h4>
          <p className="text-sm text-yellow-200 mb-2">
            يرجى التبديل إلى {network.name}
          </p>
          <button
            onClick={switchNetwork}
            className="text-sm bg-accent hover:bg-yellow-500 text-dark px-4 py-2 rounded font-semibold transition-all"
          >
            تبديل الشبكة
          </button>
        </div>
      </div>
    </div>
  );
}

