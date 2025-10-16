import { useLanguage } from '@/contexts/LanguageContext';

export default function Team() {
  const { t } = useLanguage();

  // بيانات الفريق الحقيقية
  const teamMembers = [
    {
      name: "Ahmed Toubeh",
      role: "Backend Developer",
      photo: (
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
          AT
        </div>
      )
    },
    {
      name: "TaqiAdeen", 
      role: "Backend Developer",
      photo: (
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
          TA
        </div>
      )
    }
  ];

  return (
    <section id="team" className="py-20 bg-white dark:bg-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Our Core Team
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
          Experienced blockchain developers building the future of decentralized finance
        </p>

        {/* أعضاء الفريق */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="card text-center transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {member.photo}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h3>
              <div className="text-accent font-semibold mb-4">{member.role}</div>
            </div>
          ))}
        </div>

        {/* دعوة للانضمام */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="card bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              🚀 Join Our Journey
            </h3>
            <p className="text-gray-600 dark:text-slate-400 mb-6">
              Connect with us through our social channels to stay updated on the latest developments, 
              participate in community discussions, and be part of the QuantumFi ecosystem.
            </p>
            <div className="flex justify-center space-x-2 text-sm text-gray-500 dark:text-slate-500">
              <span>Follow our progress on</span>
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">Twitter</span>
              <span>&</span>
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">Telegram</span>
            </div>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
          <p className="text-gray-500 dark:text-slate-500">
            © 2024 QuantumFi Protocol. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 dark:text-slate-600 mt-2">
            Built with ❤️ for the decentralized future
          </p>
        </div>
      </div>
    </section>
  );
}