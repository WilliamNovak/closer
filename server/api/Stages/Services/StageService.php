<?php

namespace Api\Stages\Services;

use App\Http\Services\Service;
use Api\Stages\Repositories\StageRepository;
use Api\Stages\Exceptions\StageNotFoundException;

/**
 * Stage Service.
 *
 */
class StageService extends Service
{

    /**
     *
     * @var Api\Stages\Repositories\StageRepository
     */
    private $stageRepository;

    /**
     * Stages Service Class Constructor.
     *
     * @param Api\Stages\Repositories\StageRepository $stageRepository
     */
    public function __construct(StageRepository $stageRepository)
    {
        $this->stageRepository = $stageRepository;
    }

    /**
     * Get requested stage by id or slug name.
     *
     * @param mixed $identifier
     * @param bool $foundOrDie (default: true)
     * @return Api\Stages\Models\Stage
     * @return Api\Stages\Exceptions\StageNotFoundException;
     */
    public function getRequestedStage($identifier = null, $foundOrDie = true)
    {
        $stage = ( $identifier > 0 ?
            $this->stageRepository->getById($identifier) :
            $this->stageRepository->getBySlug($identifier)
        );

        if (is_null($stage) && $foundOrDie === true) {
            throw new StageNotFoundException();
        }

        if (is_null($stage) && $foundOrDie === false) {
            return false;
        }

        return $stage;
    }
}
