// src/components/ProductCard.jsx
import React from 'react';
import ProductInfo from './ProductInfo';

function ProductCard({ name, brand, price, category, stock, discount, image }) {
  return (
    <div className="product-card" style={{ 
      backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '16px',
      width: '240px', height: '360px', boxSizing: 'border-box', // Kích thước gọn gàng cực sang
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative'
    }}>
      
      {discount > 0 && (
        <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 'bold', zIndex: 2 }}>
          -{discount}%
        </span>
      )}

      {/* Vùng ảnh */}
      <div style={{ width: '100%', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(15, 23, 42, 0.3)', borderRadius: '10px', overflow: 'hidden' }}>
        <img src={image} alt={name} className="product-img" style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'contain' }} />
      </div>

      {/* Thông tin chữ */}
      <div style={{ textAlign: 'left', marginTop: '8px' }}>
        <span style={{ fontSize: '0.65rem', color: '#3b82f6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{brand}</span>
        <h3 style={{ color: '#f3f4f6', fontSize: '0.95rem', margin: '2px 0 6px 0', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</h3>
      </div>

      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <ProductInfo brand={brand} category={category} price={price} discount={discount} stock={stock} />
      </div>

      {/* Nút bấm viền mỏng Minimalist */}
      <button style={{ width: '100%', padding: '8px', background: 'transparent', color: '#3b82f6', border: '1px solid #3b82f6', borderRadius: '8px', fontWeight: '600', fontSize: '0.8rem', cursor: 'pointer', marginTop: '8px' }}>
        Chi tiết
      </button>
    </div>
  );
}

export default ProductCard;