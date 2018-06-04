<?php

namespace Api\Users\Services;

use App\Http\Services\Service;
use Api\Users\Repositories\UserRepository;
use Api\Users\Exceptions\UserNotFoundException;

/**
 * User Service.
 *
 */
class UserService extends Service
{

    /**
     *
     * @var Api\Users\Repositories\UserRepository
     */
    private $userRepository;

    /**
     * User Service Class Constructor.
     *
     * @param Api\Users\Repositories\UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Get requested user by id.
     *
     * @param int $userId (default: 0)
     * @param bool $foundOrDie (default: true)
     * @return Api\Users\Models\User
     * @return Api\Users\Exceptions\UserNotFoundException;
     */
    public function getRequestedUser($userId = 0, $foundOrDie = true)
    {
        $user = $this->userRepository->getById($userId);

        if (is_null($user) && $foundOrDie === true) {
            throw new UserNotFoundException();
        }

        if (is_null($user) && $foundOrDie === false) {
            return false;
        }

        return $user;
    }
}
