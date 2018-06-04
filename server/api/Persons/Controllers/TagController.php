<?php

namespace Api\Persons\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Persons\Repositories\TagRepository;
use Api\Persons\Services\PersonService;
use Api\Persons\Services\TagService;

/**
 * Person Tag Controller.
 *
 */
class TagController extends Controller
{

    /**
     *
     * @var Api\Persons\Repositories\TagRepository
     */
    private $tagRepository;

    /**
     *
     * @var Api\Persons\Services\PersonService
     */
    private $personService;

    /**
     *
     * @var Api\Persons\Services\TagService
     */
    private $tagService;

    /**
     * Person Tag Controller Class Constructor.
     *
     * @param Api\Persons\Repositories\TagRepository $tagRepository
     * @param Api\Persons\Services\TagService $tagService
     * @param Api\Persons\Services\PersonService $personService
     */
    public function __construct(TagRepository $tagRepository, TagService $tagService, PersonService $personService)
    {
        $this->tagRepository = $tagRepository;
        $this->tagService = $tagService;
        $this->personService = $personService;
    }

    /**
     * Get all person tag.
     *
     * @param int $personId
     * @return Illuminate\Http\JsonResponse
     */
    public function index($personId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $tags = $this->tagRepository->getAllByPersonId($person->id);

        if (count($tags) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'tags' => $tags
        ]);
    }

    /**
     * Create person tag.
     *
     * @param int $personId (default: 0)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create($personId = 0, Request $request)
    {
        $data = $request->get('tag');
        $tagId = $data['tag_id'];
        $person = $this->personService->getRequestedPerson($personId);
        $alreadyExists = $this->tagService->alreadyExists($tagId, $personId, true);
        $tag = $this->tagRepository->create($person, $data);

        return new JsonResponse([
            'tag' => $tag
        ], Response::HTTP_CREATED);
    }

    /**
     * Delete person tag by id.
     *
     * @param int $personId (default: 0)
     * @param int $tagId (default: 0)
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($personId = 0, $tagId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $alreadyExists = $this->tagRepository->check($tagId, $personId);

        if (is_null($alreadyExists)) {
            return new JsonResponse([], Response::HTTP_NOT_FOUND);
        }

        $tagDeleted = $this->tagRepository->delete($alreadyExists);

        if (!$tagDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'tag' => []
        ]);
    }

}
