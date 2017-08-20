<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Matchmacking;
use App\Match;

class MatchmackingController extends Controller
{
    public function index(Request $request) {
        $M = Matchmacking::where('guest_id', '=', null)->get();
        $M = Matchmacking::expand($M);
        return response()->json($M, 200);
    }

    public function show(Request $request, $id) {
        if (! $mM = Matchmacking::find($id)) {
            return response()->json(['error' => 'not found'], 404);
        }
        $mM->user;
        $mM->guest;
        $mM->game;
        return response()->json($mM, 200);
    }

    public function store(Request $request) {
        $this->validate($request, [
            'game_id' => 'required|exists:games,id'
        ]);
        if (! $mM = Matchmacking::create([
            'user_id' => $request->_user->id,
            'game_id' => $request->game_id,
            'token' => str_random(40)
        ])) {
            return response()->json(['error' => 'cannot create'], 422);
        }
        return response()->json($mM, 201);
    }

    public function update(Request $request, $id) {
        if (! $mM = Matchmacking::find($id)) {
            return response()->json(['error' => 'not found'], 404);
        }
        $mM->guest_id = $request->_user->id;
        $mM->save();
        Match::create([
            'matchmacking_id' => $mM->id,
            'current_player' => $mM->user_id,
        ]);
        return response()->json($mM, 200);
    }

    public function delete(Request $request, $id) {
        if (! $mM = $request->_user->joinMatchmacking()) {
            return response()->json(['error' => 'not found'], 404);
        }
        $mM->delete();
        return response()->json([], 200);
    }
}
