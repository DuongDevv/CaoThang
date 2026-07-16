import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

function ProductList() {
  return (
    <div>
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

export default ProductList;