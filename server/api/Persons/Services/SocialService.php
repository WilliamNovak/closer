<?php

namespace Api\Persons\Services;

use App\Http\Services\Service;
use Api\Persons\Repositories\SocialRepository;
use Api\Persons\Exceptions\SocialNotFoundException;

/**
 * Person Socials Service.
 *
 */
class SocialService extends Service
{

    /**
     *
     * @var Api\Persons\Repositories\SocialRepository
     */
    private $socialRepository;

    /**
     * Person Socials Service Class Constructor.
     *
     * @param Api\Persons\Repositories\SocialRepository $socialRepository
     */
    public function __construct(SocialRepository $socialRepository)
    {
        $this->socialRepository = $socialRepository;
    }

    /**
     * Get requested person social network by id.
     *
     * @param int $socialId (default: 0)
     * @param bool $foundOrDie (default: true)
     * @return Api\Persons\Models\Socials
     * @return Api\Persons\Exceptions\SocialNotFoundException;
     */
    public function getRequestedSocial($socialId = 0, $foundOrDie = true)
    {
        $social = $this->socialRepository->getById($socialId);

        if (is_null($social) && $foundOrDie === true) {
            throw new SocialNotFoundException();
        }

        if (is_null($social) && $foundOrDie === false) {
            return false;
        }

        return $social;
    }
}
