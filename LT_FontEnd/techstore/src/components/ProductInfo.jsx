import React from 'react';

function ProductInfo({ price, discount, stock }) {
  // Tính giá sau khi giảm
  const finalPrice = price * (1 - discount / 100);

  return (
    <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {/* Khu vực giá cả */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <span style={{ fontWeight: 'bold', color: '#ff4757', fontSize: '1.2rem' }}>
          {finalPrice.toLocaleString()}đ
        </span>
        {discount > 0 && (
          <span style={{ textDecoration: 'line-through', color: '#a0aec0', fontSize: '0.85rem' }}>
            {price.toLocaleString()}đ
          </span>
        )}
      </div>

      {/* Kho hàng và trạng thái */}
      <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginTop: '5px', borderTop: '1px dashed #e2e8f0', paddingTop: '8px' }}>
        <span style={{ color: '#718096', fontSize: '0.8rem' }}>Kho: <strong>{stock}</strong></span>
        <span style={{ fontSize: '0.8rem', padding: '2px 6px', borderRadius: '4px', backgroundColor: stock > 10 ? '#c6f6d5' : '#feebc8', color: stock > 10 ? '#22543d' : '#744210' }}>
          {stock > 10 ? 'Còn hàng' : 'Sắp hết'}
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;