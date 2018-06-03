<?php

namespace Api\Persons\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Tag Already Attached Exception Class.
 *
 */
class TagAlreadyAttachedException extends NotFoundHttpException
{
    /**
     * TagAlreadyAttachedException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Essa palavra-chave já está associada a este cliente.')
    {
        parent::__construct($message);
    }
}
