<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\UserState;

class AdminUserStateController extends Controller
{
    static public $storeRules = [
        'name' => 'required|min:4|max:255|unique:user_states,name',
    ];

    static public $updateRules = [
        'name' => 'min:4|max:255',
    ];

    public function index()
    {
        return response()->json(UserState::all(), 200);
    }

    public function create()
    {
        
    }

    public function store(Request $request)
    {
        $this->validate($request, self::$storeRules);
        return response()->json(UserState::create([
            'name' => trim($request->name),
        ]), 201);
    }

    public function show($id)
    {
        if (! $userState = UserState::find($id)) {
            return response()->json(['error' => 'user state not found'], 404);
        }
        return response()->json($userState, 200);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        if (! $userState = UserState::find($id)) {
            return response()->json(['error' => 'user state not found'], 404);
        }
        $this->validate($request, self::$updateRules);
        if (isset($request->name)) {
            if (($alreadyUserState = UserState::email(trim( $name = $request->name))) && ($alreadyUserState->id != $id)) {
                return response()->json(['error' => 'name already use'], 422);
            }
            $userState->name = $name;
        }
        $userState->save();
        return response()->json($userState, 200);
    }

    public function destroy($id)
    {
        if (! $userState = UserState::find($id)) {
            return response()->json(['error' => 'user state not found'], 404);
        }
        $userState->delete();
        return response()->json(['user state deleted' => true], 200);
    }
}
