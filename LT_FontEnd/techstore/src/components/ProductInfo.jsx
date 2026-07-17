import React from 'react';

function ProductInfo({ price, discount, stock, brand, category }) {
  const finalPrice = price * (1 - discount / 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#8b949e' }}>
        <span>Hãng: <b>{brand}</b></span>
        <span>Loại: <b>{category}</b></span>
      </div>

      {/* Hiển thị giá tiền thông minh */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', margin: '5px 0' }}>
        <span style={{ color: '#ff4500', fontWeight: 'bold', fontSize: '1.25rem' }}>
          {finalPrice.toLocaleString()}đ
        </span>
        {discount > 0 && (
          <span style={{ textDecoration: 'line-through', color: '#8b949e', fontSize: '0.85rem' }}>
            {price.toLocaleString()}đ
          </span>
        )}
      </div>

      {/* Trạng thái kho hàng bằng thẻ màu */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed #30363d', paddingTop: '8px', fontSize: '0.85rem' }}>
        <span style={{ color: '#c9d1d9' }}>Còn lại: <b>{stock}</b> sp</span>
        <span style={{ 
          padding: '2px 8px', 
          borderRadius: '4px', 
          fontSize: '0.75rem', 
          fontWeight: 'bold',
          backgroundColor: stock > 5 ? 'rgba(56, 142, 60, 0.2)' : 'rgba(230, 81, 0, 0.2)', 
          color: stock > 5 ? '#4caf50' : '#ff9800' 
        }}>
          {stock > 5 ? 'Còn hàng' : 'Sắp hết hàng'}
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;