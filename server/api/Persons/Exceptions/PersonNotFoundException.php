<?php

namespace Api\Persons\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Person Not Found Exception Class.
 *
 */
class PersonNotFoundException extends NotFoundHttpException
{
    /**
     * PersonNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Pessoa não encontrada.')
    {
        parent::__construct($message);
    }
}
