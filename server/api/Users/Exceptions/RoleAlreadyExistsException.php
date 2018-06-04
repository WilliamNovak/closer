<?php

namespace Api\Users\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Role Already Exists Exception Class.
 *
 */
class RoleAlreadyExistsException extends NotFoundHttpException
{
    /**
     * RoleNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Nível de permissão já existe.')
    {
        parent::__construct($message);
    }
}
