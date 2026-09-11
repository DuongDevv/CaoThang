@extends('layouts.app')
@section('title', 'Chỉnh Sửa Sản Phẩm - Online Store')
@section('subtitle', 'Cập Nhật Thông Tin Sản Phẩm #' . $product->id)

@section('content')
<div class="row justify-content-center">
    <div class="col-lg-8">
        <div class="card shadow-sm border-0">
            <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                <h5 class="mb-0 fw-bold text-primary">Chỉnh Sửa Sản Phẩm</h5>
                <a href="{{ route('products.index') }}" class="btn btn-outline-secondary btn-sm">Quay Lại</a>
            </div>
            <div class="card-body p-4">
                <form action="{{ route('products.update', $product->id) }}" method="POST">
                    @csrf
                    @method('PUT')

                    {{-- Chọn Danh Mục --}}
                    <div class="mb-3">
                        <label class="form-label fw-bold">Danh Mục Sản Phẩm <span class="text-danger">*</span></label>
                        <select name="category_id" class="form-select @error('category_id') is-invalid @enderror">
                            @foreach($categories as $category)
                                <option value="{{ $category->id }}" {{ old('category_id', $product->category_id) == $category->id ? 'selected' : '' }}>
                                    {{ $category->name }}
                                </option>
                            @endforeach
                        </select>
                        @error('category_id')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    {{-- Tên Sản Phẩm --}}
                    <div class="mb-3">
                        <label class="form-label fw-bold">Tên Sản Phẩm <span class="text-danger">*</span></label>
                        <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" value="{{ old('name', $product->name) }}">
                        @error('name')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    {{-- Giá Bán --}}
                    <div class="mb-3">
                        <label class="form-label fw-bold">Giá Bán (VNĐ) <span class="text-danger">*</span></label>
                        <input type="number" step="0.01" name="price" class="form-control @error('price') is-invalid @enderror" value="{{ old('price', $product->price) }}">
                        @error('price')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    {{-- Tồn Kho --}}
                    <div class="mb-3">
                        <label class="form-label fw-bold">Số Lượng Tồn Kho <span class="text-danger">*</span></label>
                        <input type="number" name="stock_quantity" class="form-control @error('stock_quantity') is-invalid @enderror" value="{{ old('stock_quantity', $product->stock_quantity) }}">
                        @error('stock_quantity')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    {{-- Mô Tả --}}
                    <div class="mb-4">
                        <label class="form-label fw-bold">Mô Tả Sản Phẩm</label>
                        <textarea name="description" class="form-control" rows="3">{{ old('description', $product->description) }}</textarea>
                    </div>

                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary py-2 fw-bold">Cập Nhật Thông Tin</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
