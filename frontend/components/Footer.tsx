import { CONTRACT_ADDRESS, getNetwork } from '@/lib/contract';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const network = getNetwork();
  const { t } = useLanguage();

  // رواقع التواصل
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/QuantumFi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: "Telegram",
      url: "https://t.me/QuantumFi_Official",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.139c-.202.881-.857 3.019-1.211 4-.348.967-.723 1.934-1.073 2.871-.203.548-.587 1.103-.857 1.103s-.587-.548-.857-1.103c-.348-.937-.723-1.904-1.073-2.871-.354-.981-1.009-3.119-1.211-4-.203-.881-.723-.881-.723 0 .101 1.742 1.211 5.742 1.211 5.742s-.723 1.103-.723 1.934c0 .831.587 1.103.857 1.103s.723-.272 1.073-1.103c.348-.831.857-2.465.857-2.465s.505 1.634.857 2.465c.35.831.723 1.103 1.073 1.103s.857-.272.857-1.103c0-.831-.723-1.934-.723-1.934s1.11-4 1.211-5.742c0-.881-.52-.881-.723 0z"/>
        </svg>
      )
    },
    {
      name: "Discord",
      url: "https://discord.gg/quantumfi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.8 8.18 1.8 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.029 19.94 19.94 0 006.002-3.03.077.077 0 00.032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com/QuantumFi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    }
  ];

  // رواقع مهمة
  const importantLinks = [
    { name: "Whitepaper", url: "https://docs.quantumfi.io" },
    { name: "Audit Report", url: "https://audits.quantumfi.io" },
    { name: "Privacy Policy", url: "https://quantumfi.io/privacy" },
    { name: "Terms of Service", url: "https://quantumfi.io/terms" }
  ];

  const displayAddress = CONTRACT_ADDRESS
    ? `${CONTRACT_ADDRESS.slice(0, 6)}...${CONTRACT_ADDRESS.slice(-4)}`
    : 'Address not set';

  const explorerLink = CONTRACT_ADDRESS
    ? `${network.explorer}/address/${CONTRACT_ADDRESS}`
    : '#';

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* القسم العلوي */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* المشروع */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">QuantumFi</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Next-generation DeFi protocol with AI-powered yield optimization and quantum-resistant security.
            </p>
          </div>

          {/* رواقع التواصل */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Community</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* رواقع مهمة */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Resources</h3>
            <div className="space-y-2">
              {importantLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* العقد الذكي */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Contract</h3>
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Address:</span>
                <span className="text-xs bg-cyan-900 text-cyan-300 px-2 py-1 rounded">
                  {network.name}
                </span>
              </div>
              <a 
                href={explorerLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-mono text-sm text-cyan-400 hover:text-cyan-300 break-all ${!CONTRACT_ADDRESS ? 'pointer-events-none opacity-50' : ''}`}
              >
                {displayAddress}
              </a>
            </div>
          </div>
        </div>

        {/* الخط الفاصل */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* القسم السفلي */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 QuantumFi Protocol. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Built with ❤️ for the decentralized future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}