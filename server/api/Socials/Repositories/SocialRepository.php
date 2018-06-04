<?php

namespace Api\Socials\Repositories;

use Api\Socials\Models\Social;

class SocialRepository
{

    /**
     *
     * @var Api\Socials\Models\Social
     */
    private $social;

    /**
     * Social Repository Class Constructor.
     *
     * @param Api\Socials\Models\Social $social
     */
    public function __construct(Social $social)
    {
        $this->social = $social;
    }

    /**
     * Get all socials.
     *
     * @return Api\Socials\Models\Social
     */
    public function getAll()
    {
        return $this->social->where('id', '>', 0)->get();
    }

    /**
     * Get one social by id.
     *
     * @param int $socialId (defaut: 0)
     * @return Api\Socials\Models\Social
     */
    public function getById($socialId = 0)
    {
        return $this->social->where('id', $socialId)->first();
    }

    /**
     * Get one social by slug.
     *
     * @param string $slug (defaut: '')
     * @return Api\Socials\Models\Social
     */
    public function getBySlug($slug = '')
    {
        return $this->social->where('slug', $slug)->first();
    }

    /**
     * Create social.
     *
     * @return Api\Socials\Models\Social
     */
    public function create($data = [])
    {
        return $this->social->create($data);
    }

    /**
     * Update social by id.
     *
     * @param Api\Socials\Models\Social $social
     * @param array $data
     * @return Api\Socials\Models\Social
     */
    public function update(Social $social, $data = [])
    {
        $updated = $social->update($data);

        if ($updated) {
            return $this->getById($social->id);
        }

        return false;
    }

    /**
     * Delete social by id.
     *
     * @param Api\Socials\Models\Social $social
     * @return bool
     */
    public function delete(Social $social)
    {
        return $social->delete();
    }

}
