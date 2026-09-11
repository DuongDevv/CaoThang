import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Nếu chưa đăng nhập, chuyển hướng về trang login
    // Lưu lại vị trí (location) người dùng muốn vào để redirect sau khi login xong
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Nếu đã đăng nhập, cho phép render component con
  return children;
};

export default ProtectedRoute;
