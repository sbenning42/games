<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use App\User;

class JwtHelperMiddleware
{
    public function handle($request, Closure $next)
    {
        $request->_token = JWTAuth::getToken();
        $request->_user = JWTAuth::toUser($request->_token);
        return $next($request);
    }
}
