export const PRESALE_ABI = [
  "function buyTokens() external payable",
  "function tokenPrice() external view returns (uint256)",
  "function tokensSold() external view returns (uint256)",
  "function tokensAvailable() external view returns (uint256)",
  "function endTime() external view returns (uint256)",
  "function token() external view returns (address)",
  "function owner() external view returns (address)",
  "function totalSupply() external view returns (uint256)",
  "function presaleAllocation() external view returns (uint256)",
  "function liquidityAllocation() external view returns (uint256)",
  "function marketingAllocation() external view returns (uint256)",
  "function teamAllocation() external view returns (uint256)",
  "function reserveAllocation() external view returns (uint256)"
];

export const BSC_TESTNET = {
  chainId: 97,
  name: 'BSC Testnet',
  rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  explorer: 'https://testnet.bscscan.com'
};

export const BSC_MAINNET = {
  chainId: 56,
  name: 'BSC Mainnet',
  rpcUrl: 'https://bsc-dataseed.binance.org/',
  explorer: 'https://bscscan.com'
};

export const getNetwork = () => {
  const network = process.env.NEXT_PUBLIC_NETWORK || 'bsc-testnet';
  return network === 'bsc-mainnet' ? BSC_MAINNET : BSC_TESTNET;
};

export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS;

