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
        Persons
         */
        $api->get('/persons', ['uses' => 'Api\Persons\Controllers\PersonController@index', 'as' => 'api.persons.index']);
        $api->get('/persons/{personId}', ['uses' => 'Api\Persons\Controllers\PersonController@show', 'as' => 'api.persons.show']);
        $api->put('/persons/{personId}', ['uses' => 'Api\Persons\Controllers\PersonController@update', 'as' => 'api.persons.update']);
        $api->delete('/persons/{personId}', ['uses' => 'Api\Persons\Controllers\PersonController@delete', 'as' => 'api.persons.delete']);
        $api->post('/persons', ['uses' => 'Api\Persons\Controllers\PersonController@create', 'as' => 'api.persons.create']);

        /*
        Person Custom Field
         */
        $api->get('/persons/{personId}/custom-fields', ['uses' => 'Api\Persons\Controllers\CustomFieldController@index', 'as' => 'api.persons.customfield.index']);
        $api->get('/persons/{personId}/custom-fields/{customFieldId}', ['uses' => 'Api\Persons\Controllers\CustomFieldController@show', 'as' => 'api.persons.customfield.show']);
        $api->put('/persons/{personId}/custom-fields/{customFieldId}', ['uses' => 'Api\Persons\Controllers\CustomFieldController@update', 'as' => 'api.persons.customfield.update']);
        $api->delete('/persons/{personId}/custom-fields/{customFieldId}', ['uses' => 'Api\Persons\Controllers\CustomFieldController@delete', 'as' => 'api.persons.customfield.delete']);
        $api->post('/persons/{personId}/custom-fields', ['uses' => 'Api\Persons\Controllers\CustomFieldController@create', 'as' => 'api.persons.customfield.create']);

        /*
        Person Note
         */
        $api->get('/persons/{personId}/notes', ['uses' => 'Api\Persons\Controllers\NoteController@index', 'as' => 'api.persons.note.index']);
        $api->get('/persons/{personId}/notes/{noteId}', ['uses' => 'Api\Persons\Controllers\NoteController@show', 'as' => 'api.persons.note.show']);
        $api->put('/persons/{personId}/notes/{noteId}', ['uses' => 'Api\Persons\Controllers\NoteController@update', 'as' => 'api.persons.note.update']);
        $api->delete('/persons/{personId}/notes/{noteId}', ['uses' => 'Api\Persons\Controllers\NoteController@delete', 'as' => 'api.persons.note.delete']);
        $api->post('/persons/{personId}/notes', ['uses' => 'Api\Persons\Controllers\NoteController@create', 'as' => 'api.persons.note.create']);

        /*
        Person Tag
         */
        $api->get('/persons/{personId}/tags', ['uses' => 'Api\Persons\Controllers\TagController@index', 'as' => 'api.persons.tag.index']);
        $api->delete('/persons/{personId}/tags/{tagId}', ['uses' => 'Api\Persons\Controllers\TagController@delete', 'as' => 'api.persons.tag.delete']);
        $api->post('/persons/{personId}/tags', ['uses' => 'Api\Persons\Controllers\TagController@create', 'as' => 'api.persons.tag.create']);

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
