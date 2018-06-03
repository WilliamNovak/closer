<?php

namespace Api\Persons\Services;

use App\Http\Services\Service;
use Api\Persons\Repositories\PersonRepository;
use Api\Persons\Exceptions\PersonNotFoundException;

/**
 * Person Service.
 *
 */
class PersonService extends Service
{

    /**
     *
     * @var Api\Persons\Repositories\PersonRepository
     */
    private $personRepository;

    /**
     * Person Service Class Constructor.
     *
     * @param Api\Persons\Repositories\PersonRepository $personRepository
     */
    public function __construct(PersonRepository $personRepository)
    {
        $this->personRepository = $personRepository;
    }

    /**
     * Get requested person by id.
     *
     * @param int $personId (default: 0)
     * @param bool $foundOrDie (default: true)
     * @return Api\Persons\Models\Person
     * @return Api\Persons\Exceptions\PersonNotFoundException;
     */
    public function getRequestedPerson($personId = 0, $foundOrDie = true)
    {
        $person = $this->personRepository->getById($personId);

        if (is_null($person) && $foundOrDie === true) {
            throw new PersonNotFoundException();
        }

        if (is_null($person) && $foundOrDie === false) {
            return false;
        }

        return $person;
    }
}
