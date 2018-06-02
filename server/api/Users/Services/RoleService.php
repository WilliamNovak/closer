<?php

namespace Api\Users\Services;

use App\Http\Services\Service;
use Api\Users\Repositories\RoleRepository;
use Api\Users\Exceptions\RoleNotFoundException;

/**
 * Role Service.
 *
 */
class RoleService extends Service
{

    /**
     *
     * @var Api\Users\Repositories\RoleRepository
     */
    private $roleRepository;

    /**
     * Role Service Class Constructor.
     *
     * @param Api\Users\Repositories\RoleRepository $roleRepository
     */
    public function __construct(RoleRepository $roleRepository)
    {
        $this->roleRepository = $roleRepository;
    }

    /**
     * Get requested role by id.
     *
     * @param mixed $identifier (default: null)
     * @param bool $foundOrDie (default: true)
     * @return Api\Users\Models\Role
     * @return Api\Users\Exceptions\RoleNotFoundException;
     */
    public function getRequestedRole($identifier = null, $foundOrDie = true)
    {
        $role = ( $identifier > 0 ?
            $this->roleRepository->getById($identifier) :
            $this->roleRepository->getBySlug($identifier)
        );

        if (is_null($role) && $foundOrDie === true) {
            throw new RoleNotFoundException();
        }

        if (is_null($role) && $foundOrDie === false) {
            return false;
        }

        return $role;
    }
}
