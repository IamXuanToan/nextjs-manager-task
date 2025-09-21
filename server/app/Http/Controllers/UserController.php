<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $email = User::where('email', $request->input('email'))->first();

        if ($email) {
            return response()->json([
                'success' => false,
                'message' => 'Email đã tồn tại trong hệ thống!'
            ], 400);
        }

        $user = User::create($request->all());

        if ($user) {
            return response()->json([
                'success' => true,
                'message' => 'Đăng ký thành công!'
            ], 200);
        }
        return response()->json([
            'success' => false,
            'message' => 'Đăng ký thất bại!'
        ], 400);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        return User::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $user = User::findOrFail($id);
        $user->update($request->all());

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $user = User::findOrFail($id);
        $user->delete();

        return 204;
    }
}
