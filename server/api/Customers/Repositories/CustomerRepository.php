<?php

namespace Api\Customers\Repositories;

use Api\Customers\Models\Customer;

class CustomerRepository
{

    /**
     *
     * @var Api\Customers\Models\Customer
     */
    private $customer;

    /**
     * Customer Repository Class Constructor.
     *
     * @param Api\Customers\Models\Customer $customer
     */
    public function __construct(Customer $customer)
    {
        $this->customer = $customer;
    }

    /**
     * Get all customers.
     *
     * @return Api\Customers\Models\Customer
     */
    public function getAll()
    {
        return $this->customer->where('id', '>', 0)->get();
    }

    /**
     * Get one customer by id.
     *
     * @param int $customerId
     * @return Api\Customers\Models\Customer
     */
    public function getById($customerId = 0)
    {
        return $this->customer->where('id', $customerId)->first();
    }

    /**
     * Create customer.
     *
     * @return Api\Customers\Models\Customer
     */
    public function create($data = [])
    {
        return $this->customer->create($data);
    }

    /**
     * Update customer by id.
     *
     * @param Api\Customers\Models\Customer $customer
     * @param array $data
     * @return Api\Customers\Models\Customer
     */
    public function update(Customer $customer, $data = [])
    {
        $updated = $customer->update($data);

        if ($updated) {
            return $this->getById($customer->id);
        }

        return false;
    }

    /**
     * Delete customer by id.
     *
     * @param Api\Customers\Models\Customer $customer
     * @return bool
     */
    public function delete(Customer $customer)
    {
        return $customer->delete();
    }

}
