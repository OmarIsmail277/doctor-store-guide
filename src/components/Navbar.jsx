import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          {t("nav.logo")}
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? "line open" : "line"}></span>
          <span className={isOpen ? "line open" : "line"}></span>
          <span className={isOpen ? "line open" : "line"}></span>
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              {t("nav.home")}
            </Link>
          </li>
          <li>
            <Link to="/devices" onClick={() => setIsOpen(false)}>
              {t("nav.devices")}
            </Link>
          </li>
          <li>
            <Link to="/diseases" onClick={() => setIsOpen(false)}>
              {t("nav.diseases")}
            </Link>
          </li>
          <li className="language-switcher-mobile">
            <LanguageSwitcher />
          </li>
        </ul>

        <div className="language-desktop">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
