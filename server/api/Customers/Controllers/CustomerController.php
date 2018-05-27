<?php

namespace Api\Customers\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Customers\Repositories\CustomerRepository;
use Api\Customers\Exceptions\CustomerNotFoundException;

class CustomerController extends Controller
{

    /**
     *
     * @var Api\Customers\Repositories\CustomerRepository
     */
    private $customerRepository;

    /**
     * Customer Controller Class Constructor.
     *
     * @param Api\Customers\Repositories\CustomerRepository $customerRepository
     */
    public function __construct(CustomerRepository $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }

    /**
     * Get all customers.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $customers = $this->customerRepository->getAll();

        if (count($customers) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'customers' => $customers
        ]);
    }

    /**
     * Get customer by id.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id = 0)
    {
        $customer = $this->getRequestedCustomer($id);
        return new JsonResponse([
            'customer' => $customer
        ]);
    }

    /**
     * Create customer.
     *
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->get('customer');
        $customer = $this->customerRepository->create($data);
        return new JsonResponse([
            'customer' => $customer
        ], Response::HTTP_CREATED);
    }

    /**
     * Update customer by id.
     *
     * @param int $id
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($id = 0, Request $request)
    {
        $customer = $this->getRequestedCustomer($id);
        $data = $request->get('customer');
        $customerUpdated = $this->customerRepository->update($customer, $data);

        if (!$customerUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'customer' => $customerUpdated
        ]);
    }

    /**
     * Get requested customer by id.
     *
     * @param int $customerId
     * @return Api\Customers\Models\Customer
     * @return Api\Customers\Exceptions\CustomerNotFoundException;
     */
    private function getRequestedCustomer($customerId = 0)
    {
        $customer = $this->customerRepository->getById($customerId);
        if (is_null($customer)) {
            throw new CustomerNotFoundException();
        }
        return $customer;
    }
}
