import { useState, useEffect } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';

export const useContractData = () => {
  const { contract, account } = useWeb3();
  const [tokenPrice, setTokenPrice] = useState('');
  const [tokensSold, setTokensSold] = useState('');
  const [totalTokens, setTotalTokens] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isLoading, setIsLoading] = useState(true); // ابدأ بـ true

  // ✅ بيانات تجريبية آمنة للـ SSR
  const mockData = {
    tokenPrice: "0.0005",
    tokensSold: "450000", 
    totalTokens: "1000000",
    endTime: (Math.floor(Date.now() / 1000) + 86400 * 5).toString(),
  };

  const fetchContractData = async () => {
    // استخدم البيانات التجريبية دائماً للاختبار
    setTokenPrice(mockData.tokenPrice);
    setTokensSold(mockData.tokensSold);
    setTotalTokens(mockData.totalTokens);
    setEndTime(mockData.endTime);
    setIsLoading(false);

    // إذا أردت تجربة البيانات الحقيقية لاحقاً، ضع الكود هنا
  };

  useEffect(() => {
    fetchContractData();
  }, []); // [] يعني يعمل مرة واحدة عند التحميل

  const refresh = () => {
    fetchContractData();
  };

  return {
    tokenPrice,
    tokensSold,
    totalTokens,
    endTime,
    isLoading,
    refresh
  };
};