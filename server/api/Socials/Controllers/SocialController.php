<?php

namespace Api\Socials\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Socials\Repositories\SocialRepository;
use Api\Socials\Services\SocialService;
use Api\Socials\Exceptions\SocialAlreadyExistsException;
use Cocur\Slugify\Slugify;

/**
 * Social Controller.
 *
 */
class SocialController extends Controller
{

    /**
     *
     * @var Api\Socials\Repositories\SocialRepository
     */
    private $socialRepository;

    /**
     *
     * @var Api\Socials\Services\SocialService
     */
    private $socialService;

    /**
     * Social Controller Class Constructor.
     *
     * @param Api\Socials\Repositories\SocialRepository $socialRepository
     * @param Api\Socials\Services\SocialService $socialService
     */
    public function __construct(SocialRepository $socialRepository, SocialService $socialService)
    {
        $this->socialRepository = $socialRepository;
        $this->socialService = $socialService;
    }

    /**
     * Get all socials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $socials = $this->socialRepository->getAll();

        if (count($socials) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'socials' => $socials
        ]);
    }

    /**
     * Get social by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @return Illuminate\Http\JsonResponse
     */
    public function show($identifier = null)
    {
        $social = $this->socialService->getRequestedSocial($identifier);
        return new JsonResponse([
            'social' => $social
        ]);
    }

    /**
     * Create social.
     *
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->get('social');
        $slugify = new Slugify();
        $slug = $slugify->slugify($data['name']);

        $check = $this->socialService->getRequestedSocial($slug, false);
        if ($check) {
            throw new SocialAlreadyExistsException();
        }

        $data['slug'] = $slug;
        $social = $this->socialRepository->create($data);

        return new JsonResponse([
            'social' => $social
        ], Response::HTTP_CREATED);
    }

    /**
     * Update social by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function update($identifier = null, Request $request)
    {
        $social = $this->socialService->getRequestedSocial($identifier);
        $data = $request->get('social');
        $socialUpdated = $this->socialRepository->update($social, $data);

        if (!$socialUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'social' => $socialUpdated
        ]);
    }

    /**
     * Delete social by id or slug name.
     *
     * @param mixed $identifier (default: null)
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($identifier = null)
    {
        $social = $this->socialService->getRequestedSocial($identifier);
        $socialDeleted = $this->socialRepository->delete($social);

        if (!$socialDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'social' => []
        ]);
    }

}
