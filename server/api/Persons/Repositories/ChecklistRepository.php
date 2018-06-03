<?php

namespace Api\Persons\Repositories;

use Api\Persons\Models\Person;
use Api\Persons\Models\Checklists;

class ChecklistRepository
{

    /**
     *
     * @var Api\Persons\Models\Checklists
     */
    private $checklist;

    /**
     * Checklist Repository Class Constructor.
     *
     * @param Api\Persons\Models\Checklists $checklist
     */
    public function __construct(Checklists $checklist)
    {
        $this->checklist = $checklist;
    }

    /**
     * Get all checklists.
     *
     * @return Api\Persons\Models\Checklists
     */
    public function getAll()
    {
        return $this->checklist->where('id', '>', 0)->get();
    }

    /**
     * Get all checklists.
     *
     * @param int $personId
     * @return Api\Persons\Models\Checklists
     */
    public function getAllByPersonId($personId = 0)
    {
        return $this->checklist->where('person_id', $personId)->get();
    }

    /**
     * Get one checklist by id.
     *
     * @param int $checklistId
     * @return Api\Persons\Models\Checklists
     */
    public function getById($checklistId = 0)
    {
        return $this->checklist->where('id', $checklistId)->first();
    }

    /**
     * Create checklist.
     * @param Api\Persons\Models\Person $person
     * @param array $data
     * @return Api\Persons\Models\Checklists
     */
    public function create(Person $person, $data = [])
    {
        $data['person_id'] = $person->id;
        return $this->checklist->create($data);
    }

    /**
     * Update checklist by id.
     *
     * @param Api\Persons\Models\Checklists $checklist
     * @param array $data
     * @return Api\Persons\Models\Checklists
     */
    public function update(Checklists $checklist, $data = [])
    {
        $updated = $checklist->update($data);

        if ($updated) {
            return $this->getById($checklist->id);
        }

        return false;
    }

    /**
     * Delete checklist by id.
     *
     * @param Api\Persons\Models\Checklists $checklist
     * @return bool
     */
    public function delete(Checklists $checklist)
    {
        return $checklist->delete();
    }

}
