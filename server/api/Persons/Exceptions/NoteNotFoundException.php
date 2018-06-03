<?php

namespace Api\Persons\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Custom Field Not Found Exception Class.
 *
 */
class NoteNotFoundException extends NotFoundHttpException
{
    /**
     * NoteNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Nota não encontrado.')
    {
        parent::__construct($message);
    }
}
