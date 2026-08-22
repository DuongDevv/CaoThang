import React, { useState } from 'react';
import { ROLES } from '../data/mockUsers';

export default function UserForm({ onAddUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Editor');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert('Vui lòng nhập đầy đủ Tên và Email!');
      return;
    }

    const newUser = {
      id: `u_${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      role,
      status: 'Active',
    };

    onAddUser(newUser);

    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ 
      marginBottom: '25px', 
      padding: '20px', 
      backgroundColor: '#ffffff',
      border: '1px solid #e9ecef', 
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)' 
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '16px', color: '#212529', fontSize: '18px' }}> Thêm Người Dùng Mới</h3>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Họ và tên..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '10px 12px', flex: 1, backgroundColor: '#ffffff', color: '#212529' }}
        />
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px 12px', flex: 1, backgroundColor: '#ffffff', color: '#212529' }}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} style={{ padding: '10px 12px', backgroundColor: '#ffffff', color: '#212529' }}>
          {ROLES.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#20c997', color: '#ffffff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
          Thêm User
        </button>
      </div>
    </form>
  );
}
