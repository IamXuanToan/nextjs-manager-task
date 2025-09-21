<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        //
        $email = $request->input('email');
        $pass = $request->input('password');

        $credentials = [
            'email' => $email,
            'password' => $pass,
        ];



        //Check email and pass
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => 'Email hoặc mật khẩu không đúng',
            ], 401); // 401 Unauthorized
        }

        //Login success then create token
        $user = User::where('email', $credentials['email'])->first();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Đăng nhập thành công',
            'user' => [
                'id' => $user->id,
                'name' => $user->name
            ],
            'token' => $token,
        ], 200)->cookie('auth_token', $token, 60 * 24, '/', null, true, true, false, 'Strict');
        

    }

}
