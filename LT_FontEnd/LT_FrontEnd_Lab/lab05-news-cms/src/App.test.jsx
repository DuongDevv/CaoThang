import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import App from './App';

describe('News CMS - RBAC Integration Tests', () => {
  it('renders SuperAdmin dashboard by default with full access', () => {
    render(<App />);
    expect(screen.getByText(/NEWS CMS - USER MANAGEMENT DASHBOARD/i)).toBeDefined();
    expect(screen.getByText(/Thêm Người Dùng Mới/i)).toBeDefined();
  });

  it('hides UserForm when role changes to Editor', () => {
    render(<App />);
    const select = screen.getByLabelText(/Giả lập vai trò hiện tại/i);
    
    fireEvent.change(select, { target: { value: 'Editor' } });
    
    // Editor cannot see the Add User Form
    expect(screen.queryByText(/ Thêm Người Dùng Mới/i)).toBeNull();
  });

  it('shows Access Denied message for Author or Contributor', () => {
    render(<App />);
    const select = screen.getByLabelText(/Giả lập vai trò hiện tại/i);
    
    fireEvent.change(select, { target: { value: 'Author' } });
    
    expect(screen.getByText(/BẠN KHÔNG CÓ QUYỀN TRUY CẬP TRANG NÀY/i)).toBeDefined();
  });
});
