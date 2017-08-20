<?php

use Illuminate\Database\Seeder;
use App\UserRole;

class UserRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (['user', 'admin'] as $role) {
            UserRole::create([
                'name' => $role,
            ]);
        }
    }
}
