import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './Components/Header';
import { Aside } from './Components/Aside';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Aside />
      <div className="container">
        <main className="section">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
