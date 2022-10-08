<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function index()
    {
        return User::all();
    }
    public function register(Request $request)
    {
        $user_fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed',
        ]);

        $user = User::create([
            'name' => $user_fields['name'],
            'email' => $user_fields['email'],
            'password' => bcrypt($user_fields['password'])
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        return [
            'user' => $user,
            'token' => $token
        ];
    }
    public function login(Request $request)
    {
        $user_fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);
        $user = User::where('email', '=', $user_fields["email"])->first();

        if (!$user || Hash::check($user_fields["password"], $user->password)) {
            return [
                "message" => "Error, mail or password doesn't match"
            ];
        }
        $token = $user->createToken('onscarou_token')->plainTextToken;

        return [
            'user' => $user,
            'token' => $token
        ];
    }
    public function logout(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();
        return [
            "user_status" => "Logged out"
        ];
    }
}
