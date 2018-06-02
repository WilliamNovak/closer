<?php

namespace Api\Customers\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Customers\Repositories\CustomerRepository;
use Api\Customers\Services\CustomerService;

/**
 * Customer Controller.
 *
 */
class CustomerController extends Controller
{

    /**
     *
     * @var Api\Customers\Repositories\CustomerRepository
     */
    private $customerRepository;

    /**
     *
     * @var Api\Customers\Services\CustomerService
     */
    private $customerService;

    /**
     * Customer Controller Class Constructor.
     *
     * @param Api\Customers\Repositories\CustomerRepository $customerRepository
     * @param Api\Customers\Services\CustomerService $customerService
     */
    public function __construct(CustomerRepository $customerRepository, CustomerService $customerService)
    {
        $this->customerRepository = $customerRepository;
        $this->customerService = $customerService;
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
        $customer = $this->customerService->getRequestedCustomer($id);
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
        $customer = $this->customerService->getRequestedCustomer($id);
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
     * Delete customer by id.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id = 0)
    {
        $customer = $this->customerService->getRequestedCustomer($id);
        $customerDeleted = $this->customerRepository->delete($customer);

        if (!$customerDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'customer' => []
        ]);
    }

}
