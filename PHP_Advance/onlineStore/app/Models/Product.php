<?php



namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    // Danh sách các cột được phép gán dữ liệu hàng loạt 
    protected $fillable = [
        'category_id',
        'user_id', // Tự động lưu ID của người dùng tạo sản phẩm (Lab 10)
        'name',
        'price',
        'stock_quantity',
        'description',
    ];

    /**
     * Mối quan hệ: Sản phẩm thuộc về một Danh mục
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Mối quan hệ: Sản phẩm được tạo bởi một Người dùng (Tác giả) - Lab 10
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
