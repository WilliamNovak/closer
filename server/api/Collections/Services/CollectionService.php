<?php

namespace Api\Collections\Services;

use App\Http\Services\Service;
use Api\Collections\Repositories\CollectionRepository;
use Api\Collections\Exceptions\CollectionNotFoundException;

/**
 * Collection Service.
 *
 */
class CollectionService extends Service
{

    /**
     *
     * @var Api\Collections\Repositories\CollectionRepository
     */
    private $collectionRepository;

    /**
     * Collection Service Class Constructor.
     *
     * @param Api\Collections\Repositories\CollectionRepository $collectionRepository
     */
    public function __construct(CollectionRepository $collectionRepository)
    {
        $this->collectionRepository = $collectionRepository;
    }

    /**
     * Get requested collection by id.
     *
     * @param int $collectionId (default: 0)
     * @param bool $foundOrDie (default: true)
     * @return Api\Collections\Models\Collection
     * @return Api\Collections\Exceptions\CollectionNotFoundException;
     */
    public function getRequestedCollection($collectionId = 0, $foundOrDie = true)
    {
        $collection = $this->collectionRepository->getById($collectionId);

        if (is_null($collection) && $foundOrDie === true) {
            throw new CollectionNotFoundException();
        }

        if (is_null($collection) && $foundOrDie === false) {
            return false;
        }

        return $collection;
    }
}
