<?php

namespace Api\Socials\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Social Already Exists Exception Class.
 *
 */
class SocialAlreadyExistsException extends NotFoundHttpException
{
    /**
     * SocialNotFoundException Class Constructor.
     * @param string $message
     */
    public function __construct($message = 'Rede social já existe.')
    {
        parent::__construct($message);
    }
}
