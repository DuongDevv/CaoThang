import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import products from './data/products';

function App() {
  const [title, setTitle] = useState("TechStore");
  const [searchTerm, setSearchTerm] = useState("");

  const handleTitleChange = () => {
    setTitle(title === "TechStore" ? "Hệ Thống Công Nghệ" : "TechStore");
  };

  // Logic lọc sản phẩm theo từ khóa nhập vào ô tìm kiếm
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
      backgroundColor: 'white', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      <Header 
        title={title} 
        onTitleChange={handleTitleChange}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <main style={{ width: '100%', maxWidth: '1200px', padding: '30px 20px', flex: 1, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '0 10px' }}>
          <h2 style={{ color: 'black', margin: 0, fontSize: '1.4rem', borderLeft: '4px solid #0070f3', paddingLeft: '10px' }}>
            Danh Sách Sản Phẩm
          </h2>
          <span style={{ color: 'white', backgroundColor: 'gray', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', border: '1px solid #30363d' }}>
            Kết quả: <b>{filteredProducts.length}</b> sản phẩm
          </span>
        </div>
        
        {/* Render danh sách sản phẩm đã được lọc */}
        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <div style={{ color: '#8b949e', textAlign: 'center', padding: '40px', fontSize: '1.1rem' }}>
            Không tìm thấy sản phẩm công nghệ nào phù hợp!
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;