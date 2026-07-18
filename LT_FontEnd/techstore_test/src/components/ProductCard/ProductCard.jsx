// src/components/ProductCard.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductInfo from '../ProductInfo/ProductInfo';
import './ProductCard.css'; // Import file CSS

function ProductCard({ id, name, brand, price, category, stock, discount, image }) {
  return (
    // Bọc toàn bộ card trong thẻ Link để làm cho nó có thể click được
    <Link 
      to={`/product/${id}`} 
      className="product-card product-card-container"
      // Thêm style để loại bỏ gạch chân mặc định của thẻ Link
      style={{ textDecoration: 'none' }} 
    >
      
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

    </Link>
  );
}

ProductCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;