// src/components/Header.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';

function Header({ title, onTitleChange }) {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="header-content">
        
        {/* Brand Logo */}
        <div className="brand-logo">
          <Link to="/" className="logo-link">
            <h1 className="logo-text logo-title">{title}</h1>
          </Link>
          <button onClick={onTitleChange} className="theme-toggle-button">
            Đổi giao diện
          </button>
        </div>

        {/* Navigation Icons */}
        <div className="header-nav-icons">
          <div className="nav-icon-link" onClick={() => setIsCartOpen(!isCartOpen)}>
            <FiShoppingCart className="nav-icon" />
            {cartItems.length > 0 && (
              <span className="cart-count-badge">{cartItems.length}</span>
            )}
          </div>
          <Link to="/account" className="nav-icon-link">
            <FiUser className="nav-icon" />
          </Link>
        </div>

        {/* Cart Popover */}
        {isCartOpen && (
          <div className="cart-popover">
            {cartItems.length === 0 ? (
              <p>Giỏ hàng của bạn đang trống.</p>
            ) : (
              <>
                <ul className="cart-popover-list">
                  {cartItems.map(item => (
                    <li key={item.id} className="cart-popover-item">
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                      <span>{item.price.toLocaleString()}đ</span>
                    </li>
                  ))}
                </ul>
                <Link to="/cart" className="view-cart-button" onClick={() => setIsCartOpen(false)}>Xem tất cả</Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
};

export default Header;