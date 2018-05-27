<?php

namespace Api\Users\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Users\Repositories\UserRepository;
use Api\Users\Exceptions\UserNotFoundException;

/**
 * User Controller.
 *
 */
class UserController extends Controller
{

    /**
     *
     * @var Api\Users\Repositories\UserRepository
     */
    private $userRepository;

    /**
     * User Controller Class Constructor.
     *
     * @param Api\Users\Repositories\UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Get all users.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $users = $this->userRepository->getAll();

        if (count($users) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'users' => $users
        ]);
    }

    /**
     * Get user by id.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id = 0)
    {
        $user = $this->getRequestedUser($id);
        return new JsonResponse([
            'user' => $user
        ]);
    }

    /**
     * Create user.
     *
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->get('user');
        $user = $this->userRepository->create($data);
        return new JsonResponse([
            'user' => $user
        ], Response::HTTP_CREATED);
    }

    /**
     * Update user by id.
     *
     * @param int $id
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($id = 0, Request $request)
    {
        $user = $this->getRequestedUser($id);
        $data = $request->get('user');
        $userUpdated = $this->userRepository->update($user, $data);

        if (!$userUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'user' => $userUpdated
        ]);
    }

    /**
     * Delete user by id.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id = 0)
    {
        $user = $this->getRequestedUser($id);
        $userDeleted = $this->userRepository->delete($user);

        if (!$userDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'user' => []
        ]);
    }

    /**
     * Get requested user by id.
     *
     * @param int $userId
     * @return App\User
     * @return Api\Users\Exceptions\UserNotFoundException;
     */
    private function getRequestedUser($userId = 0)
    {
        $user = $this->userRepository->getById($userId);
        if (is_null($user)) {
            throw new UserNotFoundException();
        }
        return $user;
    }
}
