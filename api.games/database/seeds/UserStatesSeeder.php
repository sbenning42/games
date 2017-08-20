<?php

use Illuminate\Database\Seeder;
use App\UserState;

class UserStatesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (['inactive', 'active', 'deleted'] as $state) {
            UserState::create([
                'name' => $state,
            ]);
        }
    }
}
