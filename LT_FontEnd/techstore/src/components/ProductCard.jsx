import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';

function ProductCard({ name, brand, price, category, stock, discount, image }) {
  return (
    <div style={{ backgroundColor: '#fff', border: '1px solid #eef2f5', borderRadius: '12px', padding: '20px', width: '320px', height: '420px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
        <h3 style={{ margin: '10px 0 5px 0', fontSize: '1.2rem', color: '#2d3748',whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {name}
        </h3>
        <ProductInfo 
        brand={brand}
        category={category}
        price={price}
        discount={discount}
        stock={stock}
        />
        <button style={{ marginTop: '10px', padding: '10px', width: '100%', backgroundColor: '#e2e8f0', color: '#333', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'}}>
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