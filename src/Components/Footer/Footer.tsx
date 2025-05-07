import { Link } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <Link to={'/'} className="footer__link-logo">
        <img className="footer__logo" src="/img/logo.png" alt="logo" />
      </Link>
      <ul className="footer__list">
        <li className="footer_item">
          <a href="/" className="footer__link">
            Github
          </a>
        </li>
        <li className="footer_item">
          <a href="/" className="footer__link">
            Contacts
          </a>
        </li>
        <li className="footer_item">
          <a href="/" className="footer__link">
            Rights
          </a>
        </li>
      </ul>
      <div className="footer__action">
        <span>Back to top</span>
        <a href="#top"></a>
      </div>
    </footer>
  );
};
