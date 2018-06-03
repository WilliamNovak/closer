<?php

namespace Api\Persons\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Persons\Repositories\CustomFieldRepository;
use Api\Persons\Services\PersonService;
use Api\Persons\Services\CustomFieldService;

/**
 * CustomField Controller.
 *
 */
class CustomFieldController extends Controller
{

    /**
     *
     * @var Api\Persons\Repositories\CustomFieldRepository
     */
    private $customFieldRepository;

    /**
     *
     * @var Api\Persons\Services\PersonService
     */
    private $personService;

    /**
     *
     * @var Api\Persons\Services\CustomFieldService
     */
    private $customFieldService;

    /**
     * Custom Field Controller Class Constructor.
     *
     * @param Api\Persons\Repositories\CustomFieldRepository $customFieldRepository
     * @param Api\Persons\Services\CustomFieldService $customFieldService
     * @param Api\Persons\Services\PersonService $personService
     */
    public function __construct(CustomFieldRepository $customFieldRepository, CustomFieldService $customFieldService, PersonService $personService)
    {
        $this->customFieldRepository = $customFieldRepository;
        $this->customFieldService = $customFieldService;
        $this->personService = $personService;
    }

    /**
     * Get all custom fields.
     *
     * @param int $personId
     * @return Illuminate\Http\JsonResponse
     */
    public function index($personId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $customFields = $this->customFieldRepository->getAllByPersonId($person->id);

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
     * @param int $personId
     * @param int $customFieldId
     * @return Illuminate\Http\JsonResponse
     */
    public function show($personId = 0, $customFieldId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $customField = $this->customFieldService->getRequestedCustomField($personId);
        return new JsonResponse([
            'customField' => $customField
        ]);
    }

    /**
     * Create custom field.
     *
     * @param int $personId (default: 0)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create($personId = 0, Request $request)
    {
        $data = $request->get('customField');
        $person = $this->personService->getRequestedPerson($personId);
        $customField = $this->customFieldRepository->create($person, $data);
        return new JsonResponse([
            'customField' => $customField
        ], Response::HTTP_CREATED);
    }

    /**
     * Update custom field by id.
     *
     * @param int $personId (default: 0)
     * @param int $customFieldId (default: 0)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function update($personId = 0, $customFieldId = 0, Request $request)
    {
        $data = $request->get('customField');
        $person = $this->personService->getRequestedPerson($personId);
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
     * @param int $personId (default: 0)
     * @param int $customFieldId (default: 0)
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($personId = 0, $customFieldId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
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
