import { useLanguage } from '@/contexts/LanguageContext';

const milestones = [
  { title: 'Q4 2024 - Project Launch', status: 'completed', date: 'Oct 2024' },
  { title: 'Q4 2024 - Smart Contract Audit', status: 'completed', date: 'Nov 2024' },
  { title: 'Q1 2025 - Presale Launch', status: 'in-progress', date: 'Jan 2025' },
  { title: 'Q1 2025 - DEX Listing', status: 'upcoming', date: 'Feb 2025' },
  { title: 'Q2 2025 - Marketing Campaign', status: 'upcoming', date: 'Apr 2025' },
  { title: 'Q2 2025 - CEX Listings', status: 'upcoming', date: 'Jun 2025' },
  { title: 'Q3 2025 - Product Launch', status: 'upcoming', date: 'Jul 2025' },
  { title: 'Q4 2025 - Global Expansion', status: 'upcoming', date: 'Oct 2025' },
];

export default function Roadmap() {
  const { t } = useLanguage();

  return (
    <section id="roadmap" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t.roadmap.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    milestone.status === 'completed' ? 'bg-green-500 border-green-500' :
                    milestone.status === 'in-progress' ? 'bg-accent border-accent animate-pulse' :
                    'bg-slate-700 border-slate-600'
                  }`} />
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full min-h-[60px] bg-slate-700 mt-2" />
                  )}
                </div>

                <div className="card flex-1 mb-4">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <h3 className="text-lg font-bold">{milestone.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      milestone.status === 'completed' ? 'bg-green-900 text-green-300' :
                      milestone.status === 'in-progress' ? 'bg-yellow-900 text-accent' :
                      'bg-slate-700 text-slate-300'
                    }`}>
                      {milestone.status === 'completed' ? `✓ ${t.roadmap.completed}` :
                       milestone.status === 'in-progress' ? `⏳ ${t.roadmap.inProgress}` :
                       `📅 ${t.roadmap.upcoming}`}
                    </span>
                  </div>
                  <div className="text-sm text-slate-400">{milestone.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
