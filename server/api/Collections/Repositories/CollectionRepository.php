<?php

namespace Api\Collections\Repositories;

use Api\Collections\Models\Collection;

class CollectionRepository
{

    /**
     *
     * @var Api\Collections\Models\Collection
     */
    private $collection;

    /**
     * Collection Repository Class Constructor.
     *
     * @param Api\Collections\Models\Collection $collection
     */
    public function __construct(Collection $collection)
    {
        $this->collection = $collection;
    }

    /**
     * Get all collections.
     *
     * @return Api\Collections\Models\Collection
     */
    public function getAll()
    {
        return $this->collection->where('id', '>', 0)->get();
    }

    /**
     * Get one collection by id.
     *
     * @param int $collectionId
     * @return Api\Collections\Models\Collection
     */
    public function getById($collectionId = 0)
    {
        return $this->collection->where('id', $collectionId)->first();
    }

    /**
     * Create collection.
     *
     * @return Api\Collections\Models\Collection
     */
    public function create($data = [])
    {
        return $this->collection->create($data);
    }

    /**
     * Update collection by id.
     *
     * @param Api\Collections\Models\Collection $collection
     * @param array $data
     * @return Api\Collections\Models\Collection
     */
    public function update(Collection $collection, $data = [])
    {
        $updated = $collection->update($data);

        if ($updated) {
            return $this->getById($collection->id);
        }

        return false;
    }

    /**
     * Delete collection by id.
     *
     * @param Api\Collections\Models\Collection $collection
     * @return bool
     */
    public function delete(Collection $collection)
    {
        return $collection->delete();
    }

}
