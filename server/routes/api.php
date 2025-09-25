<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskManagerController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\CustomAuthScum;

// Route::get('/user', function (Request $request) {
//     // return $request->user();
//     return 'lll';
// })->middleware('auth:sanctum');
Route::apiResource('/task', TaskManagerController::class)->middleware('auth:sanctum');

Route::apiResource('/user', UserController::class);

Route::post('/auth/login', [AuthController::class, 'login']);

Route::post('/auth/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::get('/auth/me', [AuthController::class, 'me'])->middleware('auth:sanctum');

