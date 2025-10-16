import { useLanguage } from '@/contexts/LanguageContext';
import { CONTRACT_ADDRESS, getNetwork } from '@/lib/contract';

export default function About() {
  const { t } = useLanguage();
  const network = getNetwork();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About QuantumFi
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Overview */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              🚀 Project Overview
            </h3>
            <p className="text-gray-600 dark:text-slate-400 mb-4">
              <strong>QuantumFi</strong> is a revolutionary DeFi 3.0 protocol built on Binance Smart Chain, 
              designed to bridge traditional finance with decentralized technologies through advanced 
              quantum-resistant cryptography and AI-powered yield optimization.
            </p>
            <p className="text-gray-600 dark:text-slate-400">
              Our presale offers early investors exclusive access to <strong>QFI tokens</strong> at a 
              strategic price point, with tiered bonuses and guaranteed allocation for participants 
              who join during the private sale phase.
            </p>
          </div>

          {/* Technical Details */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              ⚙️ Technical Specifications
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-slate-400">
              <div className="flex justify-between">
                <span>Blockchain:</span>
                <span className="font-semibold text-primary">BSC Mainnet</span>
              </div>
              <div className="flex justify-between">
                <span>Token Standard:</span>
                <span className="font-semibold">BEP-20</span>
              </div>
              <div className="flex justify-between">
                <span>Total Supply:</span>
                <span className="font-semibold">1,000,000,000 QFI</span>
              </div>
              <div className="flex justify-between">
                <span>Presale Supply:</span>
                <span className="font-semibold">400,000,000 QFI (40%)</span>
              </div>
              <div className="flex justify-between">
                <span>Initial Market Cap:</span>
                <span className="font-semibold">$2,500,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="card mt-8">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            📄 Smart Contract
          </h3>
          <div className="bg-gray-100 dark:bg-slate-700 rounded-lg p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="text-sm text-gray-500 dark:text-slate-400 mb-1">
                  Contract Address
                </div>
                <div className="font-mono text-sm break-all text-gray-900 dark:text-white">
                  {CONTRACT_ADDRESS}
                </div>
              </div>
              <a
                href={`${network.explorer}/address/${CONTRACT_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-4 py-2 whitespace-nowrap"
              >
                View on BscScan
              </a>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                Security Notice
              </h4>
              <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                <li>• Always verify the contract address before any transaction</li>
                <li>• Never share your private keys or seed phrases</li>
                <li>• Our team will never DM you first or ask for wallet credentials</li>
                <li>• Smart contract has been professionally audited by CertiK</li>
                <li>• Double-check URLs to avoid phishing sites</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}