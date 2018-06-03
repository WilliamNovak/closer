<?php

namespace Api\Persons\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Persons\Repositories\NoteRepository;
use Api\Persons\Services\PersonService;
use Api\Persons\Services\NoteService;
use Tymon\JWTAuth\Facades\JWTAuth;

/**
 * Note Controller.
 *
 */
class NoteController extends Controller
{

    /**
     *
     * @var Api\Persons\Repositories\NoteRepository
     */
    private $noteRepository;

    /**
     *
     * @var Api\Persons\Services\PersonService
     */
    private $personService;

    /**
     *
     * @var Api\Persons\Services\NoteService
     */
    private $noteService;

    /**
     * Note Controller Class Constructor.
     *
     * @param Api\Persons\Repositories\NoteRepository $noteRepository
     * @param Api\Persons\Services\NoteService $noteService
     * @param Api\Persons\Services\PersonService $personService
     */
    public function __construct(NoteRepository $noteRepository, NoteService $noteService, PersonService $personService)
    {
        $this->noteRepository = $noteRepository;
        $this->noteService = $noteService;
        $this->personService = $personService;
    }

    /**
     * Get all notes.
     *
     * @param int $personId
     * @return Illuminate\Http\JsonResponse
     */
    public function index($personId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $notes = $this->noteRepository->getAllByPersonId($person->id);

        if (count($notes) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'notes' => $notes
        ]);
    }

    /**
     * Get note by id.
     *
     * @param int $personId
     * @param int $noteId
     * @return Illuminate\Http\JsonResponse
     */
    public function show($personId = 0, $noteId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $note = $this->noteService->getRequestedNote($personId);
        /* get user and unset then to return only id and name */
        $user = $note->user; unset($note->user);
        $note['user'] = ['id' => $user->id, 'name' => $user->name];
        return new JsonResponse([
            'note' => $note
        ]);
    }

    /**
     * Create note.
     *
     * @param int $personId (default: 0)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create($personId = 0, Request $request)
    {
        $data = $request->get('note');
        $person = $this->personService->getRequestedPerson($personId);
        $data['user_id'] = JWTAuth::parseToken()->authenticate()->id;
        $note = $this->noteRepository->create($person, $data);
        return new JsonResponse([
            'note' => $note
        ], Response::HTTP_CREATED);
    }

    /**
     * Update note by id.
     *
     * @param int $personId (default: 0)
     * @param int $noteId (default: 0)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function update($personId = 0, $noteId = 0, Request $request)
    {
        $data = $request->get('note');
        $person = $this->personService->getRequestedPerson($personId);
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
     * Delete note by id.
     *
     * @param int $personId (default: 0)
     * @param int $noteId (default: 0)
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($personId = 0, $noteId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
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
