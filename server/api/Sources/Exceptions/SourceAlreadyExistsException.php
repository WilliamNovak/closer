<?php

namespace Api\Sources\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Source Already Exists Exception Class.
 *
 */
class SourceAlreadyExistsException extends NotFoundHttpException
{
    /**
     * SourceNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Etiqueta já existe.')
    {
        parent::__construct($message);
    }
}
