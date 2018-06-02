<?php

namespace Api\Customers\Repositories;

use Api\Customers\Models\Customer;
use Api\Customers\Models\CustomField;

class CustomFieldRepository
{

    /**
     *
     * @var Api\Customers\Models\CustomField
     */
    private $customField;

    /**
     * Custom Field Repository Class Constructor.
     *
     * @param Api\Customers\Models\CustomField $customField
     */
    public function __construct(CustomField $customField)
    {
        $this->customField = $customField;
    }

    /**
     * Get all custom fields.
     *
     * @return Api\Customers\Models\CustomField
     */
    public function getAll()
    {
        return $this->customField->where('id', '>', 0)->get();
    }

    /**
     * Get all custom fields.
     *
     * @param int $customerId
     * @return Api\Customers\Models\CustomField
     */
    public function getAllByCustomerId($customerId = 0)
    {
        return $this->customField->where('customer_id', $customerId)->get();
    }

    /**
     * Get one custom field by id.
     *
     * @param int $customFieldId
     * @return Api\Customers\Models\CustomField
     */
    public function getById($customFieldId = 0)
    {
        return $this->customField->where('id', $customFieldId)->first();
    }

    /**
     * Create custom field.
     * @param Api\Customers\Models\Customer $customer
     * @param array $data
     * @return Api\Customers\Models\CustomField
     */
    public function create(Customer $customer, $data = [])
    {
        $data['customer_id'] = $customer->id;
        return $this->customField->create($data);
    }

    /**
     * Update custom field by id.
     *
     * @param Api\Customers\Models\CustomField $customField
     * @param array $data
     * @return Api\Customers\Models\CustomField
     */
    public function update(CustomField $customField, $data = [])
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
     * @param Api\Customers\Models\CustomField $customField
     * @return bool
     */
    public function delete(CustomField $customField)
    {
        return $customField->delete();
    }

}
