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

        /*
        Users
         */
        $api->get('/users', [ 'uses' => 'Api\Users\Controllers\UserController@index', 'as' => 'api.users.index']);
        $api->get('/users/{userId}', ['uses' => 'Api\Users\Controllers\UserController@show', 'as' => 'api.users.show']);
        $api->put('/users/{userId}', ['uses' => 'Api\Users\Controllers\UserController@update', 'as' => 'api.users.update']);
        $api->put('/users/{userId}/roles', ['uses' => 'Api\Users\Controllers\UserController@updateRole', 'as' => 'api.users.update.role']);
        $api->delete('/users/{userId}', ['uses' => 'Api\Users\Controllers\UserController@delete', 'as' => 'api.users.delete']);
        $api->post('/users', ['uses' => 'Api\Users\Controllers\UserController@create', 'as' => 'api.users.create']);

        /*
        Roles
         */
        $api->get('/roles', ['uses' => 'Api\Users\Controllers\RoleController@index', 'as' => 'api.roles.index']);
        $api->get('/roles/{identifier}', ['uses' => 'Api\Users\Controllers\RoleController@show', 'as' => 'api.roles.show']);
        $api->put('/roles/{identifier}', ['uses' => 'Api\Users\Controllers\RoleController@update', 'as' => 'api.roles.update']);
        $api->delete('/roles/{identifier}', ['uses' => 'Api\Users\Controllers\RoleController@delete', 'as' => 'api.roles.delete']);
        $api->post('/roles', ['uses' => 'Api\Users\Controllers\RoleController@create', 'as' => 'api.roles.create']);

        /*
        Customers
         */
        $api->get('/customers', ['uses' => 'Api\Customers\Controllers\CustomerController@index', 'as' => 'api.customers.index']);
        $api->get('/customers/{customerId}', ['uses' => 'Api\Customers\Controllers\CustomerController@show', 'as' => 'api.customers.show']);
        $api->put('/customers/{customerId}', ['uses' => 'Api\Customers\Controllers\CustomerController@update', 'as' => 'api.customers.update']);
        $api->delete('/customers/{customerId}', ['uses' => 'Api\Customers\Controllers\CustomerController@delete', 'as' => 'api.customers.delete']);
        $api->post('/customers', ['uses' => 'Api\Customers\Controllers\CustomerController@create', 'as' => 'api.customers.create']);

        /*
        Customer Custom Field
         */
        $api->get('/customers/{customerId}/custom-fields', ['uses' => 'Api\Customers\Controllers\CustomFieldController@index', 'as' => 'api.customers.customfield.index']);
        $api->get('/customers/{customerId}/custom-fields/{customFieldId}', ['uses' => 'Api\Customers\Controllers\CustomFieldController@show', 'as' => 'api.customers.customfield.show']);
        $api->put('/customers/{customerId}/custom-fields/{customFieldId}', ['uses' => 'Api\Customers\Controllers\CustomFieldController@update', 'as' => 'api.customers.customfield.update']);
        $api->delete('/customers/{customerId}/custom-fields/{customFieldId}', ['uses' => 'Api\Customers\Controllers\CustomFieldController@delete', 'as' => 'api.customers.customfield.delete']);
        $api->post('/customers/{customerId}/custom-fields', ['uses' => 'Api\Customers\Controllers\CustomFieldController@create', 'as' => 'api.customers.customfield.create']);

        /*
        Customer Note
         */
        $api->get('/customers/{customerId}/notes', ['uses' => 'Api\Customers\Controllers\NoteController@index', 'as' => 'api.customers.note.index']);
        $api->get('/customers/{customerId}/notes/{noteId}', ['uses' => 'Api\Customers\Controllers\NoteController@show', 'as' => 'api.customers.note.show']);
        $api->put('/customers/{customerId}/notes/{noteId}', ['uses' => 'Api\Customers\Controllers\NoteController@update', 'as' => 'api.customers.note.update']);
        $api->delete('/customers/{customerId}/notes/{noteId}', ['uses' => 'Api\Customers\Controllers\NoteController@delete', 'as' => 'api.customers.note.delete']);
        $api->post('/customers/{customerId}/notes', ['uses' => 'Api\Customers\Controllers\NoteController@create', 'as' => 'api.customers.note.create']);

        /*
        Tags
         */
        $api->get('/tags', ['uses' => 'Api\Tags\Controllers\TagController@index', 'as' => 'api.tags.index']);
        $api->get('/tags/{identifier}', ['uses' => 'Api\Tags\Controllers\TagController@show', 'as' => 'api.tags.show']);
        $api->put('/tags/{identifier}', ['uses' => 'Api\Tags\Controllers\TagController@update', 'as' => 'api.tags.update']);
        $api->delete('/tags/{identifier}', ['uses' => 'Api\Tags\Controllers\TagController@delete','as' => 'api.tags.delete']);
        $api->post('/tags', ['uses' => 'Api\Tags\Controllers\TagController@create', 'as' => 'api.tags.create']);

        /*
        Operations
         */
        $api->get('/operations', ['uses' => 'Api\Operations\Controllers\OperationController@index', 'as' => 'api.operations.index']);
        $api->get('/operations/{identifier}', ['uses' => 'Api\Operations\Controllers\OperationController@show', 'as' => 'api.operations.show']);
        $api->put('/operations/{identifier}', ['uses' => 'Api\Operations\Controllers\OperationController@update', 'as' => 'api.operations.update']);
        $api->delete('/operations/{identifier}', ['uses' => 'Api\Operations\Controllers\OperationController@delete','as' => 'api.operations.delete']);
        $api->post('/operations', ['uses' => 'Api\Operations\Controllers\OperationController@create', 'as' => 'api.operations.create']);

        /*
        Sources
         */
        $api->get('/sources', ['uses' => 'Api\Sources\Controllers\SourceController@index', 'as' => 'api.sources.index']);
        $api->get('/sources/{identifier}', ['uses' => 'Api\Sources\Controllers\SourceController@show', 'as' => 'api.sources.show']);
        $api->put('/sources/{identifier}', ['uses' => 'Api\Sources\Controllers\SourceController@update', 'as' => 'api.sources.update']);
        $api->delete('/sources/{identifier}', ['uses' => 'Api\Sources\Controllers\SourceController@delete','as' => 'api.sources.delete']);
        $api->post('/sources', ['uses' => 'Api\Sources\Controllers\SourceController@create', 'as' => 'api.sources.create']);

        /*
        Stages
         */
        $api->get('/stages', ['uses' => 'Api\Stages\Controllers\StageController@index', 'as' => 'api.stages.index']);
        $api->get('/stages/{identifier}', ['uses' => 'Api\Stages\Controllers\StageController@show', 'as' => 'api.stages.show']);
        $api->put('/stages/{identifier}', ['uses' => 'Api\Stages\Controllers\StageController@update', 'as' => 'api.stages.update']);
        $api->delete('/stages/{identifier}', ['uses' => 'Api\Stages\Controllers\StageController@delete','as' => 'api.stages.delete']);
        $api->post('/stages', ['uses' => 'Api\Stages\Controllers\StageController@create', 'as' => 'api.stages.create']);

        /*
        Collections
         */
        $api->get('/collections', ['uses' => 'Api\Collections\Controllers\CollectionController@index', 'as' => 'api.collections.index']);
        $api->get('/collections/{collectionId}', ['uses' => 'Api\Collections\Controllers\CollectionController@show', 'as' => 'api.collections.show']);
        $api->put('/collections/{collectionId}', ['uses' => 'Api\Collections\Controllers\CollectionController@update', 'as' => 'api.collections.update']);
        $api->delete('/collections/{collectionId}', ['uses' => 'Api\Collections\Controllers\CollectionController@delete', 'as' => 'api.collections.delete']);
        $api->post('/collections', ['uses' => 'Api\Collections\Controllers\CollectionController@create', 'as' => 'api.collections.create']);

    });

});
