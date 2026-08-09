<?php

namespace App\Http\Controllers;

use App\Models\Product; // Thêm dòng này để import Model
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $viewData = [];
        $viewData["title"] = "Products - Online Store";
        $viewData["subtitle"] = "List of products";
        // Lấy tất cả sản phẩm từ DB SQLite qua Model
        $viewData["products"] = Product::all();

        return view('product.index')->with("viewData", $viewData);
    }

    public function show($id)
    {
        $viewData = [];
        // Lấy 1 sản phẩm theo ID từ DB, nếu không có sẽ tự nhảy 404
        $product = Product::findOrFail($id);

        $viewData["title"] = $product->getName() . " - Online Store";
        $viewData["subtitle"] = $product->getName() . " - Product information";
        $viewData["product"] = $product;

        return view('product.show')->with("viewData", $viewData);
    }

    public function create(){
        return view('product.create');
    }

    public function store(Request $request){
        $name = $request->input('product_name');
        $price = $request->input('product_price');

        $imagePath = "";

        if($request->hasFile('product_image')){
            $file = $request->file('product_image');

            $imagePath = $file->store('product', 'public');
        }

        return redirect() -> route('product.create')
            ->with('success', "Đã thêm sản phẩm: $name với giá $price VNĐ")
            ->with('image_path', $imagePath);
    }
}
