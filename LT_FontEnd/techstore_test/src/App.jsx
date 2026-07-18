// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import AccountPage from './pages/AccountPage';
import './App.css';

function App() {
  const [title, setTitle] = useState("TechStore");

  const handleTitleChange = () => {
    setTitle(title === "TechStore" ? "NextGen Tech" : "TechStore");
  };
  return (
    <div className="app-container">
      <Header 
        title={title} 
        onTitleChange={handleTitleChange}
      />
      <Routes>
        {/* Route cho trang chủ */}
        <Route path="/" element={<HomePage />} />
        
        {/* Route cho trang chi tiết sản phẩm, với :id là một tham số động */}
        <Route path="/product/:id" element={<ProductDetailPage />} />

        {/* Route cho trang giỏ hàng */}
        <Route path="/cart" element={<CartPage />} />

        {/* Route cho trang tài khoản */}
        <Route path="/account" element={<AccountPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;