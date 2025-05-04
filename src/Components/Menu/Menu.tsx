import { NavLink } from 'react-router-dom';
import { Category } from '../../enum/category';

import './Menu.scss';

export const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink to="/">Home</NavLink>
        </li>
        {(Object.values(Category) as string[]).map(category => (
          <li className="menu__item" key={category}>
            <NavLink to={`/${category}`} key={category}>
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="menu__actions">
        <NavLink to="/favorites" className="menu__icon--favorite">
          favorites
        </NavLink>
        <NavLink to="/cart" className="menu__icon--cart">
          cart
        </NavLink>
      </div>
    </nav>
  );
};
