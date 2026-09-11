<?php

// 0306241102_NguyenQuocDuong

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;

// 1. Nhóm Route công khai (Public) - Khách vãng lai chưa đăng nhập vẫn xem được (Yêu cầu 2 Lab 10)
Route::get('/', [HomeController::class, 'index'])->name("home.index");
Route::get('/about', [HomeController::class, 'about'])->name("home.about");
Route::get('/products', [ProductController::class, 'index'])->name('products.index');

// 2. Nhóm Route bảo mật (Protected Middleware Auth) - Bắt buộc ĐĂNG NHẬP mới được Thêm / Sửa / Xóa
Route::middleware('auth')->group(function () {
    Route::prefix('products')->name('products.')->group(function () {
        Route::get('/create', [ProductController::class, 'create'])->name('create');
        Route::post('/', [ProductController::class, 'store'])->name('store');
        Route::get('/trash', [ProductController::class, 'trash'])->name('trash');
        Route::post('/{id}/restore', [ProductController::class, 'restore'])->name('restore');
        Route::delete('/{id}/force-delete', [ProductController::class, 'forceDelete'])->name('forceDelete');
        Route::get('/{product}/edit', [ProductController::class, 'edit'])->name('edit');
        Route::put('/{product}', [ProductController::class, 'update'])->name('update');
        Route::delete('/{product}', [ProductController::class, 'destroy'])->name('destroy');
    });
});

Route::get('/product', [ProductController::class, 'index'])->name('product.index');

// Giữ nguyên các route authentication của Laravel Breeze
require __DIR__.'/auth.php';
