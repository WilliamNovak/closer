<?php

namespace Api\Persons\Services;

use App\Http\Services\Service;
use Api\Persons\Repositories\TagRepository;
use Api\Persons\Exceptions\TagAlreadyAttachedException;

/**
 * Person Tag Service.
 *
 */
class TagService extends Service
{

    /**
     *
     * @var Api\Persons\Repositories\TagRepository
     */
    private $tagRepository;

    /**
     * Person Tag Service Class Constructor.
     *
     * @param Api\Persons\Repositories\TagRepository $tagRepository
     */
    public function __construct(TagRepository $tagRepository)
    {
        $this->tagRepository = $tagRepository;
    }

    /**
     * Check if tag already associated with person.
     *
     * @param int $tagId (default: 0)
     * @param int $personId (default: 0)
     * @param bool $foundOrDie (default: true)
     * @return Api\Persons\Models\Tags
     * @return bool
     * @return Api\Persons\Exceptions\TagAlreadyAttachedException;
     */
    public function alreadyExists($tagId = 0, $personId = 0, $foundOrDie = true)
    {
        $alreadyExists = $this->tagRepository->check($tagId, $personId);

        if (!is_null($alreadyExists) && $foundOrDie === true) {
            throw new TagAlreadyAttachedException();
        }

        if (!is_null($alreadyExists) && $foundOrDie === false) {
            return false;
        }

        return $alreadyExists;
    }
}
