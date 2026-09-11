<?php

// 0306241102_NguyenQuocDuong

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use App\Http\Requests\StoreProductRequest;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * 1. Hiển thị danh sách sản phẩm (Công khai cho mọi người - Public)
     */
    public function index()
    {
        $products = Product::with(['category', 'user'])->latest()->paginate(10);
        return view('products.index', compact('products'));
    }

    /**
     * 2. Giao diện Form thêm sản phẩm (Bắt buộc Đăng nhập - Auth Middleware)
     */
    public function create()
    {
        $categories = Category::all();
        return view('products.create', compact('categories'));
    }

    /**
     * 3. Xử lý lưu sản phẩm mới VÀ TỰ ĐỘNG GÁN USER_ID NGUỜI TẠO (Yêu cầu 4 Lab 10)
     */
    public function store(StoreProductRequest $request)
    {
        // 1. Lấy mảng dữ liệu đã validate từ StoreProductRequest
        $data = $request->validated();

        // 2. Tự động gán ID của người dùng đang đăng nhập hiện tại - 0306241102_NguyenQuocDuong
        $data['user_id'] = auth()->id();

        // 3. Tạo mới sản phẩm trong CSDL MySQL
        Product::create($data);

        return redirect()->route('products.index')->with('success', 'Đã thêm sản phẩm thành công!');
    }

    /**
     * 4. Giao diện Form chỉnh sửa sản phẩm
     */
    public function edit(string $id)
    {
        $product = Product::findOrFail($id);
        $categories = Category::all();
        return view('products.edit', compact('product', 'categories'));
    }

    /**
     * 5. Xử lý cập nhật thông tin sản phẩm
     */
    public function update(StoreProductRequest $request, string $id)
    {
        $product = Product::findOrFail($id);
        $product->update($request->validated());

        return redirect()->route('products.index')->with('success', 'Cập nhật sản phẩm thành công!');
    }

    /**
     * 6. Xóa tạm thời sản phẩm (Đưa vào Thùng rác)
     */
    public function destroy(string $id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return redirect()->route('products.index')->with('success', 'Đã chuyển sản phẩm vào thùng rác!');
    }

    /**
     * 7. Hiển thị danh sách sản phẩm trong Thùng rác
     */
    public function trash()
    {
        $products = Product::onlyTrashed()->with(['category', 'user'])->latest()->paginate(10);
        return view('products.trash', compact('products'));
    }

    /**
     * 8. Khôi phục sản phẩm từ Thùng rác
     */
    public function restore(string $id)
    {
        $product = Product::onlyTrashed()->findOrFail($id);
        $product->restore();

        return redirect()->route('products.trash')->with('success', 'Khôi phục sản phẩm thành công!');
    }

    /**
     * 9. Xóa vĩnh viễn sản phẩm khỏi CSDL
     */
    public function forceDelete(string $id)
    {
        $product = Product::onlyTrashed()->findOrFail($id);
        $product->forceDelete();

        return redirect()->route('products.trash')->with('success', 'Đã xóa vĩnh viễn sản phẩm khỏi hệ thống!');
    }
}
