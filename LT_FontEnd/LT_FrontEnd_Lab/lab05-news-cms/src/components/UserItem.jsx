import React from 'react';

export default function UserItem({ user, currentRole, onDeleteUser, onToggleStatus }) {
  const canModify = () => {
    if (currentRole === 'SuperAdmin') return true;

    if (currentRole === 'Admin') {
      return user.role !== 'SuperAdmin' && user.role !== 'Admin';
    }

    return false;
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'SuperAdmin': return '#e03131';
      case 'Admin': return '#f76707';
      case 'Editor': return '#1c7ed6';
      case 'Author': return '#7048e8';
      default: return '#748 finished';
    }
  };

  return (
    <tr style={{ borderBottom: '1px solid #e9ecef' }}>
      <td style={{ color: '#495057', fontSize: '13px' }}>{user.id}</td>
      <td style={{ color: '#212529', fontWeight: '600' }}>{user.name}</td>
      <td style={{ color: '#495057' }}>{user.email}</td>
      <td>
        <span style={{ 
          padding: '4px 10px', 
          borderRadius: '12px', 
          backgroundColor: user.role === 'SuperAdmin' ? '#fff5f5' : user.role === 'Admin' ? '#fff4e6' : '#e7f5ff',
          color: user.role === 'SuperAdmin' ? '#e03131' : user.role === 'Admin' ? '#d9480f' : '#1971c2',
          border: `1px solid ${user.role === 'SuperAdmin' ? '#ffc9c9' : user.role === 'Admin' ? '#ffd8a8' : '#a5d8ff'}`,
          fontSize: '12px',
          fontWeight: '600'
        }}>
          {user.role}
        </span>
      </td>
      <td>
        <span style={{ 
          color: user.status === 'Active' ? '#2b8a3e' : '#c92a2a', 
          backgroundColor: user.status === 'Active' ? '#ebfbee' : '#fff5f5',
          padding: '3px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '600' 
        }}>
          {user.status}
        </span>
      </td>
      <td>
        {canModify() && (
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={() => onToggleStatus(user.id)}
              style={{ 
                backgroundColor: user.status === 'Active' ? '#fff9db' : '#e7f5ff', 
                color: user.status === 'Active' ? '#f59f00' : '#1c7ed6',
                border: `1px solid ${user.status === 'Active' ? '#ffe066' : '#74c0fc'}`,
                padding: '6px 12px', 
                borderRadius: '6px', 
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '12px'
              }}
            >
              {user.status === 'Active' ? 'Khóa' : 'Mở khóa'}
            </button>
            <button 
              onClick={() => onDeleteUser(user.id)}
              style={{ 
                backgroundColor: '#fff5f5', 
                color: '#e03131', 
                border: '1px solid #ffc9c9', 
                padding: '6px 12px', 
                borderRadius: '6px', 
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '12px'
              }}
            >
              Xóa
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
