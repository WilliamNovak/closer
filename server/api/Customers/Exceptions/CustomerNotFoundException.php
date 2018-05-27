<?php

namespace Api\Customers\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Customer Not Found Exception Class.
 * 
 */
class CustomerNotFoundException extends NotFoundHttpException
{
    /**
     * CustomerNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Cliente não encontrado.')
    {
        parent::__construct($message);
    }
}
