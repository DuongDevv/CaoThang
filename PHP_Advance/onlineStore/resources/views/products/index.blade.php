{{-- 0306241102_NguyenQuocDuong --}}
@extends('layouts.app')
@section('title', 'Products - Online Store - 0306241102_NguyenQuocDuong')
@section('subtitle', 'Quản Lý Danh Sách Sản Phẩm (Tích Hợp Bảo Mật Auth Middleware)')

@section('content')
{{-- 0306241102_NguyenQuocDuong --}}
<div class="card shadow-sm border-0">
    <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center">
        <h5 class="mb-0 fw-bold text-primary">Danh Sách Sản Phẩm</h5>
        <div>
            @auth
                <a href="{{ route('products.create') }}" class="btn btn-success me-2">+ Thêm Sản Phẩm</a>
                <a href="{{ route('products.trash') }}" class="btn btn-warning text-dark">Thùng Rác</a>
            @else
                <a href="{{ route('login') }}" class="btn btn-primary btn-sm">Đăng nhập để Thêm / Sửa / Xóa</a>
            @endauth
        </div>
    </div>
    <div class="card-body p-0">
        <div class="table-responsive">
            <table class="table table-hover table-striped align-middle mb-0">
                <thead class="table-dark">
                    <tr>
                        <th class="ps-3">ID</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Danh Mục</th>
                        <th>Người Tạo (Tác Giả)</th>
                        <th>Giá Bán</th>
                        <th>Tồn Kho</th>
                        <th class="text-center">Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($products as $product)
                        <tr>
                            <td class="ps-3 fw-bold">{{ $product->id }}</td>
                            <td class="fw-semibold text-dark">{{ $product->name }}</td>
                            <td><span class="badge bg-secondary">{{ $product->category?->name ?? 'Chưa phân loại' }}</span></td>
                            {{-- Cột hiển thị Người tạo (Tác giả) - Lab 10 Yêu cầu 4 --}}
                            <td><span class="badge bg-info text-dark">{{ $product->user?->name ?? 'Hệ thống' }}</span></td>
                            <td class="text-success fw-bold">{{ number_format($product->price) }} đ</td>
                            <td>{{ $product->stock_quantity }}</td>
                            <td class="text-center">
                                @auth
                                    <a href="{{ route('products.edit', $product->id) }}" class="btn btn-sm btn-outline-primary me-1">Sửa</a>
                                    <form action="{{ route('products.destroy', $product->id) }}" method="POST" class="d-inline" onsubmit="return confirm('Bạn có chắc chắn muốn chuyển sản phẩm này vào thùng rác?')">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-outline-danger">Xóa Tạm</button>
                                    </form>
                                @else
                                    <span class="badge bg-light text-muted">Chỉ Xem</span>
                                @endauth
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="7" class="text-center py-4 text-muted">Chưa có sản phẩm nào.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
    <div class="card-footer bg-white py-3 d-flex justify-content-center">
        {{ $products->links() }}
    </div>
</div>
@endsection
