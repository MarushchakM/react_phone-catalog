import { Link } from 'react-router-dom';
import './Header.scss';
import { Menu } from '../Menu';
import { useState } from 'react';
// import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [icon, setIcon] = useState('hamburger');

  // const location = useLocation();

  // useEffect(() => {
  //   setIcon('hamburger');
  // }, [location]);

  const handleChangeIcon = () => {
    if (icon === 'hamburger') {
      setIcon('close');
    } else if (icon === 'close') {
      setIcon('hamburger');
    }
  };

  return (
    <div className="top-bar">
      <div className="top-bar__wrap">
        <Link to={'/'} className="top-bar__link-logo">
          <img className="top-bar__logo" src="/img/logo.png" alt="logo" />
        </Link>
        <Menu />
      </div>

      <div className="top-bar__menu-action">
        {/* <a
          href={icon === 'close' ? '#menu' : '#'}
          onClick={handleChangeIcon}
          className={`top-bar__link top-bar__link--${icon}`}
        /> */}
        <a href="#menu" className="top-bar__link top-bar__link--hamburger" />
        <a href="#" className="top-bar__link top-bar__link--close" />
      </div>
    </div>
  );
};
