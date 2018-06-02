<?php

namespace Api\Stages\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Stages\Repositories\StageRepository;
use Api\Stages\Exceptions\StageNotFoundException;
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
     * Stage Controller Class Constructor.
     *
     * @param Api\Stages\Repositories\StageRepository $stageRepository
     */
    public function __construct(StageRepository $stageRepository)
    {
        $this->stageRepository = $stageRepository;
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($identifier = null)
    {
        $stage = $this->getRequestedStage($identifier);
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

        if ($this->stageRepository->getBySlug($slug)) {
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($identifier = null, Request $request)
    {
        $stage = $this->getRequestedStage($identifier);
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($identifier = null)
    {
        $stage = $this->getRequestedStage($identifier);
        $stageDeleted = $this->stageRepository->delete($stage);

        if (!$stageDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'stage' => []
        ]);
    }

    /**
     * Get requested stage by id or slug name.
     *
     * @param mixed $identifier
     * @return Api\Stages\Models\Stage
     * @return Api\Stages\Exceptions\StageNotFoundException;
     */
    private function getRequestedStage($identifier = null)
    {
        $stage = ( $identifier > 0 ?
            $this->stageRepository->getById($identifier) :
            $this->stageRepository->getBySlug($identifier)
        );

        if (is_null($stage)) {
            throw new StageNotFoundException();
        }
        return $stage;
    }
}
