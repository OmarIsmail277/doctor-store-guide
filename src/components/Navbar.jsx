import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          {t('nav.logo')}
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">{t('nav.home')}</Link>
          </li>
          <li>
            <Link to="/devices">{t('nav.devices')}</Link>
          </li>
          <li>
            <Link to="/diseases">{t('nav.diseases')}</Link>
          </li>
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
