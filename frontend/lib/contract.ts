// ===================== PRESALE ABI =====================
export const PRESALE_ABI = [
  // دوال PancakeSwap Router (للعنوان 0xD99D1c33F9fC3444f8101754aBC46c52416550D1)
  {
    "inputs": [
      {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"},
      {"internalType": "address[]", "name": "path", "type": "address[]"},
      {"internalType": "address", "name": "to", "type": "address"},
      {"internalType": "uint256", "name": "deadline", "type": "uint256"}
    ],
    "name": "swapExactETHForTokens",
    "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "WETH",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "amountIn", "type": "uint256"},
      {"internalType": "address[]", "name": "path", "type": "address[]"}
    ],
    "name": "getAmountsOut",
    "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
    "stateMutability": "view",
    "type": "function"
  },
  // دوال احتياطية لعقود Presale عامة
  {
    "inputs": [],
    "name": "buyTokens",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokenPrice",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokensSold",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalTokens",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "endTime",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }
];

// ===================== NETWORKS =====================
export const BSC_TESTNET = {
  chainId: 97,
  name: 'BSC Testnet',
  rpcUrl: 'https://bsc-testnet.publicnode.com',
  explorer: 'https://testnet.bscscan.com'
};

export const BSC_MAINNET = {
  chainId: 56,
  name: 'BSC Mainnet',
  rpcUrl: 'https://bsc-dataseed.binance.org/',
  explorer: 'https://bscscan.com'
};

// ===================== NETWORK SELECTION =====================
export const getNetwork = () => {
  const network = process.env.NEXT_PUBLIC_NETWORK || 'bsc-testnet';
  return network === 'bsc-mainnet' ? BSC_MAINNET : BSC_TESTNET;
};

// ===================== ENVIRONMENT VARIABLES =====================
const ENV_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS;
const ENV_NETWORK = process.env.NEXT_PUBLIC_NETWORK;

// ✅ Debugging log to verify environment variables
console.log("🔍 Loaded Environment Variables:");
console.log("NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS =", ENV_CONTRACT_ADDRESS);
console.log("NEXT_PUBLIC_NETWORK =", ENV_NETWORK);

// ===================== CONTRACT ADDRESS =====================
export const CONTRACT_ADDRESS =
  ENV_CONTRACT_ADDRESS && ENV_CONTRACT_ADDRESS !== ''
    ? ENV_CONTRACT_ADDRESS
    : '0xD99D1c33F9fC3444f8101754aBC46c52416550D1'; // Default to PancakeSwap Testnet

// ===================== VALIDATION =====================
export const isValidContractAddress = (address: string) => {
  const isValid =
    address &&
    address.startsWith('0x') &&
    address.length === 42;

  if (!isValid) {
    console.warn('⚠️ عنوان العقد غير صحيح أو لم يتم تحميله من .env.local');
    console.warn('العنوان الحالي:', address);
    console.warn('يرجى التأكد من ملف .env.local والموقع الصحيح للتشغيل.');
  }

  return isValid;
};

// ===================== TOKEN CONFIGURATION =====================
export const TOKEN_CONFIG = {
  // إعدادات التوكن الافتراضية للعرض
  name: "TestToken",
  symbol: "TEST",
  decimals: 18,
  totalSupply: "1000000"
};

// ===================== PRESALE CONFIGURATION =====================
export const PRESALE_CONFIG = {
  // إعدادات البيع المسبق الافتراضية
  price: "0.001",
  hardCap: "1000",
  softCap: "500",
  minBuy: "0.01",
  maxBuy: "10"
};

// ===================== EXPORT =====================
export default {
  PRESALE_ABI,
  BSC_TESTNET,
  BSC_MAINNET,
  getNetwork,
  CONTRACT_ADDRESS,
  isValidContractAddress,
  TOKEN_CONFIG,
  PRESALE_CONFIG
};