import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Lấy đường dẫn mà người dùng muốn truy cập trước khi bị chặn, mặc định là '/'
  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    login(); // Cập nhật state đăng nhập thành true
    navigate(from, { replace: true }); // Điều hướng trở lại trang trước đó
  };

  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      padding: '30px', 
      borderRadius: '8px', 
      border: '1px solid #e9ecef',
      maxWidth: '450px',
      margin: '0 auto',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ color: '#212529', marginTop: 0 }}>Trang Đăng Nhập</h2>
      <p style={{ color: '#6c757d' }}>Bạn cần đăng nhập để xem nội dung nội bộ.</p>
      <button 
        onClick={handleLogin} 
        style={{ 
          padding: '10px 20px', 
          background: '#1c7ed6', 
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '15px',
          width: '100%',
          marginTop: '10px'
        }}
      >
        Đăng nhập (Mock)
      </button>
    </div>
  );
};

export default Login;
