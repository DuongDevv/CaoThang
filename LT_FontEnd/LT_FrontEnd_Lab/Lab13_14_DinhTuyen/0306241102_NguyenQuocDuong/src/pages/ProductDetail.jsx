import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  // Trích xuất tham số 'id' từ URL động
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
      <h2 style={{ color: '#212529', marginTop: 0 }}>Chi tiết sản phẩm</h2>
      <p style={{ color: '#495057' }}>
        Đang hiển thị thông tin cho sản phẩm có ID: <strong style={{ color: '#e03131', fontSize: '18px' }}>{id}</strong>
      </p>
      <button 
        onClick={() => navigate('/products')}
        style={{
          marginTop: '15px',
          backgroundColor: '#1c7ed6',
          color: '#ffffff',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '500'
        }}
      >
        Quay lại danh sách
      </button>
    </div>
  );
};

export default ProductDetail;
