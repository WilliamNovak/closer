<?php

namespace Api\SocialNetworks\Repositories;

use Api\SocialNetworks\Models\SocialNetwork;

class SocialNetworkRepository
{

    /**
     *
     * @var Api\SocialNetworks\Models\SocialNetwork
     */
    private $socialnetwork;

    /**
     * Social Network Repository Class Constructor.
     *
     * @param Api\SocialNetworks\Models\SocialNetwork $socialnetwork
     */
    public function __construct(SocialNetwork $socialnetwork)
    {
        $this->socialnetwork = $socialnetwork;
    }

    /**
     * Get all social networks.
     *
     * @return Api\SocialNetworks\Models\SocialNetwork
     */
    public function getAll()
    {
        return $this->socialnetwork->where('id', '>', 0)->get();
    }

    /**
     * Get one social network by id.
     *
     * @param int $socialnetworkId (defaut: 0)
     * @return Api\SocialNetworks\Models\SocialNetwork
     */
    public function getById($socialnetworkId = 0)
    {
        return $this->socialnetwork->where('id', $socialnetworkId)->first();
    }

    /**
     * Get one social network by slug.
     *
     * @param string $slug (defaut: '')
     * @return Api\SocialNetworks\Models\SocialNetwork
     */
    public function getBySlug($slug = '')
    {
        return $this->socialnetwork->where('slug', $slug)->first();
    }

    /**
     * Create socialnetwork.
     *
     * @return Api\SocialNetworks\Models\SocialNetwork
     */
    public function create($data = [])
    {
        return $this->socialnetwork->create($data);
    }

    /**
     * Update social network by id.
     *
     * @param Api\SocialNetworks\Models\SocialNetwork $socialnetwork
     * @param array $data
     * @return Api\SocialNetworks\Models\SocialNetwork
     */
    public function update(SocialNetwork $socialnetwork, $data = [])
    {
        $updated = $socialnetwork->update($data);

        if ($updated) {
            return $this->getById($socialnetwork->id);
        }

        return false;
    }

    /**
     * Delete social network by id.
     *
     * @param Api\SocialNetworks\Models\SocialNetwork $socialnetwork
     * @return bool
     */
    public function delete(SocialNetwork $socialnetwork)
    {
        return $socialnetwork->delete();
    }

}
