<?php

namespace Api\Tags\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Tag Not Found Exception Class.
 *
 */
class TagNotFoundException extends NotFoundHttpException
{
    /**
     * TagNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Etiqueta não encontrada.')
    {
        parent::__construct($message);
    }
}
