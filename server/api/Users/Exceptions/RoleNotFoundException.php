<?php

namespace Api\Users\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Role Not Found Exception Class.
 *
 */
class RoleNotFoundException extends NotFoundHttpException
{
    /**
     * RoleNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Nível de permissão de usuário não encontrado.')
    {
        parent::__construct($message);
    }
}
