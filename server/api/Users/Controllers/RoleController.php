<?php

namespace Api\Users\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Users\Repositories\RoleRepository;
use Api\Users\Exceptions\RoleNotFoundException;
use Api\Users\Exceptions\RoleAlreadyExistsException;
use Cocur\Slugify\Slugify;

/**
 * Role Controller.
 *
 */
class RoleController extends Controller
{

    /**
     *
     * @var Api\Users\Repositories\RoleRepository
     */
    private $roleRepository;

    /**
     * Role Controller Class Constructor.
     *
     * @param Api\Users\Repositories\RoleRepository $roleRepository
     */
    public function __construct(RoleRepository $roleRepository)
    {
        $this->roleRepository = $roleRepository;
    }

    /**
     * Get all roles.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $roles = $this->roleRepository->getAll();

        if (count($roles) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'roles' => $roles
        ]);
    }

    /**
     * Get role by id or slug.
     *
     * @param mixed $role
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($role = 0)
    {
        $role = $this->getRequestedRole($role);
        return new JsonResponse([
            'role' => $role
        ]);
    }

    /**
     * Create role.
     *
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->get('role');
        $slugify = new Slugify();
        $slug = $slugify->slugify($data['name']);

        if ($this->roleRepository->getBySlug($slug)) {
            throw new RoleAlreadyExistsException();
        }

        $data['slug'] = $slug;
        $role = $this->roleRepository->create($data);

        return new JsonResponse([
            'role' => $role
        ], Response::HTTP_CREATED);
    }

    /**
     * Update role by id or slug.
     *
     * @param mixed $role
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($role = null, Request $request)
    {
        $role = $this->getRequestedRole($role);
        $data = $request->get('role');

        if (isset($data['slug'])) {
            unset($data['slug']);
        }

        $roleUpdated = $this->roleRepository->update($role, $data);

        if (!$roleUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'role' => $roleUpdated
        ]);
    }

    /**
     * Delete role by id or slug.
     *
     * @param mixed $role
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($role = null)
    {
        $role = $this->getRequestedRole($role);
        $roleDeleted = $this->roleRepository->delete($role);

        if (!$roleDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'role' => []
        ]);
    }

    /**
     * Get requested role by id or slug.
     *
     * @param mixed $role
     * @return Api\Users\Models\Role
     * @return Api\Users\Exceptions\RoleNotFoundException;
     */
    private function getRequestedRole($role = null)
    {

        $role = ( $role > 0 ?
            $this->roleRepository->getById($role) :
            $this->roleRepository->getBySlug($role)
        );

        if (is_null($role)) {
            throw new RoleNotFoundException();
        }
        return $role;
    }
}
