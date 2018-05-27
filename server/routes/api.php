<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$api = $app->make(Dingo\Api\Routing\Router::class);

$api->version('v1', function ($api) {

    $api->post('/auth/login', [
        'as' => 'api.auth.login',
        'uses' => 'App\Http\Controllers\Auth\AuthController@postLogin',
    ]);

    $api->group([
        'middleware' => 'api.auth',
    ], function ($api) {
        $api->get('/', [
            'uses' => 'App\Http\Controllers\APIController@getIndex',
            'as' => 'api.index'
        ]);
        $api->get('/auth/user', [
            'uses' => 'App\Http\Controllers\Auth\AuthController@getUser',
            'as' => 'api.auth.user'
        ]);
        $api->patch('/auth/refresh', [
            'uses' => 'App\Http\Controllers\Auth\AuthController@patchRefresh',
            'as' => 'api.auth.refresh'
        ]);
        $api->delete('/auth/invalidate', [
            'uses' => 'App\Http\Controllers\Auth\AuthController@deleteInvalidate',
            'as' => 'api.auth.invalidate'
        ]);
    });


    $api->group([
        'middleware' => 'api.auth',
    ], function ($api) {
        $api->get('/users', [
            'uses' => 'Api\Users\Controllers\UserController@index',
            'as' => 'api.users.index'
        ]);
        $api->post('/users', [
            'uses' => 'Api\Users\Controllers\UserController@create',
            'as' => 'api.users.create'
        ]);
    });

    $api->group([
        'middleware' => 'api.auth',
    ], function ($api) {
        $api->get('/customers', [
            'uses' => 'Api\Customers\Controllers\CustomerController@index',
            'as' => 'api.customers.index'
        ]);
        $api->get('/customers/{id}', [
            'uses' => 'Api\Customers\Controllers\CustomerController@show',
            'as' => 'api.customers.show'
        ]);
        $api->put('/customers/{id}', [
            'uses' => 'Api\Customers\Controllers\CustomerController@update',
            'as' => 'api.customers.update'
        ]);
        $api->post('/customers', [
            'uses' => 'Api\Customers\Controllers\CustomerController@create',
            'as' => 'api.customers.create'
        ]);
    });

});
