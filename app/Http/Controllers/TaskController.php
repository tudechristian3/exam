<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Http\Resources\UserResource;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Task::where('user_id', Auth::user()->id)->with('user')->get();
        return Inertia::render('Task/Index', [
            'tasks' => TaskResource::collection($tasks)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::get();
        return Inertia::render('Task/Create', [
            'users' => UserResource::collection($users)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        $data = $request->validated();
        $product = Task::create($data);
        return redirect()->route('tasks.index')->with('message', 'Task has been created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        $data = $task->load('user');
        return Inertia::render('Task/Show', [
            'task' => new TaskResource($data),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        $data = $task->load('user');
        $users = User::get();
        return Inertia::render('Task/Edit', [
            'task' => new TaskResource($data),
            'users' => UserResource::collection($users)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $data = $request->validated();
        $task->update($data);
        return redirect()->route('tasks.index')->with('message', 'Task updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return redirect()->route('tasks.index')->with('message', 'Task deleted successfully!');
    }
}
