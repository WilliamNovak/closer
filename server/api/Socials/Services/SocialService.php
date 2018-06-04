<?php

namespace Api\Socials\Services;

use App\Http\Services\Service;
use Api\Socials\Repositories\SocialRepository;
use Api\Socials\Exceptions\SocialNotFoundException;

/**
 * Social Service.
 *
 */
class SocialService extends Service
{

    /**
     *
     * @var Api\Socials\Repositories\SocialRepository
     */
    private $socialRepository;

    /**
     * Socials Service Class Constructor.
     *
     * @param Api\Socials\Repositories\SocialRepository $socialRepository
     */
    public function __construct(SocialRepository $socialRepository)
    {
        $this->socialRepository = $socialRepository;
    }

    /**
     * Get requested social by id or slug name.
     *
     * @param mixed $identifier
     * @param bool $foundOrDie (default: true)
     * @return Api\Socials\Models\Social
     * @return Api\Socials\Exceptions\SocialNotFoundException;
     */
    public function getRequestedSocial($identifier = null, $foundOrDie = true)
    {
        $social = ( $identifier > 0 ?
            $this->socialRepository->getById($identifier) :
            $this->socialRepository->getBySlug($identifier)
        );

        if (is_null($social) && $foundOrDie === true) {
            throw new SocialNotFoundException();
        }

        if (is_null($social) && $foundOrDie === false) {
            return false;
        }

        return $social;
    }
}
