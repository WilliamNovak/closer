<?php

namespace Api\Customers\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Customers\Repositories\CustomFieldRepository;
use Api\Customers\Controllers\CustomerController;
use Api\Customers\Services\CustomerService;
use Api\Customers\Services\CustomFieldService;

/**
 * CustomField Controller.
 *
 */
class CustomFieldController extends Controller
{

    /**
     *
     * @var Api\Customers\Repositories\CustomFieldRepository
     */
    private $customFieldRepository;

    /**
     *
     * @var Api\Customers\Services\CustomerService
     */
    private $customerService;

    /**
     *
     * @var Api\Customers\Services\CustomFieldService
     */
    private $customFieldService;

    /**
     * Custom Field Controller Class Constructor.
     *
     * @param Api\Customers\Repositories\CustomFieldRepository $customFieldRepository
     * @param Api\Customers\Services\CustomFieldService $customFieldService
     * @param Api\Customers\Services\CustomerService $customerService
     */
    public function __construct(CustomFieldRepository $customFieldRepository, CustomFieldService $customFieldService, CustomerService $customerService)
    {
        $this->customFieldRepository = $customFieldRepository;
        $this->customFieldService = $customFieldService;
        $this->customerService = $customerService;
    }

    /**
     * Get all custom fields.
     *
     * @param int $customerId
     * @return Illuminate\Http\JsonResponse
     */
    public function index($customerId = 0)
    {
        $customer = $this->customerService->getRequestedCustomer($customerId);
        $customFields = $this->customFieldRepository->getAllByCustomerId($customer->id);

        if (count($customFields) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'customFields' => $customFields
        ]);
    }

    /**
     * Get custom field by id.
     *
     * @param int $customerId
     * @param int $customFieldId
     * @return Illuminate\Http\JsonResponse
     */
    public function show($customerId = 0, $customFieldId = 0)
    {
        $customer = $this->customerService->getRequestedCustomer($customerId);
        $customField = $this->customFieldService->getRequestedCustomField($customerId);
        return new JsonResponse([
            'customField' => $customField
        ]);
    }

    /**
     * Create custom field.
     *
     * @param int $customerId (default: 0)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create($customerId = 0, Request $request)
    {
        $data = $request->get('customField');
        $customer = $this->customerService->getRequestedCustomer($customerId);
        $customField = $this->customFieldRepository->create($customer, $data);
        return new JsonResponse([
            'customField' => $customField
        ], Response::HTTP_CREATED);
    }

    /**
     * Update custom field by id.
     *
     * @param int $customerId (default: 0)
     * @param int $customFieldId (default: 0)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function update($customerId = 0, $customFieldId = 0, Request $request)
    {
        $data = $request->get('customField');
        $customer = $this->customerService->getRequestedCustomer($customerId);
        $customField = $this->customFieldService->getRequestedCustomField($customFieldId);
        $customFieldUpdated = $this->customFieldRepository->update($customField, $data);

        if (!$customFieldUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'customField' => $customFieldUpdated
        ]);
    }

    /**
     * Delete custom field by id.
     *
     * @param int $customerId (default: 0)
     * @param int $customFieldId (default: 0)
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($customerId = 0, $customFieldId = 0)
    {
        $customer = $this->customerService->getRequestedCustomer($customerId);
        $customField = $this->customFieldService->getRequestedCustomField($customFieldId);
        $customFieldDeleted = $this->customFieldRepository->delete($customField);

        if (!$customFieldDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'customField' => []
        ]);
    }

}
