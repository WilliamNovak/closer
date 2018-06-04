<?php

namespace Api\Persons\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Custom Field Not Found Exception Class.
 *
 */
class CustomFieldNotFoundException extends NotFoundHttpException
{
    /**
     * CustomFieldNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Campo persinalizado não encontrado.')
    {
        parent::__construct($message);
    }
}
