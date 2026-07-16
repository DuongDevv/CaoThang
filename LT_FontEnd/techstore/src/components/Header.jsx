import React, { useState } from 'react'; 

function Header() {
  const [title, setTitle] = useState("TechStore");
  
  const [count, setCount] = useState(0);

  const [search, setSearch] = useState("");

  return (
    <header style={{ textAlign: 'center', padding: '20px', borderBottom: '1px solid #eee' }}>
      <h1>{title}</h1>
      
      <button onClick={() => setTitle("Cửa hàng điện tử")} style={{ marginBottom: '10px' }}>
        Đổi tiêu đề
      </button>
      
      <br />

      <p>Đã nhấn {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      
      <br /><br />

      <input 
        type="text" 
        placeholder="Nhập từ khóa tìm kiếm..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        style={{ padding: '5px', width: '250px' }}
      />
      <p>Bạn đang tìm: <span style={{ fontWeight: 'bold' }}>{search}</span></p>
    </header>
  );
}

export default Header;