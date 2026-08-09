import React, { useState } from 'react';
import { INITIAL_USERS } from './data/mockUsers';
import RoleSimulator from './components/RoleSimulator';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

export default function App() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [currentRole, setCurrentRole] = useState('SuperAdmin');

  //Handler thêm user
  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  //Handler xóa user
  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
  };

  //Hanler mở/khóa user
  const handleToggleStatus = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === id) {
          return { ...user, status: user.status === 'Active' ? 'Banned' : 'Active' };
        }
        return user;
      })
    );
  };

  //Kiểm tra quyền truy cập Dashboard
  const hasAccess = currentRole !== 'Author' && currentRole !== 'Contributor';

  return (
    <div style={{ maxWidth: '1500px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>MANAGER USERS - QUẢN LÝ NGƯỜI DÙNG</h1>
      
      {/* Component chọn vai trò giả lập */}
      <RoleSimulator currentRole={currentRole} onChangeRole={setCurrentRole} />

      {/* Conditional Rendering cấp trang */}
      {!hasAccess ? (
        <div style={{ padding: '30px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '8px', textAlign: 'center' }}>
          <h2>BẠN KHÔNG CÓ QUYỀN TRUY CẬP TRANG NÀY.</h2>
          <p>Vai trò hiện tại <strong>({currentRole})</strong> không có quyền quản trị danh sách người dùng.</p>
        </div>
      ) : (
        <>
          {/* Conditional Rendering cấp Component: EDITOR không xem được Form */}
          {currentRole !== 'Editor' && (
            <UserForm onAddUser={handleAddUser} />
          )}

          {/* Render Bảng Danh Sách Người Dùng */}
          <UserList 
            users={users} 
            currentRole={currentRole} 
            onDeleteUser={handleDeleteUser}
            onToggleStatus={handleToggleStatus}
          />
        </>
      )}
    </div>
  );
}
