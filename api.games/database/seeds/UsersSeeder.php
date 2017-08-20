<?php

use Illuminate\Database\Seeder;
use App\UserState;
use App\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //$activeId = UserState::name('active')->id;
        //$activeId = UserState::where('name', '=', 'active')->first();
        User::create([
            'state_id' => 2,
            'name' => 'sbenning',
            'email' => 'sbenning@student.42.fr',
            'password' => bcrypt('sbenning'),
        ]);
        User::create([
            'state_id' => 2,
            'name' => 'sbenning',
            'email' => 's.benning66@gmail.com',
            'password' => bcrypt('sbenning'),
        ]);
    }
}
