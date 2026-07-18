import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'flex-start', width: '100%', padding: '20px 0', boxSizing: 'border-box'}}>
        {products.map(product => (
            <ProductCard
            key={product.id}
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
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductList;