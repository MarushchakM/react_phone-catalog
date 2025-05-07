import { Link } from 'react-router-dom';
import './Header.scss';
import { Menu } from '../Menu';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  isOpenMenu: boolean;
  onToggleMenu: () => void;
};

export const Header: React.FC<Props> = ({ isOpenMenu, onToggleMenu }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    onToggleMenu();
  }, [pathname]);

  return (
    <div className="top-bar">
      <div className="top-bar__wrap">
        <Link to={'/'} className="top-bar__link-logo">
          <img className="top-bar__logo" src="/img/logo.png" alt="logo" />
        </Link>
      </div>
      <Menu />

      <div className="top-bar__menu-action">
        <button
          onClick={() => onToggleMenu()}
          className={cn(
            'top-bar__link',
            isOpenMenu ? 'top-bar__link--hamburger' : 'top-bar__link--close',
          )}
        />
      </div>
    </div>
  );
};
