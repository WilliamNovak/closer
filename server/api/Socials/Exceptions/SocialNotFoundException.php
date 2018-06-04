<?php

namespace Api\Socials\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Social Not Found Exception Class.
 *
 */
class SocialNotFoundException extends NotFoundHttpException
{
    /**
     * SocialNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Rede social não encontrada.')
    {
        parent::__construct($message);
    }
}
