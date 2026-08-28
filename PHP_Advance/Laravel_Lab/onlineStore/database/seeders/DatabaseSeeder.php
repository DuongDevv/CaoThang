<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Category::factory(10)->create();
        $this->command->info('Đã tạo 10 danh mục!');

        Product::factory(50)->create();
        $this->command->info('Đã tạo 50 sản phẩm!');
    }
}
