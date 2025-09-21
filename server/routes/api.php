<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskManagerController;
use App\Http\Controllers\UserController;

// Route::get('/user', function (Request $request) {
//     // return $request->user();
//     return 'lll';
// })->middleware('auth:sanctum');
Route::apiResource('/task', TaskManagerController::class);

Route::apiResource('/user', UserController::class);

Route::post('/auth/login', [AuthController::class, 'login']);