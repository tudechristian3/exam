<?php

namespace Tests\Unit;

use App\Models\Task;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    public function test_task_belongs_to_user()
    {
        $user = User::factory()->create();
        $task = Task::factory()->create(['user_id' => $user->id]);

        $this->assertInstanceOf(User::class, $task->user);
        $this->assertEquals($user->id, $task->user->id);
    }

    public function test_task_attributes_are_fillable()
    {
        $task = Task::factory()->create([
            'title' => 'Test Task',
            'description' => 'This is a test task',
            'status' => 'pending'
        ]);

        $this->assertEquals('Test Task', $task->title);
        $this->assertEquals('This is a test task', $task->description);
        $this->assertEquals('pending', $task->status);
    }

    public function test_task_requires_user_id()
    {
        $this->expectException(\Illuminate\Database\QueryException::class);
        
        Task::factory()->create(['user_id' => null]);
    }
} 