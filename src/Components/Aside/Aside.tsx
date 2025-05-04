// import { Link } from 'react-router-dom';
import { Menu } from '../Menu';
import './Aside.scss';

export const Aside = () => {
  return (
    <aside className="aside-menu" id="menu">
      {/* <div className="aside-menu__wrap">
        <Link to={'/'} className="aside-menu__link-logo">
          <img className="aside-menu__logo" src="/img/logo.png" alt="logo" />
        </Link>
        <div className="aside-menu__close">
          <a href="#" className="aside-menu__close-link"></a>
        </div>
      </div> */}
      <Menu />
    </aside>
  );
};
