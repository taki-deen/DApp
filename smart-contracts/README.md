# Smart Contracts

This directory contains the smart contracts for the crypto presale project.

## Contracts

- `TokenPresale.sol` - Main presale contract for token sales

## Features

- Token presale functionality
- BNB payment integration
- Owner withdrawal capabilities
- Tokenomics allocation tracking
- Time-based presale ending

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Compile contracts:
```bash
npm run compile
```

3. Run tests:
```bash
npm run test
```

4. Deploy to local network:
```bash
npm run deploy
```

5. Deploy to BSC Testnet:
```bash
npm run deploy:testnet
```

## Contract Details

### TokenPresale Contract

**Functions:**
- `buyTokens()` - Buy tokens with BNB
- `withdraw()` - Owner can withdraw collected BNB
- `tokenPrice()` - Get current token price
- `tokensSold()` - Get amount of tokens sold
- `tokensAvailable()` - Get remaining tokens
- `endTime()` - Get presale end time

**Tokenomics:**
- Total Supply: 1,000,000,000 tokens
- Presale Allocation: 400,000,000 tokens (40%)
- Liquidity Allocation: 300,000,000 tokens (30%)
- Marketing Allocation: 150,000,000 tokens (15%)
- Team Allocation: 100,000,000 tokens (10%)
- Reserve Allocation: 50,000,000 tokens (5%)

## Network Configuration

- **BSC Testnet**: Chain ID 97
- **BSC Mainnet**: Chain ID 56

## Deployment

After deploying, copy the contract address to your frontend's `.env.local` file:

```
NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS=deployed_contract_address
```
