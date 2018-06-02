<?php

namespace Api\Customers\Services;

use App\Http\Services\Service;
use Api\Customers\Repositories\NoteRepository;
use Api\Customers\Exceptions\NoteNotFoundException;

/**
 * Custom Field Service.
 *
 */
class NoteService extends Service
{

    /**
     *
     * @var Api\Customers\Repositories\NoteRepository
     */
    private $noteRepository;

    /**
     * Custom Field Service Class Constructor.
     *
     * @param Api\Customers\Repositories\NoteRepository $noteRepository
     */
    public function __construct(NoteRepository $noteRepository)
    {
        $this->noteRepository = $noteRepository;
    }

    /**
     * Get requested note by id.
     *
     * @param int $noteId (default: 0)
     * @param bool $foundOrDie (default: true)
     * @return Api\Customers\Models\Note
     * @return Api\Customers\Exceptions\NoteNotFoundException;
     */
    public function getRequestedNote($noteId = 0, $foundOrDie = true)
    {
        $note = $this->noteRepository->getById($noteId);

        if (is_null($note) && $foundOrDie === true) {
            throw new NoteNotFoundException();
        }

        if (is_null($note) && $foundOrDie === false) {
            return false;
        }

        return $note;
    }
}
