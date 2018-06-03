<?php

namespace Api\SocialNetworks\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Social Network Not Found Exception Class.
 *
 */
class SocialNetworkNotFoundException extends NotFoundHttpException
{
    /**
     * SocialNetworkNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Rede social não encontrada.')
    {
        parent::__construct($message);
    }
}
