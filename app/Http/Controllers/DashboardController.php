<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Products;
use App\Models\User;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ProductsResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\TaskResource;
class DashboardController extends Controller
{
    public function index(){
        $products = Products::where('user_id', Auth::user()->id)->get();
        $users = User::get();
        $tasks = Task::get();
        return Inertia::render('dashboard', [
            'products' => ProductsResource::collection($products),
            'users' => UserResource::collection($users),
            'tasks' => TaskResource::collection($tasks),
        ]);
    }
}
