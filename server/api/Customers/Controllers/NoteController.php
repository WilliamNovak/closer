<?php

namespace Api\Customers\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Customers\Repositories\NoteRepository;
use Api\Customers\Controllers\CustomerController;
use Api\Customers\Services\CustomerService;
use Api\Customers\Services\NoteService;
use Tymon\JWTAuth\Facades\JWTAuth;

/**
 * Note Controller.
 *
 */
class NoteController extends Controller
{

    /**
     *
     * @var Api\Customers\Repositories\NoteRepository
     */
    private $noteRepository;

    /**
     *
     * @var Api\Customers\Services\CustomerService
     */
    private $customerService;

    /**
     *
     * @var Api\Customers\Services\NoteService
     */
    private $noteService;

    /**
     * Custom Field Controller Class Constructor.
     *
     * @param Api\Customers\Repositories\NoteRepository $noteRepository
     * @param Api\Customers\Services\NoteService $noteService
     * @param Api\Customers\Services\CustomerService $customerService
     */
    public function __construct(NoteRepository $noteRepository, NoteService $noteService, CustomerService $customerService)
    {
        $this->noteRepository = $noteRepository;
        $this->noteService = $noteService;
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
        $notes = $this->noteRepository->getAllByCustomerId($customer->id);

        if (count($notes) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'notes' => $notes
        ]);
    }

    /**
     * Get custom field by id.
     *
     * @param int $customerId
     * @param int $noteId
     * @return Illuminate\Http\JsonResponse
     */
    public function show($customerId = 0, $noteId = 0)
    {
        $customer = $this->customerService->getRequestedCustomer($customerId);
        $note = $this->noteService->getRequestedNote($customerId);
        /* get user and unset then to return only id and name */
        $user = $note->user; unset($note->user);
        $note['user'] = ['id' => $user->id, 'name' => $user->name];
        return new JsonResponse([
            'note' => $note
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
        $data = $request->get('note');
        $customer = $this->customerService->getRequestedCustomer($customerId);
        $data['user_id'] = JWTAuth::parseToken()->authenticate()->id;
        $note = $this->noteRepository->create($customer, $data);
        return new JsonResponse([
            'note' => $note
        ], Response::HTTP_CREATED);
    }

    /**
     * Update custom field by id.
     *
     * @param int $customerId (default: 0)
     * @param int $noteId (default: 0)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function update($customerId = 0, $noteId = 0, Request $request)
    {
        $data = $request->get('note');
        $customer = $this->customerService->getRequestedCustomer($customerId);
        $note = $this->noteService->getRequestedNote($noteId);
        $noteUpdated = $this->noteRepository->update($note, $data);

        if (!$noteUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'note' => $noteUpdated
        ]);
    }

    /**
     * Delete custom field by id.
     *
     * @param int $customerId (default: 0)
     * @param int $noteId (default: 0)
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($customerId = 0, $noteId = 0)
    {
        $customer = $this->customerService->getRequestedCustomer($customerId);
        $note = $this->noteService->getRequestedNote($noteId);
        $noteDeleted = $this->noteRepository->delete($note);

        if (!$noteDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'note' => []
        ]);
    }

}
