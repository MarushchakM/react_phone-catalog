import { HashRouter as Router } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { ProductPage } from './pages/ProductPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { Category } from './enum/category';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          {Object.values(Category).map(category => (
            <Route path={category} key={category}>
              <Route index element={<ProductPage category={category} />} />
              <Route path=":id" element={<ProductDetailPage />} />
            </Route>
          ))}
          <Route path="cart" element={<CartPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};
