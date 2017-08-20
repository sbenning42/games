<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Matchmacking extends Model
{
    protected $fillable = [
        'user_id', 'token', 'guest_id', 'game_id', 'created_at', 'updated_at',
    ];

    protected $guarded = [
        'id',
    ];

    protected $hidden = [
        'created_at', 'updated_at',
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }

    public function guest() {
        return $this->belongsTo('App\User', 'guest_id');
    }

    public function game() {
        return $this->belongsTo('App\Game');
    }

    public function match() {
        return $this->hasOne('App\Match', 'matchmacking_id');
    }

    static public function expand($M) {
        $l = $M->count();
        for ($i = 0; $i < $l; $i++) {
            $M[$i]->user;
            $M[$i]->guest;
            $M[$i]->game;
        }
        return $M;
    }
}
