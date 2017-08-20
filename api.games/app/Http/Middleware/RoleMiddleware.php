<?php

namespace App\Http\Middleware;

use Closure;
use App\User;
use App\UserRole;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $roleName)
    {
        return $request->_user->roles->where('name', '=', $roleName)->first()
            ? $next($request)
            : response()->json(['error' => 'Restricted area'], 401);
    }
}
