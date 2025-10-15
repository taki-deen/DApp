import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useTokenomics } from '@/hooks/useTokenomics';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Tokenomics() {
  const { data, totalSupply, marketCap, loading } = useTokenomics();
  const { t } = useLanguage();

  return (
    <section id="tokenomics" className="py-20 bg-white dark:bg-dark transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t.tokenomics.title}
        </h2>

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-slate-400">{t.tokenomics.loading}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="card h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-6">{t.tokenomics.distribution}</h3>
              <div className="space-y-4">
                {data.map((item) => (
                  <div key={item.name} className="flex justify-between items-center pb-3 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
                      <span className="font-semibold">{item.name}</span>
                    </div>
                    <div className="text-right rtl:text-left">
                      <div className="text-slate-300 font-bold">{item.value}%</div>
                      {item.amount && (
                        <div className="text-xs text-slate-500">{item.amount} Tokens</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-400">{t.tokenomics.totalSupply}</div>
                    <div className="font-bold text-lg">{totalSupply}</div>
                  </div>
                  <div>
                    <div className="text-slate-400">{t.tokenomics.marketCap}</div>
                    <div className="font-bold text-lg">{marketCap}</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                {t.tokenomics.liveData}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

