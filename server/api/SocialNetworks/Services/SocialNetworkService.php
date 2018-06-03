<?php

namespace Api\SocialNetworks\Services;

use App\Http\Services\Service;
use Api\SocialNetworks\Repositories\SocialNetworkRepository;
use Api\SocialNetworks\Exceptions\SocialNetworkNotFoundException;

/**
 * Social Network Service.
 *
 */
class SocialNetworkService extends Service
{

    /**
     *
     * @var Api\SocialNetworks\Repositories\SocialNetworkRepository
     */
    private $socialnetworkRepository;

    /**
     * Social Network Service Class Constructor.
     *
     * @param Api\SocialNetworks\Repositories\SocialNetworkRepository $socialnetworkRepository
     */
    public function __construct(SocialNetworkRepository $socialnetworkRepository)
    {
        $this->socialnetworkRepository = $socialnetworkRepository;
    }

    /**
     * Get requested social network by id or slug name.
     *
     * @param mixed $identifier
     * @param bool $foundOrDie (default: true)
     * @return Api\SocialNetworks\Models\SocialNetwork
     * @return Api\SocialNetworks\Exceptions\SocialNetworkNotFoundException;
     */
    public function getRequestedSocialNetwork($identifier = null, $foundOrDie = true)
    {
        $socialnetwork = ( $identifier > 0 ?
            $this->socialnetworkRepository->getById($identifier) :
            $this->socialnetworkRepository->getBySlug($identifier)
        );

        if (is_null($socialnetwork) && $foundOrDie === true) {
            throw new SocialNetworkNotFoundException();
        }

        if (is_null($socialnetwork) && $foundOrDie === false) {
            return false;
        }

        return $socialnetwork;
    }

}
