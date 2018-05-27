<?php

namespace Api\Users\Repositories;

use App\User;

class UserRepository
{

    /**
     *
     * @var App\User
     */
    private $user;

    /**
     * User Repository Class Constructor.
     *
     * @param App\User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Get all users.
     *
     * @return App\User
     */
    public function getAll()
    {
        return $this->user->where('id', '>', 0)->get();
    }

    /**
     * Get one user by id.
     *
     * @param int $userId
     * @return App\User
     */
    public function getById($userId = 0)
    {
        return $this->user->where('id', $userId)->first();
    }

    /**
     * Get one user by email.
     *
     * @param string $email
     * @return App\User
     */
    public function getByEmail($email = null)
    {
        return $this->user->where('email', $email)->first();
    }

    /**
     * Create user.
     *
     * @return App\User
     */
    public function create($data = [])
    {
        return $this->user->create($data);
    }

    /**
     * Update user by id.
     *
     * @param App\User $user
     * @param array $data
     * @return App\User
     */
    public function update(User $user, $data = [])
    {
        $updated = $user->update($data);

        if ($updated) {
            return $this->getById($user->id);
        }

        return false;
    }

    /**
     * Delete user by id.
     *
     * @param App\User $user
     * @return bool
     */
    public function delete(User $user)
    {
        return $user->delete();
    }

}
