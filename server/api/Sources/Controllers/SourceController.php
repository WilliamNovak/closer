<?php

namespace Api\Sources\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Sources\Repositories\SourceRepository;
use Api\Sources\Services\SourceService;
use Api\Sources\Exceptions\SourceAlreadyExistsException;
use Cocur\Slugify\Slugify;

/**
 * Source Controller.
 *
 */
class SourceController extends Controller
{

    /**
     *
     * @var Api\Sources\Repositories\SourceRepository
     */
    private $sourceRepository;

    /**
     *
     * @var Api\Sources\Services\SourceService
     */
    private $sourceService;

    /**
     * Source Controller Class Constructor.
     *
     * @param Api\Sources\Repositories\SourceRepository $sourceRepository
     * @param Api\Sources\Services\SourceService $sourceService
     */
    public function __construct(SourceRepository $sourceRepository, SourceService $sourceService)
    {
        $this->sourceRepository = $sourceRepository;
        $this->sourceService = $sourceService;
    }

    /**
     * Get all sources.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $sources = $this->sourceRepository->getAll();

        if (count($sources) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'sources' => $sources
        ]);
    }

    /**
     * Get source by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @return Illuminate\Http\JsonResponse
     */
    public function show($identifier = null)
    {
        $source = $this->sourceService->getRequestedSource($identifier);
        return new JsonResponse([
            'source' => $source
        ]);
    }

    /**
     * Create source.
     *
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->get('source');
        $slugify = new Slugify();
        $slug = $slugify->slugify($data['name']);

        $check = $this->sourceService->getRequestedSource($slug, false);
        if ($check) {
            throw new SourceAlreadyExistsException();
        }

        $data['slug'] = $slug;
        $source = $this->sourceRepository->create($data);

        return new JsonResponse([
            'source' => $source
        ], Response::HTTP_CREATED);
    }

    /**
     * Update source by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function update($identifier = null, Request $request)
    {
        $source = $this->sourceService->getRequestedSource($identifier);
        $data = $request->get('source');
        $sourceUpdated = $this->sourceRepository->update($source, $data);

        if (!$sourceUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'source' => $sourceUpdated
        ]);
    }

    /**
     * Delete source by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($identifier = null)
    {
        $source = $this->sourceService->getRequestedSource($identifier);
        $sourceDeleted = $this->sourceRepository->delete($source);

        if (!$sourceDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'source' => []
        ]);
    }

}
