<?php

namespace Api\Tags\Repositories;

use Api\Tags\Models\Tag;

class TagRepository
{

    /**
     *
     * @var Api\Tags\Models\Tag
     */
    private $tag;

    /**
     * Tag Repository Class Constructor.
     *
     * @param Api\Tags\Models\Tag $tag
     */
    public function __construct(Tag $tag)
    {
        $this->tag = $tag;
    }

    /**
     * Get all tags.
     *
     * @return Api\Tags\Models\Tag
     */
    public function getAll()
    {
        return $this->tag->where('id', '>', 0)->get();
    }

    /**
     * Get one tag by id.
     *
     * @param int $tagId (defaut: 0)
     * @return Api\Tags\Models\Tag
     */
    public function getById($tagId = 0)
    {
        return $this->tag->where('id', $tagId)->first();
    }

    /**
     * Get one tag by slug.
     *
     * @param string $slug (defaut: '')
     * @return Api\Tags\Models\Tag
     */
    public function getBySlug($slug = '')
    {
        return $this->tag->where('slug', $slug)->first();
    }

    /**
     * Create tag.
     *
     * @return Api\Tags\Models\Tag
     */
    public function create($data = [])
    {
        return $this->tag->create($data);
    }

    /**
     * Update tag by id.
     *
     * @param Api\Tags\Models\Tag $tag
     * @param array $data
     * @return Api\Tags\Models\Tag
     */
    public function update(Tag $tag, $data = [])
    {
        $updated = $tag->update($data);

        if ($updated) {
            return $this->getById($tag->id);
        }

        return false;
    }

    /**
     * Delete tag by id.
     *
     * @param Api\Tags\Models\Tag $tag
     * @return bool
     */
    public function delete(Tag $tag)
    {
        return $tag->delete();
    }

}
