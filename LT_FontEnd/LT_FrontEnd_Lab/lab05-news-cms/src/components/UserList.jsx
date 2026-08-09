import React from 'react';
import UserItem from './UserItem';

export default function UserList({ users, currentRole, onDeleteUser, onToggleStatus }) {
  return (
    <div style={{ backgroundColor: '#ffffff', border: '1px solid #e9ecef', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      <table width="100%" cellPadding="12" style={{ borderCollapse: 'collapse', backgroundColor: '#ffffff' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #e9ecef', textAlign: 'left', color: '#495057' }}>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Vai trò (Role)</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem 
              key={user.id} 
              user={user} 
              currentRole={currentRole} 
              onDeleteUser={onDeleteUser}
              onToggleStatus={onToggleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
