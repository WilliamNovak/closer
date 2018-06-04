<?php

namespace Api\Persons\Repositories;

use Api\Persons\Models\Person;
use Api\Persons\Models\Socials;

class SocialRepository
{

    /**
     *
     * @var Api\Persons\Models\Socials
     */
    private $social;

    /**
     * Social Repository Class Constructor.
     *
     * @param Api\Persons\Models\Socials $social
     */
    public function __construct(Socials $social)
    {
        $this->social = $social;
    }

    /**
     * Get all socials.
     *
     * @return Api\Persons\Models\Socials
     */
    public function getAll()
    {
        return $this->social->where('id', '>', 0)->with('social')->get();
    }

    /**
     * Get all socials.
     *
     * @param int $personId
     * @return Api\Persons\Models\Socials
     */
    public function getAllByPersonId($personId = 0)
    {
        return $this->social->where('person_id', $personId)->with('social')->get();
    }

    /**
     * Get one social by id.
     *
     * @param int $socialId
     * @return Api\Persons\Models\Socials
     */
    public function getById($socialId = 0)
    {
        return $this->social->where('id', $socialId)->with('social')->first();
    }

    /**
     * Create social.
     * @param Api\Persons\Models\Person $person
     * @param array $data
     * @return Api\Persons\Models\Socials
     */
    public function create(Person $person, $data = [])
    {
        $data['person_id'] = $person->id;
        return $this->social->create($data);
    }

    /**
     * Update social by id.
     *
     * @param Api\Persons\Models\Socials $social
     * @param array $data
     * @return Api\Persons\Models\Socials
     */
    public function update(Socials $social, $data = [])
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
     * @param Api\Persons\Models\Socials $social
     * @return bool
     */
    public function delete(Socials $social)
    {
        return $social->delete();
    }

}
