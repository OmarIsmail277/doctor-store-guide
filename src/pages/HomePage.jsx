import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { diseases } from '../../public/data/diseases.js';
import { devices } from '../../public/data/devices.js';
import { diseasesAr } from '../../public/data/diseases-ar.js';
import { devicesAr } from '../../public/data/devices-ar.js';
import DiseaseCard from '../components/DiseaseCard';
import DeviceCard from '../components/DeviceCard';
import { useLanguage } from '../context/LanguageContext';

const HomePage = () => {
  const { t, currentLanguage } = useLanguage();
  const [featuredDiseases, setFeaturedDiseases] = useState([]);
  const [featuredDevices, setFeaturedDevices] = useState([]);

  useEffect(() => {
    const currentDiseases = currentLanguage === 'ar' ? diseasesAr : diseases;
    const currentDevices = currentLanguage === 'ar' ? devicesAr : devices;
    
    // Get 3 random diseases
    const shuffledDiseases = [...currentDiseases].sort(() => 0.5 - Math.random());
    setFeaturedDiseases(shuffledDiseases.slice(0, 3));

    // Get 3 random devices
    const shuffledDevices = [...currentDevices].sort(() => 0.5 - Math.random());
    setFeaturedDevices(shuffledDevices.slice(0, 3));
  }, [currentLanguage]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>{t('home.hero.title')}</h1>
          <p>{t('home.hero.subtitle')}</p>
          <p>{t('home.hero.companion')} <a href="https://doctors-store.com" target="_blank" rel="noopener noreferrer" style={{ color: '#e0e7ff', textDecoration: 'underline' }}>Doctors-Store.com</a></p>
        </div>
      </section>

      {/* Featured Diseases Section */}
      <section className="section">
        <div className="container">
          <div className="featured-section">
            <div className="featured-header">
              <h2 className="featured-title">{t('home.featured.diseases')}</h2>
              <Link to="/diseases" className="btn btn-outline">{t('home.featured.viewAll')}</Link>
            </div>
            <div className="grid grid-3">
              {featuredDiseases.map((disease) => (
                <DiseaseCard key={disease.id} disease={disease} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Devices Section */}
      <section className="section">
        <div className="container">
          <div className="featured-section">
            <div className="featured-header">
              <h2 className="featured-title">{t('home.featured.devices')}</h2>
              <Link to="/devices" className="btn btn-outline">{t('home.featured.viewAll')}</Link>
            </div>
            <div className="grid grid-3">
              {featuredDevices.map((device) => (
                <DeviceCard key={device.id} device={device} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
