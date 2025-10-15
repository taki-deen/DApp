import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tokenomics from '@/components/Tokenomics';
import PresalePanel from '@/components/PresalePanel';
import Roadmap from '@/components/Roadmap';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import WalletStatus from '@/components/WalletStatus';
import NetworkSwitcher from '@/components/NetworkSwitcher';
import ContractWarning from '@/components/ContractWarning';

export default function Home() {
  return (
    <>
      <Head>
        <title>Token Presale - Join the Future of DeFi</title>
        <meta name="description" content="Participate in our exclusive token presale on Binance Smart Chain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <NetworkSwitcher />
        <ContractWarning />
        <main>
          <Hero />
          <About />
          <Tokenomics />
          <PresalePanel />
          <Roadmap />
          <Team />
        </main>
        <Footer />
        <WalletStatus />
      </div>
    </>
  );
}

