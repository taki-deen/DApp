import { useLanguage } from '@/contexts/LanguageContext';

export default function Roadmap() {
  const { t } = useLanguage();

  // بيانات خارطة الطريق الحقيقية
  const roadmapData = [
    {
      quarter: "Q4 2023",
      title: "Project Foundation",
      date: "Dec 2023",
      completed: true,
      items: [
        "Team Assembly & Legal Structure",
        "Whitepaper V1 Completion", 
        "Smart Contract Architecture",
        "Initial Community Building"
      ]
    },
    {
      quarter: "Q1 2024", 
      title: "Development Phase",
      date: "Mar 2024",
      completed: true,
      items: [
        "Smart Contract Development",
        "Frontend DApp Development",
        "Private Round Funding ($500K)",
        "Testnet Deployment"
      ]
    },
    {
      quarter: "Q2 2024",
      title: "Security & Testing",
      date: "Jun 2024", 
      completed: true,
      items: [
        "Comprehensive Security Audit",
        "Bug Bounty Program Launch",
        "Community Beta Testing",
        "Marketing Preparation"
      ]
    },
    {
      quarter: "Q3 2024",
      title: "Presale Launch",
      date: "Sep 2024",
      completed: true, 
      items: [
        "Public Presale Launch",
        "Tier 1-3 Bonus Distribution", 
        "Community AMA Sessions",
        "Exchange Partnerships"
      ]
    },
    {
      quarter: "Q4 2024",
      title: "Exchange Listings",
      date: "Nov 2024",
      completed: false,
      items: [
        "PancakeSwap Listing",
        "CEX Listings (Gate.io, MEXC)",
        "Liquidity Pool Establishment", 
        "Trading Competitions"
      ]
    },
    {
      quarter: "Q1 2025",
      title: "Product Launch",
      date: "Feb 2025", 
      completed: false,
      items: [
        "QuantumFi Platform V1 Launch",
        "Staking & Farming Pools",
        "Cross-Chain Bridge Integration",
        "Mobile App Beta"
      ]
    },
    {
      quarter: "Q2 2025",
      title: "Ecosystem Expansion", 
      date: "May 2025",
      completed: false,
      items: [
        "NFT Marketplace Integration",
        "DAO Governance Launch",
        "Strategic Partnerships", 
        "Global Marketing Campaign"
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Global Scale",
      date: "Aug 2025",
      completed: false,
      items: [
        "Multi-Chain Deployment",
        "Enterprise Solutions", 
        "Asian Market Expansion",
        "500K+ User Milestone"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Project Roadmap
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
          Strategic timeline showcasing our journey from concept to global adoption
        </p>

        <div className="relative">
          {/* الخط الزمني */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 h-full hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {roadmapData.map((phase, index) => (
              <div key={index} className={`relative flex flex-col lg:flex-row items-center lg:items-start ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* نقطة الزمن */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 rounded-full border-4 z-10 ${
                  phase.completed 
                    ? 'bg-green-500 border-green-400 shadow-lg shadow-green-500/50' 
                    : 'bg-white border-cyan-500 dark:bg-slate-800 dark:border-purple-500'
                }`}>
                  {phase.completed && (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  )}
                </div>

                {/* محتوى المرحلة */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <div className={`card transform hover:scale-105 transition-all duration-300 ${
                    phase.completed ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20' : 'border-cyan-200 dark:border-purple-800'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          phase.completed 
                            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200' 
                            : 'bg-cyan-100 text-cyan-800 dark:bg-purple-800 dark:text-purple-200'
                        }`}>
                          {phase.quarter}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                          {phase.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-slate-400">{phase.date}</div>
                        <div className={`text-xs font-semibold ${
                          phase.completed ? 'text-green-600 dark:text-green-400' : 'text-cyan-600 dark:text-purple-400'
                        }`}>
                          {phase.completed ? 'COMPLETED' : 'UPCOMING'}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 text-gray-600 dark:text-slate-400">
                          <span className={`mt-1 w-2 h-2 rounded-full ${
                            phase.completed ? 'bg-green-400' : 'bg-cyan-400'
                          }`}></span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* المسافة للتصميم */}
                <div className="lg:w-1/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center mt-12 space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-green-400 border-2 border-green-300"></div>
            <span className="text-sm text-gray-600 dark:text-slate-400">Completed</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-cyan-500 dark:bg-slate-800 dark:border-purple-500"></div>
            <span className="text-sm text-gray-600 dark:text-slate-400">Upcoming</span>
          </div>
        </div>
      </div>
    </section>
  );
}