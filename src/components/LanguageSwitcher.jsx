import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, t } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        {t('language.en')}
      </button>
      <button
        className={`lang-btn ${currentLanguage === 'ar' ? 'active' : ''}`}
        onClick={() => changeLanguage('ar')}
      >
        {t('language.ar')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
