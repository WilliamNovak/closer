<?php

namespace Api\Customers\Services;

use App\Http\Services\Service;
use Api\Customers\Repositories\CustomFieldRepository;
use Api\Customers\Exceptions\CustomFieldNotFoundException;

/**
 * Custom Field Service.
 *
 */
class CustomFieldService extends Service
{

    /**
     *
     * @var Api\Customers\Repositories\CustomFieldRepository
     */
    private $customFieldRepository;

    /**
     * Custom Field Service Class Constructor.
     *
     * @param Api\Customers\Repositories\CustomFieldRepository $customFieldRepository
     */
    public function __construct(CustomFieldRepository $customFieldRepository)
    {
        $this->customFieldRepository = $customFieldRepository;
    }

    /**
     * Get requested customField by id.
     *
     * @param int $customFieldId (default: 0)
     * @param bool $foundOrDie (default: true)
     * @return Api\Customers\Models\CustomField
     * @return Api\Customers\Exceptions\CustomFieldNotFoundException;
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
