import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/styles/components/LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.languageContainer}>
      <button
        onClick={() => setLanguage('en')}
        className={`${styles.languageButton} ${
          language === 'en' ? styles.languageButtonActive : styles.languageButtonInactive
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ar')}
        className={`${styles.languageButton} ${
          language === 'ar' ? styles.languageButtonActive : styles.languageButtonInactive
        }`}
      >
        عربي
      </button>
    </div>
  );
}

