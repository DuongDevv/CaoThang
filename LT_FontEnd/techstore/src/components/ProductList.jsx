import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

function ProductList() {
  return (
    <div style={{ display: 'flex', gap: 'auto', width: '100%', padding: '20px 0', boxSizing: 'border-box'}}>
        {products.map(product => (
            <ProductCard
            key={product.id}
            name={product.name}
            brand={product.brand}
            price={product.price}
            category={product.category}
            stock={product.stock}
            discount={product.discount}
            />
        ))}
    </div>
  );
}

export default ProductList;