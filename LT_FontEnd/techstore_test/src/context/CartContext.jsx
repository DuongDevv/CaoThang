// src/context/CartContext.jsx
import { createContext, useState, useContext } from 'react';

// 1. Tạo Context Object
const CartContext = createContext();

// 2. Tạo custom hook để sử dụng context dễ dàng hơn
export function useCart() {
  return useContext(CartContext);
}

// 3. Tạo Provider Component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Logic thêm sản phẩm (sẽ phức tạp hơn sau này, ví dụ kiểm tra sản phẩm đã tồn tại)
    setCartItems(prevItems => [...prevItems, product]);
  };

  const value = {
    cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}