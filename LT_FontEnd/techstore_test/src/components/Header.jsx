// src/components/Header.jsx
import React from 'react';

function Header({ title, onTitleChange, clickCount, onClickToggle, searchTerm, onSearchChange }) {
  return (
    <header style={{ 
      width: '100%', borderBottom: '1px solid #1e293b', padding: '15px 40px', boxSizing: 'border-box',
      background: 'rgba(3, 7, 18, 0.8)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 100
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <h1 className="logo-text" style={{ margin: 0, fontSize: '1.6rem' }}>{title}</h1>
          <button onClick={onTitleChange} style={{ padding: '4px 10px', background: 'none', color: '#3b82f6', border: '1px solid #1e293b', borderRadius: '99px', cursor: 'pointer', fontSize: '0.7rem', fontWeight: 600 }}>
            Đổi giao diện
          </button>
        </div>

        {/* Thanh Tìm Kiếm Hiện Đại */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: '250px' }}>
          <input type="text" className="search-input" placeholder="Tìm kiếm siêu phẩm công nghệ..." value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} />
        </div>

        {/* Ưu Đãi */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Quà tặng: <strong style={{ color: '#3b82f6' }}>{clickCount}</strong></span>
          <button style={{ padding: '8px 16px', background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', color: '#fff', border: 'none', borderRadius: '99px', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem' }} onClick={onClickToggle}>
            Nhận Mã Giảm Giá
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;