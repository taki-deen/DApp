import { useState, useEffect } from 'react';

// ✅ بيانات تجريبية ثابتة
const MOCK_DATA = {
  tokenPrice: "0.0005",
  tokensSold: "450000", 
  tokensAvailable: "550000",
  endTime: (Math.floor(Date.now() / 1000) + 86400 * 5).toString(),
};

export const useContractData = () => {
  const [tokenPrice, setTokenPrice] = useState(MOCK_DATA.tokenPrice);
  const [tokensSold, setTokensSold] = useState(MOCK_DATA.tokensSold);
  const [tokensAvailable, setTokensAvailable] = useState(MOCK_DATA.tokensAvailable);
  const [endTime, setEndTime] = useState(MOCK_DATA.endTime);
  const [loading, setLoading] = useState(false);

  const refresh = () => {
    // لا شيء - البيانات ثابتة
  };

  return {
    tokenPrice,
    tokensSold,
    tokensAvailable,
    endTime,
    loading,
    refresh
  };
};

// ✅ تأكد من التصدير الافتراضي
export default useContractData;