<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{
    protected $fillable = [
        'name', 'created_at', 'updated_at',
    ];

    protected $guarded = [
        'id',
    ];

    protected $hidden = [
        'pivot', 'created_at', 'updated_at',
    ];

    static public function name($name) {
        return UserRole::where('name', '=', $name)->first();
    }

    public function users() {
        return $this->belongsToMany('App\User');
    }
}
