<?php

namespace Api\Sources\Services;

use App\Http\Services\Service;
use Api\Sources\Repositories\SourceRepository;
use Api\Sources\Exceptions\SourceNotFoundException;

/**
 * Source Service.
 *
 */
class SourceService extends Service
{

    /**
     *
     * @var Api\Sources\Repositories\SourceRepository
     */
    private $sourceRepository;

    /**
     * Sources Service Class Constructor.
     *
     * @param Api\Sources\Repositories\SourceRepository $sourceRepository
     */
    public function __construct(SourceRepository $sourceRepository)
    {
        $this->sourceRepository = $sourceRepository;
    }

    /**
     * Get requested source by id or slug name.
     *
     * @param mixed $identifier
     * @param bool $foundOrDie (default: true)
     * @return Api\Sources\Models\Source
     * @return Api\Sources\Exceptions\SourceNotFoundException;
     */
    public function getRequestedSource($identifier = null, $foundOrDie = true)
    {
        $source = ( $identifier > 0 ?
            $this->sourceRepository->getById($identifier) :
            $this->sourceRepository->getBySlug($identifier)
        );

        if (is_null($source) && $foundOrDie === true) {
            throw new SourceNotFoundException();
        }

        if (is_null($source) && $foundOrDie === false) {
            return false;
        }

        return $source;
    }
}
