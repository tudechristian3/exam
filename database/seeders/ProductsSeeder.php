<?php

namespace Database\Seeders;

use App\Models\Products;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing products
        DB::table('products')->truncate();

        // Get the first user or create one if none exists
        $user = User::first() ?? User::factory()->create();

        $products = [
            [
                'user_id' => $user->id,
                'name' => 'MacBook Pro 16"',
                'description' => 'Apple M2 Pro chip, 16GB unified memory, 512GB SSD storage',
                'price' => 2499.99,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => $user->id,
                'name' => 'iPhone 15 Pro',
                'description' => '6.1-inch Super Retina XDR display, A17 Pro chip, 256GB storage',
                'price' => 999.99,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => $user->id,
                'name' => 'Sony WH-1000XM5',
                'description' => 'Industry-leading noise cancellation, 30-hour battery life',
                'price' => 399.99,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => $user->id,
                'name' => 'Samsung 4K Smart TV',
                'description' => '65-inch QLED 4K UHD Smart TV with HDR',
                'price' => 1299.99,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => $user->id,
                'name' => 'Logitech MX Master 3S',
                'description' => 'Wireless mouse with ultra-fast scrolling and precise tracking',
                'price' => 99.99,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        // Insert products using the Product model
        foreach ($products as $product) {
            Products::create($product);
        }
    }
}
