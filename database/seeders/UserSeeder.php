<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Check if test user exists before creating
        if (!User::where('email', 'test@example.com')->exists()) {
            User::create([
                'name' => "Test User",
                'email' => "test@example.com",
                'password' => Hash::make('admin123')
            ]);
        }

        foreach (range(1, 4) as $index) {
            User::create([
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'password' => Hash::make('password123'), // or generate a random password
            ]);
        }
    }
}
