<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
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
        $products = [
            ["name" => "TV", "description" => "Best TV", "image" => "goku.jpg", "price" => 2000],
            ["name" => "iPhone", "description" => "Best iPhone", "image" => "kaneki_ken.png", "price" => 1500],
            ["name" => "Chromecast", "description" => "Best Chromecast", "image" => "cat_blue.jpg", "price" => 300],
            ["name" => "Glasses", "description" => "Best Glasses", "image" => "zenitstu.png", "price" => 500]
        ];

        foreach ($products as $p) {
            Product::firstOrCreate(['name' => $p['name']], $p);
        }
    }
}
