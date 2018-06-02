<?php

namespace Api\Operations\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Operation Not Found Exception Class.
 *
 */
class OperationNotFoundException extends NotFoundHttpException
{
    /**
     * OperationNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Modo de operação não encontrado.')
    {
        parent::__construct($message);
    }
}
