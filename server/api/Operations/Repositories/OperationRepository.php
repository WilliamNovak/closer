<?php

namespace Api\Operations\Repositories;

use Api\Operations\Models\Operation;

class OperationRepository
{

    /**
     *
     * @var Api\Operations\Models\Operation
     */
    private $operation;

    /**
     * Operation Repository Class Constructor.
     *
     * @param Api\Operations\Models\Operation $operation
     */
    public function __construct(Operation $operation)
    {
        $this->operation = $operation;
    }

    /**
     * Get all operations.
     *
     * @return Api\Operations\Models\Operation
     */
    public function getAll()
    {
        return $this->operation->where('id', '>', 0)->get();
    }

    /**
     * Get one operation by id.
     *
     * @param int $operationId (defaut: 0)
     * @return Api\Operations\Models\Operation
     */
    public function getById($operationId = 0)
    {
        return $this->operation->where('id', $operationId)->first();
    }

    /**
     * Get one operation by slug.
     *
     * @param string $slug (defaut: '')
     * @return Api\Operations\Models\Operation
     */
    public function getBySlug($slug = '')
    {
        return $this->operation->where('slug', $slug)->first();
    }

    /**
     * Create operation.
     *
     * @return Api\Operations\Models\Operation
     */
    public function create($data = [])
    {
        return $this->operation->create($data);
    }

    /**
     * Update operation by id.
     *
     * @param Api\Operations\Models\Operation $operation
     * @param array $data
     * @return Api\Operations\Models\Operation
     */
    public function update(Operation $operation, $data = [])
    {
        $updated = $operation->update($data);

        if ($updated) {
            return $this->getById($operation->id);
        }

        return false;
    }

    /**
     * Delete operation by id.
     *
     * @param Api\Operations\Models\Operation $operation
     * @return bool
     */
    public function delete(Operation $operation)
    {
        return $operation->delete();
    }

}
