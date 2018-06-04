<?php

namespace Api\Persons\Repositories;

use Api\Persons\Models\Person;
use Api\Persons\Models\Notes;

class NoteRepository
{

    /**
     *
     * @var Api\Persons\Models\Notes
     */
    private $note;

    /**
     * Note Repository Class Constructor.
     *
     * @param Api\Persons\Models\Notes $note
     */
    public function __construct(Notes $note)
    {
        $this->note = $note;
    }

    /**
     * Get all notes.
     *
     * @return Api\Persons\Models\Notes
     */
    public function getAll()
    {
        return $this->note->where('id', '>', 0)->get();
    }

    /**
     * Get all notes.
     *
     * @param int $personId
     * @return Api\Persons\Models\Notes
     */
    public function getAllByPersonId($personId = 0)
    {
        return $this->note->where('person_id', $personId)->get();
    }

    /**
     * Get one note by id.
     *
     * @param int $noteId
     * @return Api\Persons\Models\Notes
     */
    public function getById($noteId = 0)
    {
        return $this->note->where('id', $noteId)->first();
    }

    /**
     * Create note.
     * @param Api\Persons\Models\Person $person
     * @param array $data
     * @return Api\Persons\Models\Notes
     */
    public function create(Person $person, $data = [])
    {
        $data['person_id'] = $person->id;
        return $this->note->create($data);
    }

    /**
     * Update note by id.
     *
     * @param Api\Persons\Models\Notes $note
     * @param array $data
     * @return Api\Persons\Models\Notes
     */
    public function update(Notes $note, $data = [])
    {
        $updated = $note->update($data);

        if ($updated) {
            return $this->getById($note->id);
        }

        return false;
    }

    /**
     * Delete note by id.
     *
     * @param Api\Persons\Models\Notes $note
     * @return bool
     */
    public function delete(Notes $note)
    {
        return $note->delete();
    }

}
