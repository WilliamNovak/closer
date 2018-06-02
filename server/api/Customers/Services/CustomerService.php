<?php

namespace Api\Customers\Services;

use App\Http\Services\Service;
use Api\Customers\Repositories\CustomerRepository;
use Api\Customers\Exceptions\CustomerNotFoundException;

/**
 * Customer Service.
 *
 */
class CustomerService extends Service
{

    /**
     *
     * @var Api\Customers\Repositories\CustomerRepository
     */
    private $customerRepository;

    /**
     * Customer Service Class Constructor.
     *
     * @param Api\Customers\Repositories\CustomerRepository $customerRepository
     */
    public function __construct(CustomerRepository $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }

    /**
     * Get requested customer by id.
     *
     * @param int $customerId (default: 0)
     * @param bool $foundOrDie (default: true)
     * @return Api\Customers\Models\Customer
     * @return Api\Customers\Exceptions\CustomerNotFoundException;
     */
    public function getRequestedCustomer($customerId = 0, $foundOrDie = true)
    {
        $customer = $this->customerRepository->getById($customerId);

        if (is_null($customer) && $foundOrDie === true) {
            throw new CustomerNotFoundException();
        }

        if (is_null($customer) && $foundOrDie === false) {
            return false;
        }

        return $customer;
    }
}
