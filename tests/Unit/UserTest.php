<?php

namespace Tests\Unit;

use App\Models\User;
use App\Models\Task;
use App\Models\Products;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_has_many_tasks()
    {
        $user = User::factory()->create();
        $task = Task::factory()->create(['user_id' => $user->id]);

        $this->assertInstanceOf(Task::class, $user->tasks->first());
        $this->assertEquals($task->id, $user->tasks->first()->id);
    }

    public function test_user_has_many_products()
    {
        $user = User::factory()->create();
        $product = Products::factory()->create(['user_id' => $user->id]);

        $this->assertInstanceOf(Products::class, $user->products->first());
        $this->assertEquals($product->id, $user->products->first()->id);
    }

    public function test_user_attributes_are_fillable()
    {
        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $this->assertEquals('Test User', $user->name);
        $this->assertEquals('test@example.com', $user->email);
    }

    public function test_password_is_hashed()
    {
        $user = User::factory()->create([
            'password' => 'password123'
        ]);

        $this->assertNotEquals('password123', $user->password);
        $this->assertTrue(password_verify('password123', $user->password));
    }
} 