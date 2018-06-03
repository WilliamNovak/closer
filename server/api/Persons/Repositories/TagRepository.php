<?php

namespace Api\Persons\Repositories;

use Api\Persons\Models\Person;
use Api\Persons\Models\Tags;

class TagRepository
{

    /**
     *
     * @var Api\Persons\Models\Tags
     */
    private $tag;

    /**
     * Tag Repository Class Constructor.
     *
     * @param Api\Persons\Models\Tags $tag
     */
    public function __construct(Tags $tag)
    {
        $this->tag = $tag;
    }

    /**
     * Get all tags.
     *
     * @param int $personId
     * @return Api\Persons\Models\Tags
     */
    public function getAllByPersonId($personId = 0)
    {
        return $this->tag->where('person_id', $personId)->get();
    }

    /**
     * Create tag.
     * @param Api\Persons\Models\Person $person
     * @param array $data
     * @return Api\Persons\Models\Tags
     */
    public function create(Person $person, $data = [])
    {
        $data['person_id'] = $person->id;
        return $this->tag->create($data);
    }

    /**
     * Delete tag by id.
     *
     * @param Api\Persons\Models\Tags $tag
     * @return bool
     */
    public function delete(Tags $tag)
    {
        return $tag->delete();
    }

    /**
     * Check if exists.
     *
     * @param Api\Persons\Models\Tags $tag
     * @return bool
     */
    public function check($tagId = 0, $personId = 0)
    {
        return $this->tag->where('tag_id', $tagId)->where('person_id', $personId)->first();
    }

}
