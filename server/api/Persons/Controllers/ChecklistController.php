<?php

namespace Api\Persons\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Persons\Repositories\ChecklistRepository;
use Api\Persons\Services\PersonService;
use Api\Persons\Services\ChecklistService;
use Tymon\JWTAuth\Facades\JWTAuth;

/**
 * Checklist Controller.
 *
 */
class ChecklistController extends Controller
{

    /**
     *
     * @var Api\Persons\Repositories\ChecklistRepository
     */
    private $checklistRepository;

    /**
     *
     * @var Api\Persons\Services\PersonService
     */
    private $personService;

    /**
     *
     * @var Api\Persons\Services\ChecklistService
     */
    private $checklistService;

    /**
     * Checklist Controller Class Constructor.
     *
     * @param Api\Persons\Repositories\ChecklistRepository $checklistRepository
     * @param Api\Persons\Services\ChecklistService $checklistService
     * @param Api\Persons\Services\PersonService $personService
     */
    public function __construct(ChecklistRepository $checklistRepository, ChecklistService $checklistService, PersonService $personService)
    {
        $this->checklistRepository = $checklistRepository;
        $this->checklistService = $checklistService;
        $this->personService = $personService;
    }

    /**
     * Get all checklists.
     *
     * @param int $personId
     * @return Illuminate\Http\JsonResponse
     */
    public function index($personId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $checklists = $this->checklistRepository->getAllByPersonId($person->id);

        if (count($checklists) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'checklists' => $checklists
        ]);
    }

    /**
     * Get checklist by id.
     *
     * @param int $personId
     * @param int $checklistId
     * @return Illuminate\Http\JsonResponse
     */
    public function show($personId = 0, $checklistId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $checklist = $this->checklistService->getRequestedChecklist($personId);
        /* get user and unset then to return only id and name */
        $user = $checklist->user; unset($checklist->user);
        $checklist['user'] = ['id' => $user->id, 'name' => $user->name];
        return new JsonResponse([
            'checklist' => $checklist
        ]);
    }

    /**
     * Create checklist.
     *
     * @param int $personId (default: 0)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create($personId = 0, Request $request)
    {
        $data = $request->get('checklist');
        $person = $this->personService->getRequestedPerson($personId);
        $data['user_id'] = JWTAuth::parseToken()->authenticate()->id;
        $checklist = $this->checklistRepository->create($person, $data);
        return new JsonResponse([
            'checklist' => $checklist
        ], Response::HTTP_CREATED);
    }

    /**
     * Update checklist by id.
     *
     * @param int $personId (default: 0)
     * @param int $checklistId (default: 0)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function update($personId = 0, $checklistId = 0, Request $request)
    {
        $data = $request->get('checklist');
        $person = $this->personService->getRequestedPerson($personId);
        $checklist = $this->checklistService->getRequestedChecklist($checklistId);
        $checklistUpdated = $this->checklistRepository->update($checklist, $data);

        if (!$checklistUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'checklist' => $checklistUpdated
        ]);
    }

    /**
     * Delete checklist by id.
     *
     * @param int $personId (default: 0)
     * @param int $checklistId (default: 0)
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($personId = 0, $checklistId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $checklist = $this->checklistService->getRequestedChecklist($checklistId);
        $checklistDeleted = $this->checklistRepository->delete($checklist);

        if (!$checklistDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'checklist' => []
        ]);
    }

}
