<?php

namespace Api\Persons\Services;

use App\Http\Services\Service;
use Api\Persons\Repositories\ChecklistRepository;
use Api\Persons\Exceptions\ChecklistNotFoundException;

/**
 * Person Checklists Service.
 *
 */
class ChecklistService extends Service
{

    /**
     *
     * @var Api\Persons\Repositories\ChecklistRepository
     */
    private $checklistRepository;

    /**
     * Person Checklists Service Class Constructor.
     *
     * @param Api\Persons\Repositories\ChecklistRepository $checklistRepository
     */
    public function __construct(ChecklistRepository $checklistRepository)
    {
        $this->checklistRepository = $checklistRepository;
    }

    /**
     * Get requested checklist by id.
     *
     * @param int $checklistId (default: 0)
     * @param bool $foundOrDie (default: true)
     * @return Api\Persons\Models\Checklists
     * @return Api\Persons\Exceptions\ChecklistNotFoundException;
     */
    public function getRequestedChecklist($checklistId = 0, $foundOrDie = true)
    {
        $checklist = $this->checklistRepository->getById($checklistId);

        if (is_null($checklist) && $foundOrDie === true) {
            throw new ChecklistNotFoundException();
        }

        if (is_null($checklist) && $foundOrDie === false) {
            return false;
        }

        return $checklist;
    }
}
