<?php

namespace Database\Seeders;

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
        DB::table('products')->insert([
            ['user_id' => 1, 'name' => 'Laptop', 'description' => 'High-performance laptop', 'price' => 1200.50],
            ['user_id' => 1, 'name' => 'Smartphone', 'description' => 'Latest model smartphone', 'price' => 899.99],
            ['user_id' => 1, 'name' => 'Headphones', 'description' => 'Noise-canceling headphones', 'price' => 199.99],
        ]);
    }
}
