<?php

namespace Api\Tags\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Tags\Repositories\TagRepository;
use Api\Tags\Exceptions\TagNotFoundException;
use Api\Tags\Exceptions\TagAlreadyExistsException;
use Cocur\Slugify\Slugify;

/**
 * Tag Controller.
 *
 */
class TagController extends Controller
{

    /**
     *
     * @var Api\Tags\Repositories\TagRepository
     */
    private $tagRepository;

    /**
     * Tag Controller Class Constructor.
     *
     * @param Api\Tags\Repositories\TagRepository $tagRepository
     */
    public function __construct(TagRepository $tagRepository)
    {
        $this->tagRepository = $tagRepository;
    }

    /**
     * Get all tags.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $tags = $this->tagRepository->getAll();

        if (count($tags) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'tags' => $tags
        ]);
    }

    /**
     * Get tag by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($identifier = null)
    {
        $tag = $this->getRequestedTag($identifier);
        return new JsonResponse([
            'tag' => $tag
        ]);
    }

    /**
     * Create tag.
     *
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->get('tag');
        $slugify = new Slugify();
        $slug = $slugify->slugify($data['name']);

        if ($this->tagRepository->getBySlug($slug)) {
            throw new TagAlreadyExistsException();
        }

        $data['slug'] = $slug;
        $tag = $this->tagRepository->create($data);

        return new JsonResponse([
            'tag' => $tag
        ], Response::HTTP_CREATED);
    }

    /**
     * Update tag by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($identifier = null, Request $request)
    {
        $tag = $this->getRequestedTag($identifier);
        $data = $request->get('tag');
        $tagUpdated = $this->tagRepository->update($tag, $data);

        if (!$tagUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'tag' => $tagUpdated
        ]);
    }

    /**
     * Delete tag by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($identifier = null)
    {
        $tag = $this->getRequestedTag($identifier);
        $tagDeleted = $this->tagRepository->delete($tag);

        if (!$tagDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'tag' => []
        ]);
    }

    /**
     * Get requested tag by id or slug name.
     *
     * @param mixed $identifier
     * @return Api\Tags\Models\Tag
     * @return Api\Tags\Exceptions\TagNotFoundException;
     */
    private function getRequestedTag($identifier = null)
    {
        $tag = ( $identifier > 0 ?
            $this->tagRepository->getById($identifier) :
            $this->tagRepository->getBySlug($identifier)
        );

        if (is_null($tag)) {
            throw new TagNotFoundException();
        }
        return $tag;
    }
}
