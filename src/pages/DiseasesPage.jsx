import { diseases } from '../../public/data/diseases.js';
import { diseasesAr } from '../../public/data/diseases-ar.js';
import DiseaseCard from '../components/DiseaseCard';
import { useLanguage } from '../context/LanguageContext';

const DiseasesPage = () => {
  const { t, currentLanguage } = useLanguage();
  const currentDiseases = currentLanguage === 'ar' ? diseasesAr : diseases;
  
  return (
    <div>
      {/* Page Header */}
      <section className="hero">
        <div className="container">
          <h1>{t('diseases.hero.title')}</h1>
          <p>{t('diseases.hero.subtitle')}</p>
        </div>
      </section>

      {/* Diseases Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('diseases.section.title')}</h2>
            <p className="section-subtitle">
              {t('diseases.section.subtitle')}
            </p>
          </div>
          <div className="grid grid-4">
            {currentDiseases.map((disease) => (
              <DiseaseCard key={disease.id} disease={disease} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiseasesPage;
