import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <h2 style={{ color: '#e03131', fontSize: '32px', marginBottom: '10px' }}>404 - Không tìm thấy trang</h2>
      <p style={{ color: '#6c757d', marginBottom: '20px' }}>Đường dẫn bạn truy cập không tồn tại hoặc đã bị chuyển dời.</p>
      <Link 
        to="/" 
        style={{ 
          background: '#1c7ed6', 
          color: 'white', 
          textDecoration: 'none', 
          padding: '10px 20px', 
          borderRadius: '6px', 
          fontWeight: '600' 
        }}
      >
        Quay về Trang chủ
      </Link>
    </div>
  );
};

export default NotFound;
