import React, { createContext, useState, useContext } from 'react';

// Khởi tạo AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook để sử dụng AuthContext dễ dàng hơn
export const useAuth = () => useContext(AuthContext);
