<?php

namespace Api\Users\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * User Not Found Exception Class.
 *
 */
class UserNotFoundException extends NotFoundHttpException
{
    /**
     * UserNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Usuário não encontrado.')
    {
        parent::__construct($message);
    }
}
