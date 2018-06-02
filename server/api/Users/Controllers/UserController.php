<?php

namespace Api\Users\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Users\Repositories\UserRepository;
use Api\Users\Repositories\RoleRepository;
use Api\Users\Services\UserService;
use Api\Users\Services\RoleService;

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
     * @var Api\Users\Services\UserService
     */
    private $userService;

    /**
     *
     * @var Api\Users\Repositories\UserRepository
     */
    private $roleRepository;

    /**
     *
     * @var Api\Users\Services\RoleService
     */
    private $roleService;

    /**
     * User Controller Class Constructor.
     *
     * @param Api\Users\Repositories\UserRepository $userRepository
     * @param Api\Users\Services\UserService $userService
     * @param Api\Users\Repositories\RoleRepository $roleRepository
     * * @param Api\Users\Services\RoleService $roleService
     */
    public function __construct(
        UserRepository $userRepository, UserService $userService,
        RoleRepository $roleRepository, RoleService $roleService)
    {
        $this->userRepository = $userRepository;
        $this->userService = $userService;
        $this->roleRepository = $roleRepository;
        $this->roleService = $roleService;
    }

    /**
     * Get all users.
     *
     * @return Illuminate\Http\JsonResponse
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
     * @param int $userId
     * @return Illuminate\Http\JsonResponse
     */
    public function show($userId = 0)
    {
        $user = $this->userService->getRequestedUser($userId);
        $user['role'] = $user->role;
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
        $user['role'] = $user->role;
        return new JsonResponse([
            'user' => $user
        ], Response::HTTP_CREATED);
    }

    /**
     * Update user by id.
     *
     * @param int $userId
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function update($userId = 0, Request $request)
    {
        $user = $this->userService->getRequestedUser($userId);
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
     * @param int $userId
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function updateRole($userId = 0, Request $request)
    {
        $user = $this->userService->getRequestedUser($userId);

        /* First, check if received role slug has exists. */
        $data = $request->get('role');
        $slug = $data['slug'];
        $role = $this->roleService->getRequestedRole($slug);

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
     * @param int $userId
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($userId = 0)
    {
        $user = $this->userService->getRequestedUser($userId);
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
     * @return Illuminate\Http\JsonResponse
     */
    public function checkEmail($email = null)
    {
        $found = $this->userRepository->getByEmail($email);
        return new JsonResponse([
            'avaiable' => is_null($found) ? true : false
        ]);
    }

}
