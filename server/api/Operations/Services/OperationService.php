<?php

namespace Api\Operations\Services;

use App\Http\Services\Service;
use Api\Operations\Repositories\OperationRepository;
use Api\Operations\Exceptions\OperationNotFoundException;

/**
 * Operation Service.
 *
 */
class OperationService extends Service
{

    /**
     *
     * @var Api\Operations\Repositories\OperationRepository
     */
    private $operationRepository;

    /**
     * Operations Service Class Constructor.
     *
     * @param Api\Operations\Repositories\OperationRepository $operationRepository
     */
    public function __construct(OperationRepository $operationRepository)
    {
        $this->operationRepository = $operationRepository;
    }

    /**
     * Get requested operation by id or slug name.
     *
     * @param mixed $identifier
     * @param bool $foundOrDie (default: true)
     * @return Api\Operations\Models\Operation
     * @return Api\Operations\Exceptions\OperationNotFoundException;
     */
    public function getRequestedOperation($identifier = null, $foundOrDie = true)
    {
        $operation = ( $identifier > 0 ?
            $this->operationRepository->getById($identifier) :
            $this->operationRepository->getBySlug($identifier)
        );

        if (is_null($operation) && $foundOrDie === true) {
            throw new OperationNotFoundException();
        }

        if (is_null($operation) && $foundOrDie === false) {
            return false;
        }

        return $operation;
    }
}
