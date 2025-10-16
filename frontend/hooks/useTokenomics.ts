import { useState, useEffect } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';

export interface TokenomicsData {
  totalSupply: string;
  presaleAllocation: string;
  liquidityAllocation: string;
  marketingAllocation: string;
  teamAllocation: string;
  reserveAllocation: string;
}

export const useTokenomics = () => {
  const { contract } = useWeb3();
  const [tokenomics, setTokenomics] = useState<TokenomicsData>({
    totalSupply: '0',
    presaleAllocation: '0',
    liquidityAllocation: '0',
    marketingAllocation: '0',
    teamAllocation: '0',
    reserveAllocation: '0'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ بيانات تجريبية للعرض
  const mockTokenomics: TokenomicsData = {
    totalSupply: '1000000000', // 1B tokens
    presaleAllocation: '400000000', // 40%
    liquidityAllocation: '300000000', // 30%
    marketingAllocation: '150000000', // 15%
    teamAllocation: '100000000', // 10%
    reserveAllocation: '50000000' // 5%
  };

  const fetchTokenomics = async () => {
    try {
      setLoading(true);
      setError(null);

      // استخدم البيانات التجريبية دائماً (العقد لا يدعم الدوال)
      setTokenomics(mockTokenomics);
      
      // إذا أردت تجربة البيانات الحقيقية لاحقاً، ضع الكود هنا:
      /*
      if (contract) {
        const [
          totalSupply,
          presaleAllocation,
          liquidityAllocation,
          marketingAllocation,
          teamAllocation,
          reserveAllocation
        ] = await Promise.all([
          contract.totalSupply?.().catch(() => mockTokenomics.totalSupply),
          contract.presaleAllocation?.().catch(() => mockTokenomics.presaleAllocation),
          contract.liquidityAllocation?.().catch(() => mockTokenomics.liquidityAllocation),
          contract.marketingAllocation?.().catch(() => mockTokenomics.marketingAllocation),
          contract.teamAllocation?.().catch(() => mockTokenomics.teamAllocation),
          contract.reserveAllocation?.().catch(() => mockTokenomics.reserveAllocation)
        ]);

        setTokenomics({
          totalSupply: totalSupply?.toString() || mockTokenomics.totalSupply,
          presaleAllocation: presaleAllocation?.toString() || mockTokenomics.presaleAllocation,
          liquidityAllocation: liquidityAllocation?.toString() || mockTokenomics.liquidityAllocation,
          marketingAllocation: marketingAllocation?.toString() || mockTokenomics.marketingAllocation,
          teamAllocation: teamAllocation?.toString() || mockTokenomics.teamAllocation,
          reserveAllocation: reserveAllocation?.toString() || mockTokenomics.reserveAllocation
        });
      } else {
        setTokenomics(mockTokenomics);
      }
      */

    } catch (err: any) {
      console.error('Error fetching tokenomics:', err);
      setError(err.message || 'Failed to fetch tokenomics');
      setTokenomics(mockTokenomics); // استخدم البيانات التجريبية في حال الخطأ
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTokenomics();
  }, [contract]);

  // ✅ حساب النسب المئوية
  const calculatePercentages = () => {
    const total = parseFloat(tokenomics.totalSupply) || 1;
    return {
      presale: (parseFloat(tokenomics.presaleAllocation) / total) * 100,
      liquidity: (parseFloat(tokenomics.liquidityAllocation) / total) * 100,
      marketing: (parseFloat(tokenomics.marketingAllocation) / total) * 100,
      team: (parseFloat(tokenomics.teamAllocation) / total) * 100,
      reserve: (parseFloat(tokenomics.reserveAllocation) / total) * 100
    };
  };

  const percentages = calculatePercentages();

  return {
    tokenomics,
    percentages,
    loading,
    error,
    refresh: fetchTokenomics
  };
};