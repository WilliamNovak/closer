<?php

namespace Api\Operations\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Operations\Repositories\OperationRepository;
use Api\Operations\Services\OperationService;
use Api\Operations\Exceptions\OperationAlreadyExistsException;
use Cocur\Slugify\Slugify;

/**
 * Operation Controller.
 *
 */
class OperationController extends Controller
{

    /**
     *
     * @var Api\Operations\Repositories\OperationRepository
     */
    private $operationRepository;

    /**
     *
     * @var Api\Operations\Services\OperationService
     */
    private $operationService;

    /**
     * Operation Controller Class Constructor.
     *
     * @param Api\Operations\Repositories\OperationRepository $operationRepository
     * @param Api\Operations\Services\OperationService $operationService
     */
    public function __construct(OperationRepository $operationRepository, OperationService $operationService)
    {
        $this->operationRepository = $operationRepository;
        $this->operationService = $operationService;
    }

    /**
     * Get all operations.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $operations = $this->operationRepository->getAll();

        if (count($operations) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'operations' => $operations
        ]);
    }

    /**
     * Get operation by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @return Illuminate\Http\JsonResponse
     */
    public function show($identifier = null)
    {
        $operation = $this->operationService->getRequestedOperation($identifier);
        return new JsonResponse([
            'operation' => $operation
        ]);
    }

    /**
     * Create operation.
     *
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->get('operation');
        $slugify = new Slugify();
        $slug = $slugify->slugify($data['name']);

        $check = $this->operationService->getRequestedOperation($slug, false);
        if ($check) {
            throw new OperationAlreadyExistsException();
        }

        $data['slug'] = $slug;
        $operation = $this->operationRepository->create($data);

        return new JsonResponse([
            'operation' => $operation
        ], Response::HTTP_CREATED);
    }

    /**
     * Update operation by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function update($identifier = null, Request $request)
    {
        $operation = $this->operationService->getRequestedOperation($identifier);
        $data = $request->get('operation');
        $operationUpdated = $this->operationRepository->update($operation, $data);

        if (!$operationUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'operation' => $operationUpdated
        ]);
    }

    /**
     * Delete operation by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($identifier = null)
    {
        $operation = $this->operationService->getRequestedOperation($identifier);
        $operationDeleted = $this->operationRepository->delete($operation);

        if (!$operationDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'operation' => []
        ]);
    }

}
