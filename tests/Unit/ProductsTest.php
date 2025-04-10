<?php

namespace Tests\Unit;

use App\Models\Products;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductsTest extends TestCase
{
    use RefreshDatabase;

    public function test_product_belongs_to_user()
    {
        $user = User::factory()->create();
        $product = Products::factory()->create(['user_id' => $user->id]);

        $this->assertInstanceOf(User::class, $product->user);
        $this->assertEquals($user->id, $product->user->id);
    }

    public function test_product_attributes_are_fillable()
    {
        $product = Products::factory()->create([
            'name' => 'Test Product',
            'description' => 'This is a test product',
            'price' => 99.99
        ]);

        $this->assertEquals('Test Product', $product->name);
        $this->assertEquals('This is a test product', $product->description);
        $this->assertEquals(99.99, $product->price);
    }

    public function test_product_requires_user_id()
    {
        $this->expectException(\Illuminate\Database\QueryException::class);
        
        Products::factory()->create(['user_id' => null]);
    }

    public function test_product_price_is_numeric()
    {
        $product = Products::factory()->create(['price' => 99.99]);
        
        $this->assertIsNumeric($product->price);
        $this->assertEquals(99.99, $product->price);
    }
} 