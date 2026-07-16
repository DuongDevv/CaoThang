import React, { useState } from 'react'; 

function Header() {
    const [title, setTitle] = useState("TechStore");
    
    const [count, setCount] = useState(0);

    const [search, setSearch] = useState("");

    return (
        <header >
        <div>
            <h1 style={{textAlign:'left', display: 'block'}}>{title}</h1>
      
        <button onClick={() => setTitle("Cửa hàng điện tử")} style={{ marginBottom: '10px' }}>
            Đổi tiêu đề
        </button>
        </div>
      

        <div>
            <input type="text" 
            placeholder="Nhập từ khóa tìm kiếm..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            style={{ padding: '5px', width: '250px' }}
            />
            <p style={{ textAlign:'left', margin: '10px 0', color: '#333', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: '10px auto'}}>
                Bạn đang tìm: <span style={{ fontWeight: 'bold'}}>{search}</span>
            </p>
        </div>

        <div style={{textAlign: 'center'}}>
            <p>Đã nhấn {count} lần</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    </header>
  );
}

export default Header;