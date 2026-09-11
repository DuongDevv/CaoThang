import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
  // Hàm xử lý style cho NavLink đang được active (Lab 13)
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? '#e03131' : '#212529',
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: 'none',
      padding: '8px 12px',
      borderRadius: '4px',
      backgroundColor: isActive ? '#ffe3e3' : 'transparent',
      transition: 'all 0.2s ease'
    };
  };

  return (
    <nav style={{ 
      padding: '12px 20px', 
      backgroundColor: '#f8f9fa', 
      borderBottom: '1px solid #e9ecef',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      {/* Sử dụng NavLink cho Menu chính để có hiệu ứng Active */}
      <NavLink to="/" style={activeStyle}>Trang Chủ</NavLink>
      <NavLink to="/about" style={activeStyle}>Giới Thiệu</NavLink>
      <NavLink to="/contact" style={activeStyle}>Liên Hệ</NavLink>

      {/* Sử dụng Link thông thường ở một nút điều hướng phụ */}
      <span style={{ marginLeft: 'auto' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#1c7ed6', fontWeight: '500' }}>
          (Về trang chủ bằng thẻ Link thường)
        </Link>
      </span>
    </nav>
  );
}
