import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BrowserProvider, Contract, formatEther, parseEther } from 'ethers';
import { PRESALE_ABI, CONTRACT_ADDRESS, getNetwork, isValidContractAddress } from '@/lib/contract';

interface Web3ContextType {
  account: string | null;
  balance: string;
  chainId: number | null;
  isCorrectNetwork: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  buyTokens: (bnbAmount: string) => Promise<any>;
  contract: Contract | null;
  provider: BrowserProvider | null;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState('0');
  const [chainId, setChainId] = useState<number | null>(null);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [contract, setContract] = useState<Contract | null>(null);

  const network = getNetwork();
  const isCorrectNetwork = chainId === network.chainId;

  const updateBalance = async (address: string, prov: BrowserProvider) => {
    const bal = await prov.getBalance(address);
    setBalance(formatEther(bal));
  };

  const connect = async () => {
    if (typeof window === 'undefined') {
      alert('يرجى فتح الموقع في المتصفح');
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 100));

    if (!window.ethereum) {
      alert('يرجى تثبيت MetaMask!\n\nالرجاء:\n1. تثبيت إضافة MetaMask\n2. إعادة تحميل الصفحة (F5)\n3. المحاولة مرة أخرى');
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    // Check if contract address is valid
    if (!isValidContractAddress(CONTRACT_ADDRESS)) {
      alert('عنوان العقد غير صحيح!\n\nيرجى تحديث ملف .env.local بعنوان عقد صحيح');
      return;
    }

    try {
      const prov = new BrowserProvider(window.ethereum);
      const accounts = await prov.send('eth_requestAccounts', []);
      const net = await prov.getNetwork();
      
      setProvider(prov);
      setAccount(accounts[0]);
      setChainId(Number(net.chainId));
      await updateBalance(accounts[0], prov);

      const signer = await prov.getSigner();
      const contractInstance = new Contract(CONTRACT_ADDRESS, PRESALE_ABI, signer);
      setContract(contractInstance);

      if (Number(net.chainId) !== network.chainId) {
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
                blockExplorerUrls: [network.explorer]
              }],
            });
          }
        }
      }
    } catch (error) {
      console.error('Connection error:', error);
    }
  };

  const disconnect = () => {
    setAccount(null);
    setBalance('0');
    setChainId(null);
    setProvider(null);
    setContract(null);
  };

  const buyTokens = async (bnbAmount: string) => {
    if (!contract) throw new Error('Contract not initialized');
    const tx = await contract.buyTokens({ value: parseEther(bnbAmount) });
    return tx;
  };

  // ✅ الإتصال التلقائي عند تحميل الصفحة
  useEffect(() => {
    const autoConnect = async () => {
      if (typeof window === 'undefined' || !window.ethereum) return;

      try {
        const prov = new BrowserProvider(window.ethereum);
        const accounts = await prov.send('eth_accounts', []);
        
        if (accounts.length > 0) {
          const net = await prov.getNetwork();
          const signer = await prov.getSigner();
          const contractInstance = new Contract(CONTRACT_ADDRESS, PRESALE_ABI, signer);

          setProvider(prov);
          setAccount(accounts[0]);
          setChainId(Number(net.chainId));
          setContract(contractInstance);
          
          // تحديث الرصيد
          const bal = await prov.getBalance(accounts[0]);
          setBalance(formatEther(bal));
          
          console.log('✅ Auto-connected to wallet:', accounts[0]);
        }
      } catch (error) {
        console.log('⏹️ No auto-connection available');
      }
    };

    autoConnect();
  }, []); // ✅ [] يعني يعمل مرة واحدة عند التحميل

  useEffect(() => {
    if (typeof window === 'undefined' || !window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnect();
      } else {
        setAccount(accounts[0]);
        if (provider) updateBalance(accounts[0], provider);
      }
    };

    const handleChainChanged = () => {
      window.location.reload();
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);

    return () => {
      if (window.ethereum?.removeListener) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, [provider]);

  return (
    <Web3Context.Provider value={{ 
      account, 
      balance, 
      chainId, 
      isCorrectNetwork, 
      connect, 
      disconnect, 
      buyTokens, 
      contract,
      provider 
    }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) throw new Error('useWeb3 must be used within Web3Provider');
  return context;
};