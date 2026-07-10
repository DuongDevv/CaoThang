import React from "react";
import ProductCart from "./ProductCard";
import products from "../data/products";

function ProductList(){
    return (
        <div>
            {products.map(products =>(
                <ProductCart
                    key = {products.id}
                    name = {products.name}
                    brand = {products.brand}
                    price = {products.price}
                />
            ))}
        </div>
    );
}

export default ProductList;