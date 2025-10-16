require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const {
  BSC_TESTNET_RPC,
  BSC_MAINNET_RPC,
  BSC_TESTNET_PRIVATE_KEY,
  PRIVATE_KEY,
  BSCSCAN_API_KEY
} = process.env;

// تجهيز المفتاح الخاص
const deployKey = (BSC_TESTNET_PRIVATE_KEY || PRIVATE_KEY || "").startsWith("0x")
  ? (BSC_TESTNET_PRIVATE_KEY || PRIVATE_KEY || "")
  : ("0x" + (BSC_TESTNET_PRIVATE_KEY || PRIVATE_KEY || ""));

module.exports = {
  solidity: "0.8.20",
  networks: {
    bscTestnet: {      // تم تغييره ليطابق اسم الشبكة اللي تريد استخدامها
      url: BSC_TESTNET_RPC || "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: deployKey ? [deployKey] : []
    },
    bscMainnet: {
      url: BSC_MAINNET_RPC || "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: deployKey ? [deployKey] : []
    }
  },
  etherscan: {
    apiKey: BSCSCAN_API_KEY || ""  // للتحقق من العقود تلقائيًا على BscScan (اختياري)
  }
};
