// src/pages/HomePage.jsx
import { useState } from 'react';
import TechBanner from '../components/TechBanner/TechBanner';
import ProductList from '../components/ProductList/ProductList';
import products from '../data/products';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Ẩn Banner khi người dùng tìm kiếm sản phẩm */}
      {!searchTerm && <TechBanner />} 
      
      <main className="app-main">
        {/* Thanh tìm kiếm được dời xuống đây */}
        <div className="search-bar-container">
          <input type="text" className="search-input" placeholder="Tìm kiếm siêu phẩm công nghệ..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        {searchTerm && (
          <p className="search-results-text">
            Kết quả tìm kiếm cho: <strong className="search-term-highlight">"{searchTerm}"</strong>
          </p>
        )}

        {filteredProducts.length > 0 ? (
          <ProductList productsData={filteredProducts} />
        ) : (
          <div className="no-results-found">Không tìm thấy thiết bị nào phù hợp.</div>
        )}
      </main>
    </>
  );
}

export default HomePage;