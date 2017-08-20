<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UserState;

class UserController extends Controller
{
    public function index(Request $request) {
        return response()->json(UserState::name('active')->users, 200);
    }

    public function show(Request $request, $id) {
        return response()->json(UserState::name('active')->users->find($id), 200);
    }
}
