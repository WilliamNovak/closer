<?php

namespace Api\SocialNetworks\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Social Network Already Exists Exception Class.
 *
 */
class SocialNetworkAlreadyExistsException extends NotFoundHttpException
{
    /**
     * SocialNetworkNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Rede social já existe.')
    {
        parent::__construct($message);
    }
}
