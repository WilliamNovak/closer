<?php

namespace Api\Persons\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Persons\Repositories\SocialRepository;
use Api\Persons\Services\PersonService;
use Api\Persons\Services\SocialService as PersonSocialService;
use Api\Socials\Services\SocialService;

/**
 * Social Controller.
 *
 */
class SocialController extends Controller
{

    /**
     *
     * @var Api\Persons\Repositories\SocialRepository
     */
    private $socialRepository;

    /**
     *
     * @var Api\Persons\Services\PersonService
     */
    private $personService;

    /**
     *
     * @var Api\Persons\Services\PersonSocialService
     */
    private $personSocialService;

    /**
     *
     * @var Api\Socials\Services\SocialService
     */
    private $socialService;

    /**
     * Social Controller Class Constructor.
     *
     * @param Api\Persons\Repositories\SocialRepository $socialRepository
     * @param Api\Persons\Services\PersonSocialService $personSocialService
     * @param Api\Persons\Services\PersonService $personService
     * @param Api\Socials\Services\SocialService $socialService
     */
    public function __construct(
        SocialRepository $socialRepository,
        PersonSocialService $personSocialService,
        PersonService $personService,
        SocialService $socialService
        )
    {
        $this->socialRepository = $socialRepository;
        $this->personSocialService = $personSocialService;
        $this->personService = $personService;
        $this->socialService = $socialService;
    }

    /**
     * Get all socials.
     *
     * @param int $personId
     * @return Illuminate\Http\JsonResponse
     */
    public function index($personId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $socials = $this->socialRepository->getAllByPersonId($person->id);

        if (count($socials) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'socials' => $socials
        ]);
    }

    /**
     * Get social by id.
     *
     * @param int $personId
     * @param int $socialId
     * @return Illuminate\Http\JsonResponse
     */
    public function show($personId = 0, $socialId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $social = $this->personSocialService->getRequestedSocial($personId);

        return new JsonResponse([
            'social' => $social
        ]);
    }

    /**
     * Create social.
     *
     * @param int $personId (default: 0)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create($personId = 0, Request $request)
    {
        $data = $request->get('social');
        $person = $this->personService->getRequestedPerson($personId);
        $socialId = $data['social_id'];

        /* throw exception case social id is not found */
        $this->socialService->getRequestedSocial($socialId);

        $hasCreated = $this->socialRepository->create($person, $data);

        if (!$hasCreated) {
            return new JsonResponse([], Response::HTTP_NOT_CONTENT);
        }

        return new JsonResponse([
            'social' => $hasCreated
        ], Response::HTTP_CREATED);
    }

    /**
     * Update social by id.
     *
     * @param int $personId (default: 0)
     * @param int $socialId (default: 0)
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function update($personId = 0, $socialId = 0, Request $request)
    {
        $data = $request->get('social');
        $person = $this->personService->getRequestedPerson($personId);
        $social = $this->personSocialService->getRequestedSocial($socialId);
        $socialUpdated = $this->socialRepository->update($social, $data);

        if (!$socialUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'social' => $socialUpdated
        ]);
    }

    /**
     * Delete social by id.
     *
     * @param int $personId (default: 0)
     * @param int $socialId (default: 0)
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($personId = 0, $socialId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $social = $this->personSocialService->getRequestedSocial($socialId);
        $socialDeleted = $this->socialRepository->delete($social);

        if (!$socialDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'social' => []
        ]);
    }

}
