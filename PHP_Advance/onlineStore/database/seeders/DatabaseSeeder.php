<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database with Categories and Products.
     */
    public function run(): void
    {
        Category::factory(10)->create();
        $this->command->info('Đã sinh 10 Danh mục!');

        Product::factory(50)->create();
        $this->command->info('Đã sinh 50 Sản phẩm!');
    }
}
