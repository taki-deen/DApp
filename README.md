# Crypto Presale DApp

A decentralized application for crypto token presale with separate frontend and smart contract components.

## Project Structure

```
DApp/
├── frontend/           # Next.js frontend application
│   ├── components/     # React components
│   ├── contexts/       # React contexts
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilities and configurations
│   ├── pages/          # Next.js pages
│   ├── styles/         # CSS modules
│   └── public/         # Static assets
├── smart-contracts/    # Hardhat smart contracts
│   ├── contracts/      # Solidity contracts
│   ├── scripts/        # Deployment scripts
│   └── test/           # Contract tests
├── .env.local          # Environment variables
├── package.json        # Root package.json with scripts
└── README.md           # This file
```

## Quick Start

### Frontend Development

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment file:
```bash
cp .env.example .env.local
```

4. Update contract address in `.env.local`

5. Run development server:
```bash
npm run dev
```

### Smart Contract Development

1. Navigate to smart-contracts directory:
```bash
cd smart-contracts
```

2. Install dependencies:
```bash
npm install
```

3. Compile contracts:
```bash
npm run compile
```

4. Run tests:
```bash
npm run test
```

5. Deploy to BSC Testnet:
```bash
npm run deploy:testnet
```

## Features

### Frontend
- Modern React/Next.js application
- Web3 wallet integration
- Multi-language support (Arabic/English)
- Dark/Light theme
- Responsive design
- BSC Testnet integration

### Smart Contracts
- Token presale functionality
- BNB payment integration
- Owner withdrawal capabilities
- Tokenomics allocation tracking
- Time-based presale ending

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Web3**: Ethers.js, Web3Modal
- **Smart Contracts**: Solidity, Hardhat
- **Blockchain**: BSC (Binance Smart Chain)

## Development Workflow

1. Develop smart contracts in `smart-contracts/`
2. Deploy contracts and get contract address
3. Update frontend `.env.local` with contract address
4. Develop frontend in `frontend/`
5. Test integration between frontend and contracts

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes in appropriate directory
4. Test thoroughly
5. Submit pull request