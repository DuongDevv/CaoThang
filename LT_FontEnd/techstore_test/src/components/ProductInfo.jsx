// src/components/ProductInfo.jsx
import React from 'react';

function ProductInfo({ price, discount, stock, brand, category }) {
  const finalPrice = price * (1 - discount / 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#64748b' }}>
        <span>Hãng: <b>{brand}</b></span>
        <span>Loại: <b>{category}</b></span>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', margin: '2px 0' }}>
        <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '1.1rem' }}>
          {finalPrice.toLocaleString()}đ
        </span>
        {discount > 0 && (
          <span style={{ textDecoration: 'line-through', color: '#64748b', fontSize: '0.75rem' }}>
            {price.toLocaleString()}đ
          </span>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed #1e293b', paddingTop: '6px', fontSize: '0.75rem' }}>
        <span style={{ color: '#94a3b8' }}>Kho: <b>{stock}</b></span>
        <span style={{ 
          padding: '1px 6px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 'bold',
          backgroundColor: stock > 5 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(245, 158, 11, 0.1)', 
          color: stock > 5 ? '#3b82f6' : '#f59e0b' 
        }}>
          {stock > 5 ? 'Còn hàng' : 'Sắp hết'}
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;