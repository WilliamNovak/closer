<?php

namespace Api\Persons\Repositories;

use Api\Persons\Models\Person;
use Api\Persons\Models\CustomFields;

class CustomFieldRepository
{

    /**
     *
     * @var Api\Persons\Models\CustomFields
     */
    private $customField;

    /**
     * Custom Field Repository Class Constructor.
     *
     * @param Api\Persons\Models\CustomFields $customField
     */
    public function __construct(CustomFields $customField)
    {
        $this->customField = $customField;
    }

    /**
     * Get all custom fields.
     *
     * @return Api\Persons\Models\CustomFields
     */
    public function getAll()
    {
        return $this->customField->where('id', '>', 0)->get();
    }

    /**
     * Get all custom fields.
     *
     * @param int $personId
     * @return Api\Persons\Models\CustomFields
     */
    public function getAllByPersonId($personId = 0)
    {
        return $this->customField->where('person_id', $personId)->get();
    }

    /**
     * Get one custom field by id.
     *
     * @param int $customFieldId
     * @return Api\Persons\Models\CustomFields
     */
    public function getById($customFieldId = 0)
    {
        return $this->customField->where('id', $customFieldId)->first();
    }

    /**
     * Create custom field.
     * @param Api\Persons\Models\Person $person
     * @param array $data
     * @return Api\Persons\Models\CustomFields
     */
    public function create(Person $person, $data = [])
    {
        $data['person_id'] = $person->id;
        return $this->customField->create($data);
    }

    /**
     * Update custom field by id.
     *
     * @param Api\Persons\Models\CustomFields $customField
     * @param array $data
     * @return Api\Persons\Models\CustomFields
     */
    public function update(CustomFields $customField, $data = [])
    {
        $updated = $customField->update($data);

        if ($updated) {
            return $this->getById($customField->id);
        }

        return false;
    }

    /**
     * Delete custom field by id.
     *
     * @param Api\Persons\Models\CustomFields $customField
     * @return bool
     */
    public function delete(CustomFields $customField)
    {
        return $customField->delete();
    }

}
