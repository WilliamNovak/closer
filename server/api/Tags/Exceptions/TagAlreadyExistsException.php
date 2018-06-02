<?php

namespace Api\Tags\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Tag Already Exists Exception Class.
 *
 */
class TagAlreadyExistsException extends NotFoundHttpException
{
    /**
     * TagNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Etiqueta já existe.')
    {
        parent::__construct($message);
    }
}
