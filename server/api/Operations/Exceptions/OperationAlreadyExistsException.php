<?php

namespace Api\Operations\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Operation Not Found Exception Class.
 *
 */
class OperationAlreadyExistsException extends NotFoundHttpException
{
    /**
     * OperationNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Modo de operação já existe.')
    {
        parent::__construct($message);
    }
}
