import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './Components/Header';
import { Aside } from './Components/Aside';
import { useState } from 'react';
import { Footer } from './Components/Footer';

export const App = () => {
  const [isOpenAsideMenu, setIsOpenAsideMenu] = useState(false);

  const toggleAsideMenu = () => {
    setIsOpenAsideMenu(!isOpenAsideMenu);
  };

  return (
    <div className="App">
      <Header isOpenMenu={isOpenAsideMenu} onToggleMenu={toggleAsideMenu} />
      <Aside isOpenMenu={isOpenAsideMenu} />
      <div className="container">
        <main className="section">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
