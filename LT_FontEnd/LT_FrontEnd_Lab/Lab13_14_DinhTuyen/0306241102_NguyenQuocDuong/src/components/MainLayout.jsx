import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const MainLayout = () => {
  const { isAuthenticated, logout } = useAuth();

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? '#e03131' : '#1c7ed6',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    marginRight: '15px',
    padding: '6px 10px',
    borderRadius: '4px',
    backgroundColor: isActive ? '#ffe3e3' : 'transparent'
  });

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '960px', margin: '0 auto', padding: '20px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ color: '#212529', borderBottom: '2px solid #e9ecef', paddingBottom: '10px' }}>
          🚀 THỰC HÀNH REACT ROUTER DOM (LAB 13 & LAB 14)
        </h1>
      </header>

      {/* Navigation Layout chung */}
      <nav style={{ 
        padding: '14px 20px', 
        backgroundColor: '#f8f9fa', 
        border: '1px solid #e9ecef', 
        borderRadius: '8px', 
        marginBottom: '25px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
      }}>
        <NavLink to="/" style={navLinkStyle}>Trang chủ</NavLink>
        <NavLink to="/about" style={navLinkStyle}>Giới thiệu</NavLink>
        <NavLink to="/contact" style={navLinkStyle}>Liên hệ</NavLink>
        <NavLink to="/products" style={navLinkStyle}>Sản phẩm</NavLink>
        <NavLink to="/dashboard" style={navLinkStyle}>Dashboard (Private)</NavLink>

        <div style={{ marginLeft: 'auto' }}>
          {isAuthenticated ? (
            <button 
              onClick={logout} 
              style={{ 
                background: '#e03131', 
                color: 'white', 
                border: 'none', 
                padding: '8px 16px', 
                borderRadius: '6px', 
                cursor: 'pointer',
                fontWeight: '600' 
              }}
            >
              Đăng xuất
            </button>
          ) : (
            <Link 
              to="/login" 
              style={{ 
                background: '#1c7ed6', 
                color: 'white', 
                textDecoration: 'none', 
                padding: '8px 16px', 
                borderRadius: '6px', 
                fontWeight: '600' 
              }}
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </nav>

      {/* Outlet là nơi các component con (Nested Routes) sẽ được render */}
      <main style={{ minHeight: '300px', padding: '10px' }}>
        <Outlet />
      </main>

      <footer style={{ marginTop: '40px', paddingTop: '15px', borderTop: '1px solid #e9ecef', color: '#6c757d', textAlign: 'center', fontSize: '14px' }}>
        <p>GV: Lữ Cao Tiến | Sinh viên thực hiện: Nguyễn Quốc Dương (MSSV: 0306241102)</p>
      </footer>
    </div>
  );
};

export default MainLayout;
