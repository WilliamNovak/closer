<?php

namespace Api\Collections\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Collections\Repositories\CollectionRepository;
use Api\Collections\Services\CollectionService;
use Tymon\JWTAuth\Facades\JWTAuth;

/**
 * Collection Controller.
 *
 */
class CollectionController extends Controller
{

    /**
     *
     * @var Api\Collections\Repositories\CollectionRepository
     */
    private $collectionRepository;

    /**
     *
     * @var Api\Collections\Services\CollectionService
     */
    private $collectionService;

    /**
     * Collection Controller Class Constructor.
     *
     * @param Api\Collections\Repositories\CollectionRepository $collectionRepository
     * @param Api\Collections\Services\CollectionService $collectionService
     */
    public function __construct(CollectionRepository $collectionRepository, CollectionService $collectionService)
    {
        $this->collectionRepository = $collectionRepository;
        $this->collectionService = $collectionService;
    }

    /**
     * Get all collections.
     *
     * @return Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $collections = $this->collectionRepository->getAll();

        if (count($collections) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        $dataset = [];
        foreach($collections as $key => $collection) {
            /* get user and unset then to return only id and name */
            $user = $collection->user; unset($collection->user);
            $collection['user'] = ['id' => $user->id, 'name' => $user->name];
            $dataset[] = $collection;
        }

        return new JsonResponse([
            'collections' => $dataset
        ]);
    }

    /**
     * Get collection by id.
     *
     * @param int $collectionId
     * @return Illuminate\Http\JsonResponse
     */
    public function show($collectionId = 0)
    {
        $collection = $this->collectionService->getRequestedCollection($collectionId);
        $user = $collection->user; unset($collection->user);
        /* get user and unset then to return only id and name */
        $collection['user'] = ['id' => $user->id, 'name' => $user->name];
        return new JsonResponse([
            'collection' => $collection
        ]);
    }

    /**
     * Create collection.
     *
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->get('collection');
        $data['user_id'] = JWTAuth::parseToken()->authenticate()->id;
        $collection = $this->collectionRepository->create($data);
        return new JsonResponse([
            'collection' => $collection
        ], Response::HTTP_CREATED);
    }

    /**
     * Update collection by id.
     *
     * @param int $collectionId
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($collectionId = 0, Request $request)
    {
        $collection = $this->collectionService->getRequestedCollection($collectionId);
        $data = $request->get('collection');
        $collectionUpdated = $this->collectionRepository->update($collection, $data);

        if (!$collectionUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'collection' => $collectionUpdated
        ]);
    }

    /**
     * Delete collection by id.
     *
     * @param int $collectionId
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($collectionId = 0)
    {
        $collection = $this->collectionService->getRequestedCollection($collectionId);
        $collectionDeleted = $this->collectionRepository->delete($collection);

        if (!$collectionDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'collection' => []
        ]);
    }

}
