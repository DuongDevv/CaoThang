import React from "react";

// destructuring để lấy các thuộc tính từ props
function productCart({name, brand, price}){
    return (
        <div style={{borderBottom: '1px solid #ccc', padding: '20px', textAlign: 'center'}}>
            <h3>{name}</h3>
            <p style={{color: '#666'}}>{brand}</p>
            <p style={{fontWeight: 'bold', color: 'red'}}>{price.toLocaleString()}VND</p>
            <button>Xem chi tiết</button>
        </div>
    );
}

export default productCart