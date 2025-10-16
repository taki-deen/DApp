import { useTokenomics } from '@/hooks/useTokenomics';
import { useLanguage } from '@/contexts/LanguageContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function Tokenomics() {
  const { tokenomics, percentages, loading } = useTokenomics();
  const { t } = useLanguage();

  // ✅ بيانات تجريبية آمنة في حال كانت البيانات غير متوفرة
  const defaultData = [
    { name: t.tokenomics.presale, value: 40, color: '#8884d8' },
    { name: t.tokenomics.liquidity, value: 30, color: '#82ca9d' },
    { name: t.tokenomics.marketing, value: 15, color: '#ffc658' },
    { name: t.tokenomics.team, value: 10, color: '#ff8042' },
    { name: t.tokenomics.reserve, value: 5, color: '#0088fe' }
  ];

  // ✅ استخدام البيانات الحقيقية إذا كانت متوفرة، وإلا البيانات التجريبية
  const chartData = percentages && percentages.presale > 0 ? [
    { name: t.tokenomics.presale, value: percentages.presale, color: '#8884d8' },
    { name: t.tokenomics.liquidity, value: percentages.liquidity, color: '#82ca9d' },
    { name: t.tokenomics.marketing, value: percentages.marketing, color: '#ffc658' },
    { name: t.tokenomics.team, value: percentages.team, color: '#ff8042' },
    { name: t.tokenomics.reserve, value: percentages.reserve, color: '#0088fe' }
  ] : defaultData;

  // ✅ تنسيق الأرقام
  const formatNumber = (num: string) => {
    return parseFloat(num).toLocaleString();
  };

  if (loading) {
    return (
      <section id="tokenomics" className="py-20 bg-white dark:bg-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.tokenomics.title}
          </h2>
          <div className="text-center">Loading tokenomics data...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="tokenomics" className="py-20 bg-white dark:bg-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t.tokenomics.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* الرسم البياني */}
          <div className="h-80 md:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* تفاصيل التوزيع */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t.tokenomics.distribution}
              </h3>
              
              <div className="space-y-4">
                {chartData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-gray-700 dark:text-slate-300 font-medium">
                        {item.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        {item.value.toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-500 dark:text-slate-500">
                        {formatNumber(
                          item.name === t.tokenomics.presale ? tokenomics.presaleAllocation :
                          item.name === t.tokenomics.liquidity ? tokenomics.liquidityAllocation :
                          item.name === t.tokenomics.marketing ? tokenomics.marketingAllocation :
                          item.name === t.tokenomics.team ? tokenomics.teamAllocation :
                          tokenomics.reserveAllocation
                        )} Tokens
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* إجمالي العرض */}
            <div className="card text-center">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {t.tokenomics.totalSupply}
              </h4>
              <div className="text-3xl font-bold text-accent">
                {formatNumber(tokenomics.totalSupply)}
              </div>
              <div className="text-sm text-gray-500 dark:text-slate-500 mt-1">
                Total Tokens
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}