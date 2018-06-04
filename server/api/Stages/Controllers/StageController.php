<?php

namespace Api\Stages\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Stages\Repositories\StageRepository;
use Api\Stages\Services\StageService;
use Api\Stages\Exceptions\StageAlreadyExistsException;
use Cocur\Slugify\Slugify;

/**
 * Stage Controller.
 *
 */
class StageController extends Controller
{

    /**
     *
     * @var Api\Stages\Repositories\StageRepository
     */
    private $stageRepository;

    /**
     *
     * @var Api\Stages\Services\StageService
     */
    private $stageService;

    /**
     * Stage Controller Class Constructor.
     *
     * @param Api\Stages\Repositories\StageRepository $stageRepository
     * @param Api\Stages\Services\StageService $stageService
     */
    public function __construct(StageRepository $stageRepository, StageService $stageService)
    {
        $this->stageRepository = $stageRepository;
        $this->stageService = $stageService;
    }

    /**
     * Get all stages.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $stages = $this->stageRepository->getAll();

        if (count($stages) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'stages' => $stages
        ]);
    }

    /**
     * Get stage by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @return Illuminate\Http\JsonResponse
     */
    public function show($identifier = null)
    {
        $stage = $this->stageService->getRequestedStage($identifier);
        return new JsonResponse([
            'stage' => $stage
        ]);
    }

    /**
     * Create stage.
     *
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->get('stage');
        $slugify = new Slugify();
        $slug = $slugify->slugify($data['name']);

        $check = $this->stageService->getRequestedStage($slug, false);
        if ($check) {
            throw new StageAlreadyExistsException();
        }

        $data['slug'] = $slug;
        $stage = $this->stageRepository->create($data);

        return new JsonResponse([
            'stage' => $stage
        ], Response::HTTP_CREATED);
    }

    /**
     * Update stage by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function update($identifier = null, Request $request)
    {
        $stage = $this->stageService->getRequestedStage($identifier);
        $data = $request->get('stage');
        $stageUpdated = $this->stageRepository->update($stage, $data);

        if (!$stageUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'stage' => $stageUpdated
        ]);
    }

    /**
     * Delete stage by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($identifier = null)
    {
        $stage = $this->stageService->getRequestedStage($identifier);
        $stageDeleted = $this->stageRepository->delete($stage);

        if (!$stageDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'stage' => []
        ]);
    }

}
