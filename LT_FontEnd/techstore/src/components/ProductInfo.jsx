import React from 'react';

function ProductInfo({ brand, category, price, discount, stock }) {
  return (
    <div>
      <p style={{ color: '#666', margin: '5px 0' }}>Thương hiệu: {brand}</p>
      <p style={{ color: '#888', margin: '5px 0' }}>Danh mục: {category}</p>
      <p style={{ fontWeight: 'bold', color: 'red', fontSize: '1.1rem' }}>
        {price.toLocaleString()} VNĐ
      </p>
      <p style={{ color: 'green' }}>Giảm giá: {discount}%</p>
      <p style={{ color: '#444' }}>Còn lại: {stock} sản phẩm</p>
    </div>
  );
}

export default ProductInfo;