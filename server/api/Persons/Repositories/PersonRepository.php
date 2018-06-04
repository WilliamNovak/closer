<?php

namespace Api\Persons\Repositories;

use Api\Persons\Models\Person;

class PersonRepository
{

    /**
     *
     * @var Api\Persons\Models\Person
     */
    private $person;

    /**
     * Person Repository Class Constructor.
     *
     * @param Api\Persons\Models\Person $person
     */
    public function __construct(Person $person)
    {
        $this->person = $person;
    }

    /**
     * Get all persons.
     *
     * @return Api\Persons\Models\Person
     */
    public function getAll()
    {
        return $this->person->where('id', '>', 0)->get();
    }

    /**
     * Get one person by id.
     *
     * @param int $personId
     * @return Api\Persons\Models\Person
     */
    public function getById($personId = 0)
    {
        return $this->person->where('id', $personId)->first();
    }

    /**
     * Create person.
     *
     * @return Api\Persons\Models\Person
     */
    public function create($data = [])
    {
        return $this->person->create($data);
    }

    /**
     * Update person by id.
     *
     * @param Api\Persons\Models\Person $person
     * @param array $data
     * @return Api\Persons\Models\Person
     */
    public function update(Person $person, $data = [])
    {
        $updated = $person->update($data);

        if ($updated) {
            return $this->getById($person->id);
        }

        return false;
    }

    /**
     * Delete person by id.
     *
     * @param Api\Persons\Models\Person $person
     * @return bool
     */
    public function delete(Person $person)
    {
        return $person->delete();
    }

}
