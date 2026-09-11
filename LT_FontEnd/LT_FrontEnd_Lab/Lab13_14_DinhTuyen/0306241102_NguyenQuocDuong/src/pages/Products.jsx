import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const productList = [
    { id: 1, name: 'Khóa học ReactJS' },
    { id: 2, name: 'Khóa học NodeJS' },
    { id: 3, name: 'Khóa học C++' },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
      <h2 style={{ color: '#212529', marginTop: 0 }}>Danh sách sản phẩm</h2>
      <ul style={{ lineHeight: '2' }}>
        {productList.map((prod) => (
          <li key={prod.id}>
            <Link 
              to={`/products/${prod.id}`}
              style={{ color: '#1c7ed6', textDecoration: 'none', fontWeight: '500' }}
            >
              {prod.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
