<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'state_id', 'name', 'email', 'password', 'created_at', 'updated_at',
    ];

    protected $guarded = [
        'id',
    ];

    protected $hidden = [
        'state_id', 'password', 'remember_token', 'created_at', 'updated_at',
    ];

    static public function email($email) {
        return User::where('email', '=', $email)->first();
    }

    public function matchmacking() {
        return $this->hasOne('App\Matchmacking');
    }

    public function matchmackingGuest() {
        return $this->hasOne('App\Matchmacking', 'guest_id');
    }

    public function matchCurrentPlayer() {
        return $this->hasOne('App\Match', 'current_player');
    }

    public function matchWinner() {
        return $this->hasOne('App\Match', 'winner');
    }

    public function joinMatchmacking() {
        if ($m = $this->matchmacking) {
            return $m;
        }
        return $this->matchmackingGuest;
    }

    public function state() {
        return $this->belongsTo('App\UserState');
    }

    public function roles() {
        return $this->belongsToMany('App\UserRole', 'role_user', 'user_id', 'role_id');
    }
}
