import React from 'react';
import ProductInfo from './ProductInfo';

function ProductCard({ name, brand, price, category, stock, discount, image }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', margin: '15px auto', maxWidth: '400px', textAlign: 'center' }}>
      <img src={image} alt={name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      <h3 style={{ margin: '10px 0' }}>{name}</h3>
      
      <ProductInfo 
        brand={brand}
        category={category}
        price={price}
        discount={discount}
        stock={stock}
      />
      
      <button style={{ marginTop: '10px', padding: '5px 15px', cursor: 'pointer' }}>
        Chi tiết
      </button>
    </div>
  );
}

export default ProductCard;