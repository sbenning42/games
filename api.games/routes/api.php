<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', 'AuthController@register');

/*
active section // controller must provide user 'token' key on json response 
*/
Route::group(['middleware' => 'state.after:active'], function () {
    Route::post('/login', 'AuthController@login');
});


/*
Authenticate/active section
*/
Route::group(['middleware' => ['jwt.auth', 'jwt-helper', 'state.before:active']], function () {





    /*
    User Section
    */
    Route::group(['middleware' => 'role:user'], function () {
        
        Route::get('/users', 'UserController@index');
        Route::get('/users/{id}', 'UserController@show');

        Route::get('/matchmackings', 'MatchmackingController@index');
        Route::post('/matchmackings', 'MatchmackingController@store');
        Route::put('/matchmackings/{id}', 'MatchmackingController@update');
        Route::delete('/matchmackings/{id}', 'MatchmackingController@delete');

        Route::get('/matchmackings/{id}', 'MatchmackingController@show');

        Route::get('/match/{id}', 'MatchController@show');
        Route::put('/match/{id}', 'MatchController@play');

        Route::get('/games', 'GameController@index');

        Route::post('/logout', 'AuthController@logout');

    });






    /*
    Admin Section
    */
    Route::group(['prefix' => 'admin', 'middleware' => 'role:admin'], function () {

        Route::resource('/users', 'AdminUserController');
        Route::resource('/states', 'AdminUserStateController');
        Route::resource('/roles', 'AdminUserRoleController');

        Route::get('/users/{id}/state', 'AdminUserController@showState');
        Route::get('/users/{id}/roles', 'AdminUserController@showRoles');

    });

});
