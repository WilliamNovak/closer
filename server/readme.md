# Closer Server

> ...

## What's Added

- [Lumen 5.4](https://github.com/laravel/lumen/tree/v5.4.0).
- [JWT Auth](https://github.com/tymondesigns/jwt-auth) for Lumen Application. <sup>[1]</sup>
- [Dingo](https://github.com/dingo/api) to easily and quickly build your own API. <sup>[1]</sup>
- [Lumen Generator](https://github.com/flipboxstudio/lumen-generator) to make development even easier and faster.
- [CORS and Preflight Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) support.

> [1] Added via [this package](https://packagist.org/packages/krisanalfa/lumen-dingo-adapter).

## Quick Start

- Clone this repo or download it's release archive and extract it somewhere
- You may delete `.git` folder if you get this code via `git clone`
- Run `composer install`
- Run `php artisan jwt:generate`
- Configure your `.env` file for authenticating via database
- Set the `API_PREFIX` parameter in your .env file (usually `v1`).
- Run `php artisan migrate --seed`

## A Live PoC

- Run a PHP built in server from your root project:

```sh
php -S localhost:8000 -t public/
```

Or via artisan command:

```sh
php artisan serve
```

To authenticate a user, make a `POST` request to `/v1/auth/login` with parameter as mentioned below:

```
email: user@test.com
password: 123456
```

Request:

```sh
curl -X POST -F "email=user@teste.com" -F "password=123456" "http://localhost:8000/v1/auth/login"
```

Response:

```
{
  "success": {
    "message": "token_generated",
    "token": "beater_token_from_jwt_auth"
  }
}
```

- With token provided by above request, you can check authenticated user by sending a `GET` request to: `/v1/auth/user`.

Request:

```sh
curl -X GET -H "Authorization: Bearer beater_token_from_jwt_auth" "http://localhost:8000/v1/auth/user"
```

Response:

```
{
  "success": {
    "user": {
      "id": 1,
      "name": "User Test",
      "email": "user@test.com",
      "created_at": null,
      "updated_at": null
    }
  }
}
```

- To refresh your token, simply send a `PATCH` request to `/v1/auth/refresh`.
- Last but not least, you can also invalidate token by sending a `DELETE` request to `/v1/auth/invalidate`.
- To list all registered routes inside your application, you may execute `php artisan route:list`

```
⇒  php artisan route:list
+--------+----------------------+---------------------+------------------------------------------+------------------+------------+
| Verb   | Path                 | NamedRoute          | Controller                               | Action           | Middleware |
+--------+----------------------+---------------------+------------------------------------------+------------------+------------+
| POST   | /v1/auth/login      | api.auth.login      | App\Http\Controllers\Auth\AuthController | postLogin        |            |
| GET    | /v1                 | api.index           | App\Http\Controllers\APIController       | getIndex         | jwt.auth   |
| GET    | /v1/auth/user       | api.auth.user       | App\Http\Controllers\Auth\AuthController | getUser          | jwt.auth   |
| PATCH  | /v1/auth/refresh    | api.auth.refresh    | App\Http\Controllers\Auth\AuthController | patchRefresh     | jwt.auth   |
| DELETE | /v1/auth/invalidate | api.auth.invalidate | App\Http\Controllers\Auth\AuthController | deleteInvalidate | jwt.auth   |
+--------+----------------------+---------------------+------------------------------------------+------------------+------------+
```

## License

```
Laravel and Lumen is a trademark of Taylor Otwell
Sean Tymon officially holds "Laravel JWT" license
```
