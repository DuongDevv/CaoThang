// src/components/ProductList.jsx
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard.jsx';
import './ProductList.css';

function ProductList({ productsData }) {
  return (
    // Bước 2: Thay thế toàn bộ style inline bằng một className
    <div className="product-list-container">
      {productsData.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          brand={product.brand}
          price={product.price}
          category={product.category}
          stock={product.stock}
          discount={product.discount}
          image={product.image}
        />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  productsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      discount: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;