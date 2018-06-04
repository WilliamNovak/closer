<?php

namespace Api\Persons\Repositories;

use Api\Persons\Models\Person;
use Api\Persons\Models\Logs;
use Tymon\JWTAuth\Facades\JWTAuth;

class ChecklistHasCreated
{

    /**
     *
     * @var Api\Persons\Models\Logs
     */
    private $logs;

    /**
     * Person Log Repository Class Constructor.
     *
     * @param Api\Persons\Models\Logs $logs
     */
    public function __construct(Logs $logs)
    {
        $this->logs = $logs;
    }

    /**
     * Create logs.
     *
     * @param Api\Persons\Models\Person $person
     * @return Api\Persons\Models\Logs
     */
    public function registry(Person $person)
    {
        $logData = [
            'person_id' => $person->id,
            'user_id' => JWTAuth::parseToken()->authenticate()->id
        ];

        return $this->logs->create($logData);
    }

}
