<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use App\User;
use App\UserState;
use App\UserRole;
use DB;

class AuthController extends Controller
{
    static $registerRules = [
        'email' => 'required|min:4|max:255|unique:users,email',
        'name' => 'required|min:4|max:255',
        'password' => 'required|min:8|max:255',
    ];
    static $loginRules = [
        'email' => 'required|min:4|max:255',
        'password' => 'required|min:8|max:255',
    ];

    public function register(Request $request) {
        $this->validate($request, self::$registerRules);
        if (! $user = User::create([
            'state_id' => UserState::name('active')->id,
            'name' => trim($request->name),
            'email' => trim($request->email),
            'password' => bcrypt(trim($request->password))
        ])) {
            return response()->json(['error' => 'Cannot create user'], 422);
        }
        DB::insert('insert into role_user (role_id, user_id) values (?, ?)', [UserRole::name('user')->id, $user->id]);
        return response()->json($user, 201);
    }

    public function login(Request $request) {
        $this->validate($request, self::$loginRules);
        if (! $token = JWTAuth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(['error' => 'Invalid credentials', 'token' => ''], 422);
        }
        $user = JWTAuth::toUser($token);
        return response()->json(['token' => $token, 'userId' => $user->id], 200);
    }

    public function logout(Request $request) {
        JWTAuth::invalidate($request->_token);
        return response()->json([], 200);
    }
}
