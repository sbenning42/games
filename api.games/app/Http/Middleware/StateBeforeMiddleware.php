<?php

namespace App\Http\Middleware;

use Closure;

class StateBeforeMiddleware
{
    public function handle($request, Closure $next, $stateName)
    {
        if ($request->_user->state->name != $stateName) {
            return response()->json(['error' => 'user state not allowed'], 401);
        }
        return $next($request);
    }
}
