<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Game;

class GameController extends Controller
{
    public function index(Request $request) {
        return response()->json(Game::all(), 200);
    }
}
