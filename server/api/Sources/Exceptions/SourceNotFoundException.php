<?php

namespace Api\Sources\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Source Not Found Exception Class.
 *
 */
class SourceNotFoundException extends NotFoundHttpException
{
    /**
     * SourceNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Origem não encontrada.')
    {
        parent::__construct($message);
    }
}
