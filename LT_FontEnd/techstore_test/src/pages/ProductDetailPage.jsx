// src/pages/ProductDetailPage.jsx
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

function ProductDetailPage() {
  const { addToCart } = useCart();
  // 1. Lấy `id` từ URL
  const { id } = useParams();
  
  // 2. Tìm sản phẩm trong mảng dữ liệu
  const product = products.find(p => p.id.toString() === id);

  // 3. Nếu không tìm thấy sản phẩm
  if (!product) {
    return <div className="app-main"><h1>404 - Không tìm thấy sản phẩm</h1></div>;
  }

  // 4. Hiển thị thông tin chi tiết
  return (
    <main className="app-main">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ maxWidth: '300px', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '20px' }} />
      <p>Thương hiệu: {product.brand}</p>
      <p>Giá: {product.price.toLocaleString()}đ</p>
      <p>Mô tả sản phẩm sẽ được cập nhật ở đây...</p>
      <button className="view-cart-button" onClick={() => addToCart(product)}>
        Thêm vào giỏ hàng
      </button>
    </main>
  );
}

export default ProductDetailPage;