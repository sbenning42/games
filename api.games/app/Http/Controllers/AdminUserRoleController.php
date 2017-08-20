<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\UserRole;

class AdminUserRoleController extends Controller
{
    static public $storeRules = [
        'name' => 'required|min:4|max:255|unique:user_roles,name',
    ];

    static public $updateRules = [
        'name' => 'min:4|max:255',
    ];

    public function index()
    {
        return response()->json(UserRole::all(), 200);
    }

    public function create()
    {
        
    }

    public function store(Request $request)
    {
        $this->validate($request, self::$storeRules);
        return response()->json(UserRole::create([
            'name' => trim($request->name),
        ]), 201);
    }

    public function show($id)
    {
        if (! $userRole = UserRole::find($id)) {
            return response()->json(['error' => 'user role not found'], 404);
        }
        return response()->json($userRole, 200);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        if (! $userRole = UserRole::find($id)) {
            return response()->json(['error' => 'user role not found'], 404);
        }
        $this->validate($request, self::$updateRules);
        if (isset($request->name)) {
            if (($alreadyUserRole = UserRole::email(trim( $name = $request->name))) && ($alreadyUserRole->id != $id)) {
                return response()->json(['error' => 'user role name already use'], 422);
            }
            $userRole->name = $name;
        }
        $userRole->save();
        return response()->json($userRole, 200);
    }

    public function destroy($id)
    {
        if (! $userRole = UserRole::find($id)) {
            return response()->json(['error' => 'user role not found'], 404);
        }
        $userRole->delete();
        return response()->json(['user role deleted' => true], 200);
    }
}
