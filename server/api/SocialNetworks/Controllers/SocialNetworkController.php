<?php

namespace Api\SocialNetworks\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\SocialNetworks\Repositories\SocialNetworkRepository;
use Api\SocialNetworks\Services\SocialNetworkService;
use Api\SocialNetworks\Exceptions\SocialNetworkAlreadyExistsException;
use Cocur\Slugify\Slugify;

/**
 * Social Network Controller.
 *
 */
class SocialNetworkController extends Controller
{

    /**
     *
     * @var Api\SocialNetworks\Repositories\SocialNetworkRepository
     */
    private $socialnetworkRepository;

    /**
     *
     * @var Api\SocialNetworks\Services\SocialNetworkService
     */
    private $socialnetworkService;

    /**
     * Social Network Controller Class Constructor.
     *
     * @param Api\SocialNetworks\Repositories\SocialNetworkRepository $socialnetworkRepository
     * @param Api\SocialNetworks\Services\SocialNetworkService $socialnetworkService
     */
    public function __construct(SocialNetworkRepository $socialnetworkRepository, SocialNetworkService $socialnetworkService)
    {
        $this->socialnetworkRepository = $socialnetworkRepository;
        $this->socialnetworkService = $socialnetworkService;
    }

    /**
     * Get all social networks.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $socialnetworks = $this->socialnetworkRepository->getAll();

        if (count($socialnetworks) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'socialnetworks' => $socialnetworks
        ]);
    }

    /**
     * Get social network by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($identifier = null)
    {
        $socialnetwork = $this->socialnetworkService->getRequestedSocialNetwork($identifier);
        return new JsonResponse([
            'socialnetwork' => $socialnetwork
        ]);
    }

    /**
     * Create social network.
     *
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->get('socialnetwork');
        $slugify = new Slugify();
        $slug = $slugify->slugify($data['name']);

        $check = $this->socialnetworkService->getRequestedSocialNetwork($slug, false);
        if ($check) {
            throw new SocialNetworkAlreadyExistsException();
        }

        $data['slug'] = $slug;
        $socialnetwork = $this->socialnetworkRepository->create($data);

        return new JsonResponse([
            'socialnetwork' => $socialnetwork
        ], Response::HTTP_CREATED);
    }

    /**
     * Update social network by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($identifier = null, Request $request)
    {
        $socialnetwork = $this->socialnetworkService->getRequestedSocialNetwork($identifier);
        $data = $request->get('socialnetwork');
        $socialnetworkUpdated = $this->socialnetworkRepository->update($socialnetwork, $data);

        if (!$socialnetworkUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'socialnetwork' => $socialnetworkUpdated
        ]);
    }

    /**
     * Delete social network by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($identifier = null)
    {
        $socialnetwork = $this->socialnetworkService->getRequestedSocialNetwork($identifier);
        $socialnetworkDeleted = $this->socialnetworkRepository->delete($socialnetwork);

        if (!$socialnetworkDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'socialnetwork' => []
        ]);
    }

}
