// src/components/ProductCard.jsx
import PropTypes from 'prop-types';
import ProductInfo from '../ProductInfo/ProductInfo.jsx';
import './ProductCard.css'; // Import file CSS

function ProductCard({ name, brand, price, category, stock, discount, image }) {
  return (
    // Sử dụng className thay cho style inline
    // Class "product-card" gốc từ App.css vẫn được giữ lại để có hiệu ứng hover
    <div className="product-card product-card-container">
      
      {discount > 0 && (
        <span className="product-discount-badge">
          -{discount}%
        </span>
      )}

      {/* Vùng ảnh */}
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-img" />
      </div>

      {/* Thông tin chữ */}
      <div className="product-text-info">
        <span className="product-brand">{brand}</span>
        <h3 className="product-name">{name}</h3>
      </div>

      {/* Thêm lại div bao bọc ProductInfo để layout co giãn đúng */}
      <div className="product-info-wrapper">
        <ProductInfo brand={brand} category={category} price={price} discount={discount} stock={stock} />
      </div>

      {/* Thêm lại nút bấm */}
      <button className="product-detail-button">
        Chi tiết
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;