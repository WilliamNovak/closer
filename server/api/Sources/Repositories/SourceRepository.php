<?php

namespace Api\Sources\Repositories;

use Api\Sources\Models\Source;

class SourceRepository
{

    /**
     *
     * @var Api\Sources\Models\Source
     */
    private $source;

    /**
     * Source Repository Class Constructor.
     *
     * @param Api\Sources\Models\Source $source
     */
    public function __construct(Source $source)
    {
        $this->source = $source;
    }

    /**
     * Get all sources.
     *
     * @return Api\Sources\Models\Source
     */
    public function getAll()
    {
        return $this->source->where('id', '>', 0)->get();
    }

    /**
     * Get one source by id.
     *
     * @param int $sourceId (defaut: 0)
     * @return Api\Sources\Models\Source
     */
    public function getById($sourceId = 0)
    {
        return $this->source->where('id', $sourceId)->first();
    }

    /**
     * Get one source by slug.
     *
     * @param string $slug (defaut: '')
     * @return Api\Sources\Models\Source
     */
    public function getBySlug($slug = '')
    {
        return $this->source->where('slug', $slug)->first();
    }

    /**
     * Create source.
     *
     * @return Api\Sources\Models\Source
     */
    public function create($data = [])
    {
        return $this->source->create($data);
    }

    /**
     * Update source by id.
     *
     * @param Api\Sources\Models\Source $source
     * @param array $data
     * @return Api\Sources\Models\Source
     */
    public function update(Source $source, $data = [])
    {
        $updated = $source->update($data);

        if ($updated) {
            return $this->getById($source->id);
        }

        return false;
    }

    /**
     * Delete source by id.
     *
     * @param Api\Sources\Models\Source $source
     * @return bool
     */
    public function delete(Source $source)
    {
        return $source->delete();
    }

}
