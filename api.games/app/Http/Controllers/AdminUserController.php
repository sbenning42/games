<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;

use App\User;
use App\UserState;
use App\UserRole;

class AdminUserController extends Controller
{
    static public $storeRules = [
        'email' => 'required|min:4|max:255|unique:users,email',
        'name' => 'required|min:4|max:255',
        'password' => 'required|min:8|max:255',
    ];

    static public $updateRules = [
        'email' => 'min:4|max:255',
        'name' => 'min:4|max:255',
        'password' => 'min:8|max:255',
        'state_id' => 'exists:user_states,id',
        'role_id' => 'exists:user_roles,id',
    ];

    public function index()
    {
        return response()->json(User::all(), 200);
    }

    public function create()
    {
        
    }

    public function store(Request $request)
    {
        $this->validate($request, self::$storeRules);
        return response()->json(User::create([
            'state_id' => UserState::name('inactive')->id,
            'email' => trim($request->email),
            'name' => trim($request->name),
            'password' => bcrypt(trim($request->password)),
        ]), 201);
    }

    public function show($id)
    {
        return response()->json(User::find($id), 200);
    }
    
    public function showState($id)
    {
        if (! $user = User::find($id)) {
            return response()->json(['error' => 'user not found'], 404);
        }
        return response()->json($user->state, 200);
    }

    public function showRoles($id)
    {
        if (! $user = User::find($id)) {
            return response()->json(['error' => 'user not found'], 404);
        }
        return response()->json($user->roles, 200);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        if (! $user = User::find($id)) {
            return response()->json(['error' => 'user not found'], 404);
        }
        $this->validate($request, self::$updateRules);
        if (isset($request->state_id)) {
            if (! UserState::find($request->state_id)) {
                return response()->json(['error' => 'unknow state'], 422);
            }
            $user->state_id = $request->state_id;
        }
        if (isset($request->role_id)) {
            if (! $userRole = UserRole::find($request->role_id)) {
                return response()->json(['error' => 'unknow role'], 422);
            }
            if ($alreadyRole = DB::select('select * from role_user where role_id = ? and user_id = ?', [$userRole->id, $id])) {
                return response()->json(['error' => 'user already have that role'], 422);
            }
            DB::insert('insert into role_user (role_id, user_id) values (?, ?)', [$userRole->id, $id]);
        }
        if (isset($request->email)) {
            if (($alreadyUser = User::email(trim( $email = $request->email))) && ($alreadyUser->id != $id)) {
                return response()->json(['error' => 'email already use'], 422);
            }
            $user->email = $email;
        }
        if (isset($request->name)) $user->name = trim($request->name);
        if (isset($request->password)) $user->password = bcrypt(trim($request->password));
        $user->save();
        return response()->json($user, 200);
    }

    public function destroy($id)
    {
        if (! $user = User::find($id)) {
            return response()->json(['error' => 'user not found'], 404);
        }
        /*
        $deletedState = UserState::name('deleted');
        $user->state_id = $deletedState->id;
        $user->save();
        */
        $user->delete();
        return response()->json(['deleted' => true], 200);
    }
}
