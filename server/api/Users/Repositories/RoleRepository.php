<?php

namespace Api\Users\Repositories;

use Api\Users\Models\Role;

class RoleRepository
{

    /**
     *
     * @var Api\Users\Models\Role
     */
    private $role;

    /**
     * Role Repository Class Constructor.
     *
     * @param Api\Users\Models\Role $role
     */
    public function __construct(Role $role)
    {
        $this->role = $role;
    }

    /**
     * Get all roles.
     *
     * @return Api\Users\Models\Role
     */
    public function getAll()
    {
        return $this->role->where('id', '>', 0)->get();
    }

    /**
     * Get one role by id.
     *
     * @param int $roleId
     * @return Api\Users\Models\Role
     */
    public function getById($roleId = 0)
    {
        return $this->role->where('id', $roleId)->first();
    }

    /**
     * Get one role by slug.
     *
     * @param string $slug
     * @return Api\Users\Models\Role
     */
    public function getBySlug($slug = '')
    {
        return $this->role->where('slug', $slug)->first();
    }

    /**
     * Create role.
     *
     * @return Api\Users\Models\Role
     */
    public function create($data = [])
    {
        return $this->role->create($data);
    }

    /**
     * Update role by id.
     *
     * @param Api\Users\Models\Role $role
     * @param array $data
     * @return Api\Users\Models\Role
     */
    public function update(Role $role, $data = [])
    {
        $updated = $role->update($data);

        if ($updated) {
            return $this->getById($role->id);
        }

        return false;
    }

    /**
     * Delete role by id.
     *
     * @param Api\Users\Models\Role $role
     * @return bool
     */
    public function delete(Role $role)
    {
        return $role->delete();
    }

}
