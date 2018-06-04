<?php

namespace Api\Stages\Repositories;

use Api\Stages\Models\Stage;

class StageRepository
{

    /**
     *
     * @var Api\Stages\Models\Stage
     */
    private $stage;

    /**
     * Stage Repository Class Constructor.
     *
     * @param Api\Stages\Models\Stage $stage
     */
    public function __construct(Stage $stage)
    {
        $this->stage = $stage;
    }

    /**
     * Get all stages.
     *
     * @return Api\Stages\Models\Stage
     */
    public function getAll()
    {
        return $this->stage->where('id', '>', 0)->get();
    }

    /**
     * Get one stage by id.
     *
     * @param int $stageId (defaut: 0)
     * @return Api\Stages\Models\Stage
     */
    public function getById($stageId = 0)
    {
        return $this->stage->where('id', $stageId)->first();
    }

    /**
     * Get one stage by slug.
     *
     * @param string $slug (defaut: '')
     * @return Api\Stages\Models\Stage
     */
    public function getBySlug($slug = '')
    {
        return $this->stage->where('slug', $slug)->first();
    }

    /**
     * Create stage.
     *
     * @return Api\Stages\Models\Stage
     */
    public function create($data = [])
    {
        return $this->stage->create($data);
    }

    /**
     * Update stage by id.
     *
     * @param Api\Stages\Models\Stage $stage
     * @param array $data
     * @return Api\Stages\Models\Stage
     */
    public function update(Stage $stage, $data = [])
    {
        $updated = $stage->update($data);

        if ($updated) {
            return $this->getById($stage->id);
        }

        return false;
    }

    /**
     * Delete stage by id.
     *
     * @param Api\Stages\Models\Stage $stage
     * @return bool
     */
    public function delete(Stage $stage)
    {
        return $stage->delete();
    }

}
