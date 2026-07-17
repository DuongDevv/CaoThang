// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ productsData }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start', // Xếp khít lần lượt từ trái sang phải
      gap: '30px',                  // Khoảng cách cố định 30px
      width: '100%',
      maxWidth: '1210px',           // Khớp vừa đẹp cho lưới
      margin: '0 auto',             // Đảm bảo toàn bộ danh sách nằm giữa trang
      padding: '10px 0 20px 0',
      boxSizing: 'border-box'
    }}>
      {productsData.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          brand={product.brand}
          price={product.price}
          category={product.category}
          stock={product.stock}
          discount={product.discount}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;