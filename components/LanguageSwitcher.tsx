import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded text-sm font-semibold transition-all ${
          language === 'en'
            ? 'bg-primary text-white'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ar')}
        className={`px-3 py-1 rounded text-sm font-semibold transition-all ${
          language === 'ar'
            ? 'bg-primary text-white'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        عربي
      </button>
    </div>
  );
}

