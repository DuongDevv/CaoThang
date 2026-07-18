// src/components/ProductInfo.jsx
import PropTypes from 'prop-types'; // Bước 1: Import thư viện
import './ProductInfo.css'; // Import file CSS

function ProductInfo({ price, discount, stock, brand, category }) {
  const finalPrice = price * (1 - discount / 100);

  return (
    <div className="info-container">
      <div className="info-row">
        <span>Hãng: <b>{brand}</b></span>
        <span>Loại: <b>{category}</b></span>
      </div>

      <div className="price-row">
        <span className="final-price">{finalPrice.toLocaleString()}đ</span>
        {discount > 0 && (
          <span className="original-price">{price.toLocaleString()}đ</span>
        )}
      </div>

      <div className="stock-row">
        <span className="stock-label">Kho: <b>{stock}</b></span>
        <span className={stock > 5 ? 'stock-status in-stock' : 'stock-status low-stock'}>
          {stock > 5 ? 'Còn hàng' : 'Sắp hết'}
        </span>
      </div>
    </div>
  );
}

// Bước 2: Định nghĩa kiểu dữ liệu và yêu cầu cho các props
ProductInfo.propTypes = {
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};


export default ProductInfo;