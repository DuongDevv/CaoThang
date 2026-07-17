// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import TechBanner from './components/TechBanner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import products from './data/products';
import './App.css';

function App() {
  const [title, setTitle] = useState("TechStore");
  const [clickCount, setClickCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleTitleChange = () => {
    setTitle(title === "TechStore" ? "NextGen Tech" : "TechStore");
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header 
        title={title} 
        onTitleChange={handleTitleChange}
        clickCount={clickCount}
        onClickToggle={() => setClickCount(c => c + 1)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      {/* Ẩn Banner khi người dùng tìm kiếm sản phẩm */}
      {!searchTerm && <TechBanner />} 
      
      <main style={{ flex: 1, width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '30px 20px', boxSizing: 'border-box' }}>
        {searchTerm && (
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>
            Kết quả tìm kiếm cho: <strong style={{ color: '#3b82f6' }}>"{searchTerm}"</strong>
          </p>
        )}

        {filteredProducts.length > 0 ? (
          <ProductList productsData={filteredProducts} />
        ) : (
          <div style={{ color: '#64748b', textAlign: 'center', padding: '80px 0', fontSize: '1rem' }}>
            Không tìm thấy thiết bị nào phù hợp.
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;