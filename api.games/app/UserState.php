<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserState extends Model
{
    protected $fillable = [
        'name', 'created_at', 'updated_at',
    ];

    protected $guarded = [
        'id',
    ];

    protected $hidden = [
        'created_at', 'updated_at',
    ];

    static public function name($name) {
        return UserState::where('name', '=', $name)->first();
    }

    public function users() {
        return $this->hasMany('App\User', 'state_id');
    }
}
