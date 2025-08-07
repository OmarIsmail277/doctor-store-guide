import { devices } from '../../public/data/devices.js';
import { devicesAr } from '../../public/data/devices-ar.js';
import DeviceCard from '../components/DeviceCard';
import { useLanguage } from '../context/LanguageContext';

const DevicesPage = () => {
  const { t, currentLanguage } = useLanguage();
  const currentDevices = currentLanguage === 'ar' ? devicesAr : devices;
  
  return (
    <div>
      {/* Page Header */}
      <section className="hero">
        <div className="container">
          <h1>{t('devices.hero.title')}</h1>
          <p>{t('devices.hero.subtitle')}</p>
        </div>
      </section>

      {/* Devices Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('devices.section.title')}</h2>
            <p className="section-subtitle">
              {t('devices.section.subtitle')}
            </p>
          </div>
          <div className="grid grid-4">
            {currentDevices.map((device) => (
              <DeviceCard key={device.id} device={device} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevicesPage;
