import { useState, useEffect } from 'react';
import { formatEther } from 'ethers';
import { useWeb3 } from '@/contexts/Web3Context';

export interface TokenomicsData {
  name: string;
  value: number;
  color: string;
  amount?: string;
}

export const useTokenomics = () => {
  const { contract } = useWeb3();
  const [data, setData] = useState<TokenomicsData[]>([
    { name: 'Presale', value: 40, color: '#5B21B6' },
    { name: 'Liquidity', value: 30, color: '#FBBF24' },
    { name: 'Marketing', value: 15, color: '#10B981' },
    { name: 'Team', value: 10, color: '#EF4444' },
    { name: 'Reserve', value: 5, color: '#3B82F6' },
  ]);
  const [totalSupply, setTotalSupply] = useState('1,000,000,000');
  const [marketCap, setMarketCap] = useState('$500K');
  const [loading, setLoading] = useState(true);

  const fetchTokenomics = async () => {
    if (!contract) {
      setLoading(false);
      return;
    }

    try {
      const [
        total,
        presale,
        liquidity,
        marketing,
        team,
        reserve
      ] = await Promise.all([
        contract.totalSupply().catch(() => null),
        contract.presaleAllocation().catch(() => null),
        contract.liquidityAllocation().catch(() => null),
        contract.marketingAllocation().catch(() => null),
        contract.teamAllocation().catch(() => null),
        contract.reserveAllocation().catch(() => null)
      ]);

      if (total) {
        const totalNum = parseFloat(formatEther(total));
        setTotalSupply(totalNum.toLocaleString(undefined, { maximumFractionDigits: 0 }));

        const allocations = [
          { value: presale, name: 'Presale', color: '#5B21B6' },
          { value: liquidity, name: 'Liquidity', color: '#FBBF24' },
          { value: marketing, name: 'Marketing', color: '#10B981' },
          { value: team, name: 'Team', color: '#EF4444' },
          { value: reserve, name: 'Reserve', color: '#3B82F6' },
        ];

        const newData = allocations.map(item => {
          if (item.value) {
            const amount = parseFloat(formatEther(item.value));
            const percentage = (amount / totalNum) * 100;
            return {
              name: item.name,
              value: parseFloat(percentage.toFixed(2)),
              color: item.color,
              amount: amount.toLocaleString(undefined, { maximumFractionDigits: 0 })
            };
          }
          return null;
        }).filter(Boolean) as TokenomicsData[];

        if (newData.length > 0) {
          setData(newData);
        }
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching tokenomics:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTokenomics();
  }, [contract]);

  return { data, totalSupply, marketCap, loading };
};

