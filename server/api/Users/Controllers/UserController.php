<?php

namespace Api\Users\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Users\Repositories\UserRepository;
use Api\Users\Repositories\RoleRepository;
use Api\Users\Exceptions\UserNotFoundException;
use Api\Users\Exceptions\RoleNotFoundException;

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
     *
     * @var Api\Users\Repositories\UserRepository
     */
    private $roleRepository;

    /**
     * User Controller Class Constructor.
     *
     * @param Api\Users\Repositories\UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository, RoleRepository $roleRepository)
    {
        $this->userRepository = $userRepository;
        $this->roleRepository = $roleRepository;
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
     * Update user role by user id.
     *
     * @param int $id
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateRole($id = 0, Request $request)
    {
        $user = $this->getRequestedUser($id);

        /* First, check if received role slug has exists. */
        $data = $request->get('role');
        $slug = $data['slug'];
        $role = $this->roleRepository->getBySlug($slug);
        if (!$role) {
            throw new RoleNotFoundException();
        }

        $userUpdated = $this->userRepository->updateRole($user, $role);

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
     * Check available e-mail.
     *
     * @param string $email
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkEmail($email = null)
    {
        $found = $this->userRepository->getByEmail($email);
        return new JsonResponse([
            'avaiable' => is_null($found) ? true : false
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
