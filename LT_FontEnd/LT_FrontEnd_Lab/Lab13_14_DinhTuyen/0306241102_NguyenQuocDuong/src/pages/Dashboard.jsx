import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ 
      background: '#e7f5ff', 
      border: '1px solid #a5d8ff', 
      padding: '24px', 
      borderRadius: '8px' 
    }}>
      <h2 style={{ color: '#1864ab', marginTop: 0 }}>Dashboard Nội Bộ</h2>
      <p style={{ color: '#1971c2', margin: 0, fontWeight: '500' }}>
        🎉 Chúc mừng! Bạn đã vượt qua chốt bảo vệ xác thực (ProtectedRoute) để vào đây.
      </p>
    </div>
  );
};

export default Dashboard;
