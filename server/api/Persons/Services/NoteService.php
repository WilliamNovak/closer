<?php

namespace Api\Persons\Services;

use App\Http\Services\Service;
use Api\Persons\Repositories\NoteRepository;
use Api\Persons\Exceptions\NoteNotFoundException;

/**
 * Custom Field Service.
 *
 */
class NoteService extends Service
{

    /**
     *
     * @var Api\Persons\Repositories\NoteRepository
     */
    private $noteRepository;

    /**
     * Custom Field Service Class Constructor.
     *
     * @param Api\Persons\Repositories\NoteRepository $noteRepository
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
     * @return Api\Persons\Models\Notes
     * @return Api\Persons\Exceptions\NoteNotFoundException;
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
