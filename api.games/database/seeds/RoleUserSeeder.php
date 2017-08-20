<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\UserRole;
use App\User;

class RoleUserSeeder extends Seeder
{
    public function run()
    {
        $admin = User::where('email', '=', 'sbenning@student.42.fr')->first();
        $user = User::where('email', '=','s.benning66@gmail.com')->first();

        $roleAdmin = UserRole::where('name', '=', 'admin')->first();
        $roleUser = UserRole::where('name', '=', 'user')->first();

        DB::insert('insert into role_user (role_id, user_id) values (?, ?)', [$admin->id, $roleAdmin->id]);
        DB::insert('insert into role_user (role_id, user_id) values (?, ?)', [$admin->id, $roleUser->id]);
        DB::insert('insert into role_user (role_id, user_id) values (?, ?)', [$user->id, $roleUser->id]);
    }
}
