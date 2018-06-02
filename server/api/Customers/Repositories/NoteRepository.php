<?php

namespace Api\Customers\Repositories;

use Api\Customers\Models\Customer;
use Api\Customers\Models\Note;

class NoteRepository
{

    /**
     *
     * @var Api\Customers\Models\Note
     */
    private $note;

    /**
     * Note Repository Class Constructor.
     *
     * @param Api\Customers\Models\Note $note
     */
    public function __construct(Note $note)
    {
        $this->note = $note;
    }

    /**
     * Get all notes.
     *
     * @return Api\Customers\Models\Note
     */
    public function getAll()
    {
        return $this->note->where('id', '>', 0)->get();
    }

    /**
     * Get all notes.
     *
     * @param int $customerId
     * @return Api\Customers\Models\Note
     */
    public function getAllByCustomerId($customerId = 0)
    {
        return $this->note->where('customer_id', $customerId)->get();
    }

    /**
     * Get one note by id.
     *
     * @param int $noteId
     * @return Api\Customers\Models\Note
     */
    public function getById($noteId = 0)
    {
        return $this->note->where('id', $noteId)->first();
    }

    /**
     * Create note.
     * @param Api\Customers\Models\Customer $customer
     * @param array $data
     * @return Api\Customers\Models\Note
     */
    public function create(Customer $customer, $data = [])
    {
        $data['customer_id'] = $customer->id;
        return $this->note->create($data);
    }

    /**
     * Update note by id.
     *
     * @param Api\Customers\Models\Note $note
     * @param array $data
     * @return Api\Customers\Models\Note
     */
    public function update(Note $note, $data = [])
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
     * @param Api\Customers\Models\Note $note
     * @return bool
     */
    public function delete(Note $note)
    {
        return $note->delete();
    }

}
