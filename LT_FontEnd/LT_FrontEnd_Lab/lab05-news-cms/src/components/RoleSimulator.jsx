import React from 'react';
import { ROLES } from '../data/mockUsers';

export default function RoleSimulator({ currentRole, onChangeRole }) {
  return (
    <div style={{ 
      padding: '16px 20px', 
      backgroundColor: '#f8f9fa', 
      border: '1px solid #e9ecef', 
      borderRadius: '8px', 
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    }}>
      <label htmlFor="role-select" style={{ fontWeight: '600', color: '#212529', fontSize: '15px' }}>
        Giả lập vai trò (Role Simulator):
      </label>
      <select
        id="role-select"
        value={currentRole}
        onChange={(e) => onChangeRole(e.target.value)}
        style={{ 
          padding: '8px 14px', 
          fontSize: '14px', 
          borderRadius: '6px', 
          border: '1px solid #ced4da',
          backgroundColor: '#ffffff',
          color: '#212529',
          cursor: 'pointer',
          fontWeight: '500'
        }}
      >
        {ROLES.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
}
