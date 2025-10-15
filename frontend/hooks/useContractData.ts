import { useState, useEffect } from 'react';
import { Contract, formatEther } from 'ethers';
import { useWeb3 } from '@/contexts/Web3Context';

export const useContractData = () => {
  const { contract } = useWeb3();
  const [tokenPrice, setTokenPrice] = useState('0');
  const [tokensSold, setTokensSold] = useState('0');
  const [tokensAvailable, setTokensAvailable] = useState('0');
  const [endTime, setEndTime] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!contract) return;
    
    try {
      const [price, sold, available, end] = await Promise.all([
        contract.tokenPrice(),
        contract.tokensSold(),
        contract.tokensAvailable(),
        contract.endTime()
      ]);

      setTokenPrice(formatEther(price));
      setTokensSold(formatEther(sold));
      setTokensAvailable(formatEther(available));
      setEndTime(Number(end));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching contract data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [contract]);

  return { tokenPrice, tokensSold, tokensAvailable, endTime, loading, refresh: fetchData };
};

