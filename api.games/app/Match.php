<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Match extends Model
{
    protected $fillable = [
        'matchmacking_id', 'current_player', 'winner', 'last_move', 'created_at', 'updated_at',
    ];

    protected $guarded = [
        'id',
    ];

    protected $hidden = [
        'created_at', 'updated_at',
    ];

    public function currentPlayer() {
        return $this->belongsTo('App\User', 'current_player');
    }

    public function winner() {
        return $this->belongsTo('App\User', 'winner');
    }

    public function matchmacking() {
        return $this->belongsTo('App\Matchmacking', 'matchmacking_id');
    }

    static public function expand(Match $M) {
        $M->matchmacking;
        $M->currentPlayer;
        $M->winner;
        return $M;
    }
}
