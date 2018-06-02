<?php

namespace Api\Stages\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Stage Already Exists Exception Class.
 *
 */
class StageAlreadyExistsException extends NotFoundHttpException
{
    /**
     * StageNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Etiqueta já existe.')
    {
        parent::__construct($message);
    }
}
