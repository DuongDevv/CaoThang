<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'           => 'required|min:5|max:255',
            'price'          => 'required|numeric|min:0',
            'stock_quantity' => 'required|integer|min:0',
            'description'    => 'nullable|string',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required'           => 'Vui lòng nhập tên sản phẩm.',
            'name.min'                => 'Tên sản phẩm phải có ít nhất 5 ký tự.',
            'price.required'          => 'Vui lòng nhập giá sản phẩm.',
            'price.numeric'           => 'Giá sản phẩm phải là một số hợp lệ.',
            'stock_quantity.required' => 'Vui lòng nhập số lượng tồn kho.',
        ];
    }
}
