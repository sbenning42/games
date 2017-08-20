<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Match;
use App\Move;

class MatchController extends Controller
{
    public function show(Request $request, $id) {
        if (! $m = $request->_user->joinMatchmacking()) {
            return response()->json(['error' => 'not found', 'verbose' => [$request->_user->matchmacking, $request->_user->matchmackingGuest]], 404);
        }
        $M = $m->match;
        $M = Match::expand($M);
        return response()->json($M, 200);
    }

    public function play(Request $request, $id) {
        if (! $m = $request->_user->joinMatchmacking()) {
            return response()->json(['error' => 'not found', 'verbose' => [$request->_user->matchmacking, $request->_user->matchmackingGuest]], 404);
        }
        $M = $m->match;
        if ($request->_user->id != $M->current_player) {
            return response()->json(['error' => 'Not to you to play']);
        }
        $mm = new Move(['tileId' => $request->tileId, 'player' => $request->_user->id]);
        $M->last_move = $mm->toJson();
        $M->current_player = ($request->_user->id == $M->matchmacking->user_id) ? $M->matchmacking->guest_id : $M->matchmacking->user_id;
        $M->save();
        $M = Match::expand($M);
        return response()->json($M, 200);
    }
}
