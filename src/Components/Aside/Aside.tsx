// import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Menu } from '../Menu';
import './Aside.scss';

type Props = {
  isOpenMenu: boolean;
};

export const Aside: React.FC<Props> = ({ isOpenMenu }) => {
  return (
    <aside
      className={cn('aside-menu', !isOpenMenu ? 'aside-menu-active' : '')}
      id="menu"
    >
      <Menu />
    </aside>
  );
};
