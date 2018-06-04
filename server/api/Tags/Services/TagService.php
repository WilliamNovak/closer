<?php

namespace Api\Tags\Services;

use App\Http\Services\Service;
use Api\Tags\Repositories\TagRepository;
use Api\Tags\Exceptions\TagNotFoundException;

/**
 * Tag Service.
 *
 */
class TagService extends Service
{

    /**
     *
     * @var Api\Tags\Repositories\TagRepository
     */
    private $tagRepository;

    /**
     * Tag Service Class Constructor.
     *
     * @param Api\Tags\Repositories\TagRepository $tagRepository
     */
    public function __construct(TagRepository $tagRepository)
    {
        $this->tagRepository = $tagRepository;
    }

    /**
     * Get requested tag by id or slug name.
     *
     * @param mixed $identifier
     * @param bool $foundOrDie (default: true)
     * @return Api\Tags\Models\Tag
     * @return Api\Tags\Exceptions\TagNotFoundException;
     */
    public function getRequestedTag($identifier = null, $foundOrDie = true)
    {
        $tag = ( $identifier > 0 ?
            $this->tagRepository->getById($identifier) :
            $this->tagRepository->getBySlug($identifier)
        );

        if (is_null($tag) && $foundOrDie === true) {
            throw new TagNotFoundException();
        }

        if (is_null($tag) && $foundOrDie === false) {
            return false;
        }

        return $tag;
    }

}
