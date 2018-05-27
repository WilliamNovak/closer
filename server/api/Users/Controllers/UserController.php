<?php

namespace Api\Users\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\User;


class UserController extends Controller
{

    /**
     * Get all users.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return new JsonResponse([
            'users' => User::where('id', '>', 0)->get()
        ]);
    }

    /**
     * Create user.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->get('user');
        $user = User::create($data);
        return new JsonResponse([
            'user' => $user
        ]);
    }
}
