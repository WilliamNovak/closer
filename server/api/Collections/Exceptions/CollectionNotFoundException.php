<?php

namespace Api\Collections\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Collection Not Found Exception Class.
 *
 */
class CollectionNotFoundException extends NotFoundHttpException
{
    /**
     * CollectionNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Lista não encontrada.')
    {
        parent::__construct($message);
    }
}
