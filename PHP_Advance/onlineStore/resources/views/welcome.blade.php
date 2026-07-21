@extends('layouts.app')

@section('title', 'Trang chủ - Online Store')

@section('content')
<h2 class="text-center text-uppercase text-secondary mb-4">Danh sách sản phẩm nổi bật</h2>

<div class="row">
    @foreach ($products as $product)
        <div class="col-md-4 col-lg-4 mb-4">
            <div class="card h-100">
                <img src="https://laravel.com/img/logomark.min.svg" class="card-img-top img-card p-4" alt="{{ $product->name }}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold">{{ $product->name }}</h5>
                    <p class="card-text text-muted small">{{ $product->description }}</p>
                    <h5 class="text-danger mt-auto fw-bold">{{ number_format($product->price, 0, ',', '.') }} VNĐ</h5>
                    <a href="/product/{{ $product->id }}" class="btn btn-outline-primary mt-3">Xem chi tiết</a>
                </div>
            </div>
        </div>
    @endforeach
</div>
@endsection