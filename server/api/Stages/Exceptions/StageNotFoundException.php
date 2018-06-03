<?php

namespace Api\Stages\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Stage Not Found Exception Class.
 *
 */
class StageNotFoundException extends NotFoundHttpException
{
    /**
     * StageNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Estágio não encontrada.')
    {
        parent::__construct($message);
    }
}
