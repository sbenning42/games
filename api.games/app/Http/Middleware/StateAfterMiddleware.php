<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;

class StateAfterMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $stateName)
    {
        $response = $next($request);
        $token = $response->getData()->token;
        if (! $token = $response->getData()->token) {
            return $response;
        }
        if (! $user = JWTAuth::toUser($token)) {
            return response()->json(['error' => 'cannot retrive user to find allowed state'], 422);
        }
        if ($user->state->name != $stateName) {
            return response()->json(['error' => 'user state not allowed'], 401);
        }
        return $response;
    }
}
