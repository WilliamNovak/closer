<?php

namespace Api\Persons\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Checklist Not Found Exception Class.
 *
 */
class CheckistNotFoundException extends NotFoundHttpException
{
    /**
     * NoteNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Checklist não encontrado.')
    {
        parent::__construct($message);
    }
}
