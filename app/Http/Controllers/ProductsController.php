<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Http\Requests\StoreProductsRequest;
use App\Http\Requests\UpdateProductsRequest;
use Inertia\Inertia;
use App\Http\Resources\ProductsResource;
use Illuminate\Support\Facades\Auth;
class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Products::where('user_id', Auth::user()->id)->get();
        return Inertia::render('Products/Index', [
            'products' => ProductsResource::collection($products),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Products/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductsRequest $request)
    {
        $data = $request->validated();
        $product = Products::create($data);
        return redirect()->route('products.index')->with('message', 'Product has been created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Products $product)
    {
        $data = $product->load('user');
        return Inertia::render('Products/Show', [
            'product' => new ProductsResource($data),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $product)
    {
        $data = $product->load('user');
        return Inertia::render('Products/Edit', [
            'product' => new ProductsResource($data),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductsRequest $request, Products $product)
    {
        $data = $request->validated();
        $product->update($data);
        return redirect()->route('products.index')->with('message', 'Product updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $product)
    {
        $product->delete();
        return redirect()->route('products.index')->with('message', 'Product deleted successfully!');
    }
}
