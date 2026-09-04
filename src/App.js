import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
