import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import App from './App';

describe('Lab 13 & 14 Integration Tests', () => {
  it('renders home page by default', () => {
    render(<App />);
    expect(screen.getByText(/Trang Chủ/i)).toBeDefined();
  });

  it('redirects unauthenticated user from /dashboard to /login', () => {
    render(<App />);
    // Navigate to dashboard link
    const dashboardLink = screen.getByText(/Dashboard \(Private\)/i);
    fireEvent.click(dashboardLink);

    // Should redirect to Login page
    expect(screen.getByText(/Trang Đăng Nhập/i)).toBeDefined();
  });
});
