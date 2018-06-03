<?php

namespace Api\Persons\Services;

use App\Http\Services\Service;
use Api\Persons\Repositories\CustomFieldRepository;
use Api\Persons\Exceptions\CustomFieldNotFoundException;

/**
 * Custom Field Service.
 *
 */
class CustomFieldService extends Service
{

    /**
     *
     * @var Api\Persons\Repositories\CustomFieldRepository
     */
    private $customFieldRepository;

    /**
     * Custom Field Service Class Constructor.
     *
     * @param Api\Persons\Repositories\CustomFieldRepository $customFieldRepository
     */
    public function __construct(CustomFieldRepository $customFieldRepository)
    {
        $this->customFieldRepository = $customFieldRepository;
    }

    /**
     * Get requested custom field by id.
     *
     * @param int $customFieldId (default: 0)
     * @param bool $foundOrDie (default: true)
     * @return Api\Persons\Models\CustomField
     * @return Api\Persons\Exceptions\CustomFieldNotFoundException;
     */
    public function getRequestedCustomField($customFieldId = 0, $foundOrDie = true)
    {
        $customField = $this->customFieldRepository->getById($customFieldId);

        if (is_null($customField) && $foundOrDie === true) {
            throw new CustomFieldNotFoundException();
        }

        if (is_null($customField) && $foundOrDie === false) {
            return false;
        }

        return $customField;
    }
}
