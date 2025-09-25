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

        return response()->json([
            'success' => true,
            'message' => 'Đăng nhập thành công',
            'user' => [
                'id' => $user->id,
                'name' => $user->name
            ],
            // 'token' => $token,
        ], 200);
    }

    public function logout(Request $request)
    {
        // $user = $request->user();
        // $user = $request->user();
        Auth::guard('web')->logout();
        $request->session()->invalidate();   // vô hiệu hoá session hiện tại
        $request->session()->regenerateToken(); // regenerate CSRF token

        $request->user()->tokens()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Đăng xuất thành công',
        ], 200)->withCookie(cookie()->forget('laravel_session'))
            ->withCookie(cookie()->forget('XSRF-TOKEN'));
    }

    public function me(Request $request)
    {
        // $user = $request->user();
        // $user = $request->user();

        return response()->json([
            'success' => true,
            'user' => $request->user()->name,
        ]);
    }
}
