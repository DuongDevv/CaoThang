import React, {useState} from "react";
import { use } from "react";

function Header(){
    const [title,setTitle] = useState("TechStore");
    const [count,setCount] = useState(0);
    const [search,setSearch] = useState("");

    return (
        <header style={{textAlign: 'center', padding: '20px', borderBottom: '1px solid #eee'}}>
            <h1>{title}</h1>

            <button onClick={()=> setTitle("Cửa hàng điện tử")} style={{marginBottom: '10px'}}>Đổi tiêu đề</button>

            <p>Website bán đồ điện tử</p>

            <br />

            <p>Đã nhấn {count} lần</p>

            <input 
                type="text"
                placeholder="Nhập từ khóa tìm kiếm"
            />

        </header>
    );
}

export default Header