<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Task;
use App\Models\User;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ensure there's at least one user to assign tasks to
        $user = User::first() ?? User::factory()->create();

        foreach (range(1, 5) as $i) {
            Task::create([
                'user_id' => $user->id,
                'title' => "Sample Task $i",
                'description' => "This is the description for task $i.",
                'status' => "Pending"
            ]);
        }
    }
}
