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

    $api->get('/users/{email}/check-email', [
        'uses' => 'Api\Users\Controllers\UserController@checkEmail',
        'as' => 'api.users.check_email'
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

        /* Users */
        $api->get('/users', [
            'uses' => 'Api\Users\Controllers\UserController@index',
            'as' => 'api.users.index'
        ]);
        $api->get('/users/{id}', [
            'uses' => 'Api\Users\Controllers\UserController@show',
            'as' => 'api.users.show'
        ]);
        $api->put('/users/{id}', [
            'uses' => 'Api\Users\Controllers\UserController@update',
            'as' => 'api.users.update'
        ]);
        $api->put('/users/{id}/roles', [
            'uses' => 'Api\Users\Controllers\UserController@updateRole',
            'as' => 'api.users.update.role'
        ]);
        $api->delete('/users/{id}', [
            'uses' => 'Api\Users\Controllers\UserController@delete',
            'as' => 'api.users.delete'
        ]);
        $api->post('/users', [
            'uses' => 'Api\Users\Controllers\UserController@create',
            'as' => 'api.users.create'
        ]);

        /* Roles */
        $api->get('/roles', [
            'uses' => 'Api\Users\Controllers\RoleController@index',
            'as' => 'api.roles.index'
        ]);
        $api->get('/roles/{role}', [
            'uses' => 'Api\Users\Controllers\RoleController@show',
            'as' => 'api.roles.show'
        ]);
        $api->put('/roles/{role}', [
            'uses' => 'Api\Users\Controllers\RoleController@update',
            'as' => 'api.roles.update'
        ]);
        $api->delete('/roles/{role}', [
            'uses' => 'Api\Users\Controllers\RoleController@delete',
            'as' => 'api.roles.delete'
        ]);
        $api->post('/roles', [
            'uses' => 'Api\Users\Controllers\RoleController@create',
            'as' => 'api.roles.create'
        ]);

        /* Customers */
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
        $api->delete('/customers/{id}', [
            'uses' => 'Api\Customers\Controllers\CustomerController@delete',
            'as' => 'api.customers.delete'
        ]);
        $api->post('/customers', [
            'uses' => 'Api\Customers\Controllers\CustomerController@create',
            'as' => 'api.customers.create'
        ]);

    });

});
