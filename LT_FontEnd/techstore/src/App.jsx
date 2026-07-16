import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import products from './data/products';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', justify: 'center'}}>
      <Header />
      <h4 style={{ textAlign: 'center', margin: '20px 0' }}>
        Có {products.length} sản phẩm
      </h4>
      <ProductList />
      <Footer /> 
    </div>
  );
}

export default App;