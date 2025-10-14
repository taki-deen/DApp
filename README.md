# Crypto Presale Landing Page 🚀

Modern React/Next.js presale landing page for BSC tokens with Web3 integration and multi-language support.

## Features ✨

- 🌐 **Dual Language Support** (English/Arabic with RTL)
- 🔗 **Web3 Wallet Integration** (MetaMask, WalletConnect)
- 📊 **Live Contract Data** (price, tokens sold, countdown)
- 💰 **Secure Buy Flow** with real-time validation
- 📱 **Mobile-First Responsive Design**
- ⚡ **Fast Performance** with Next.js
- 🎨 **Modern UI** with Tailwind CSS

## Setup 🛠️

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS=0xYourContractAddress
NEXT_PUBLIC_NETWORK=bsc-testnet
NEXT_PUBLIC_RPC_URL=https://data-seed-prebsc-1-s1.binance.org:8545/
NEXT_PUBLIC_CHAIN_ID=97
```

**For BSC Mainnet:**
- `NEXT_PUBLIC_NETWORK=bsc-mainnet`
- `NEXT_PUBLIC_CHAIN_ID=56`
- `NEXT_PUBLIC_RPC_URL=https://bsc-dataseed.binance.org/`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Language System 🌍

The app supports **English** and **Arabic** with full RTL support.

### How It Works

- Language switcher in header
- Auto-saves preference to localStorage
- Automatic RTL layout for Arabic
- All text from `lib/translations.ts`

### Add New Translations

Edit `lib/translations.ts`:

```typescript
export const translations = {
  en: {
    newSection: {
      title: 'New Title',
      description: 'Description'
    }
  },
  ar: {
    newSection: {
      title: 'عنوان جديد',
      description: 'الوصف'
    }
  }
};
```

Use in components:

```tsx
import { useLanguage } from '@/contexts/LanguageContext';

export default function MyComponent() {
  const { t } = useLanguage();
  return <h1>{t.newSection.title}</h1>;
}
```

## Smart Contract Requirements 📋

Your contract must implement:

```solidity
function buyTokens() external payable
function tokenPrice() external view returns (uint256)
function tokensSold() external view returns (uint256)
function tokensAvailable() external view returns (uint256)
function endTime() external view returns (uint256)

// For tokenomics (optional but recommended)
function totalSupply() external view returns (uint256)
function presaleAllocation() external view returns (uint256)
function liquidityAllocation() external view returns (uint256)
function marketingAllocation() external view returns (uint256)
function teamAllocation() external view returns (uint256)
function reserveAllocation() external view returns (uint256)
```

Sample contract available in `contracts/PresaleSample.sol`

## Project Structure 📁

```
├── components/           # React components
│   ├── Header.tsx       # Navigation + wallet
│   ├── Hero.tsx         # Main banner + stats
│   ├── About.tsx        # Project info
│   ├── Tokenomics.tsx   # Distribution chart
│   ├── PresalePanel.tsx # Buy interface
│   ├── Roadmap.tsx      # Timeline
│   ├── Team.tsx         # Team + socials
│   └── Footer.tsx       # Footer
├── contexts/            # React contexts
│   ├── Web3Context.tsx  # Wallet management
│   └── LanguageContext.tsx # i18n
├── hooks/               # Custom hooks
│   ├── useContractData.ts # Contract polling
│   └── useTokenomics.ts   # Tokenomics data
├── lib/                 # Utilities
│   ├── contract.ts      # ABI + config
│   └── translations.ts  # Language files
└── pages/               # Next.js pages
    ├── _app.tsx         # App wrapper
    └── index.tsx        # Home page
```

## Testing on BSC Testnet 🧪

1. Switch MetaMask to BSC Testnet
2. Get free BNB from [faucet](https://testnet.bnbchain.org/faucet-smart)
3. Deploy your contract or use sample
4. Update `.env.local` with contract address
5. Test the buy flow

## Production Build 🚀

```bash
npm run build
npm start
```

## Customization 🎨

### Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: '#5B21B6',  // Purple
  accent: '#FBBF24',   // Gold
  dark: '#0F172A',     // Navy
}
```

### Tokenomics

If your contract doesn't have tokenomics functions, edit `hooks/useTokenomics.ts` to use static values.

## Support 💬

For issues or questions, check the code comments or contract sample.
