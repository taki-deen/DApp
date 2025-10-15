# Frontend - Crypto Presale Landing Page

This is the frontend application for the crypto presale landing page built with Next.js and Web3 integration.

## Features

- Modern React/Next.js application
- Web3 wallet integration with Web3Modal
- Multi-language support (Arabic/English)
- Dark/Light theme support
- Responsive design with Tailwind CSS
- BSC Testnet integration

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env.local
```

3. Update `.env.local` with your contract address:
```
NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS=your_contract_address_here
NEXT_PUBLIC_NETWORK=bsc-testnet
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

- `components/` - React components
- `contexts/` - React contexts (Web3, Theme, Language)
- `hooks/` - Custom React hooks
- `lib/` - Utility functions and configurations
- `pages/` - Next.js pages
- `styles/` - CSS modules and global styles
- `public/` - Static assets
