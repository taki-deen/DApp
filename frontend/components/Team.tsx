import { useLanguage } from '@/contexts/LanguageContext';

const socials = [
  { name: 'Twitter', url: '#', icon: '𝕏' },
  { name: 'Telegram', url: '#', icon: '✈️' },
  { name: 'Discord', url: '#', icon: '💬' },
  { name: 'Medium', url: '#', icon: 'M' },
];

export default function Team() {
  const { t } = useLanguage();

  const team = [
    { name: 'John Doe', role: t.team.ceo, avatar: '👨‍💼' },
    { name: 'Jane Smith', role: t.team.cto, avatar: '👩‍💻' },
    { name: 'Mike Johnson', role: t.team.lead, avatar: '👨‍🔧' },
    { name: 'Sarah Williams', role: t.team.marketing, avatar: '👩‍🎨' },
  ];

  return (
    <section id="team" className="py-20 bg-gray-100 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t.team.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {team.map((member, index) => (
            <div key={index} className="card text-center hover:border-primary transition-all">
              <div className="text-6xl mb-4">{member.avatar}</div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-slate-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">{t.team.joinCommunity}</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card hover:border-accent transition-all min-w-[120px] text-center"
              >
                <div className="text-3xl mb-2">{social.icon}</div>
                <div className="font-semibold">{social.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
