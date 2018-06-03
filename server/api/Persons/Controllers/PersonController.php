<?php

namespace Api\Persons\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Api\Persons\Repositories\PersonRepository;
use Api\Persons\Services\PersonService;

/**
 * Person Controller.
 *
 */
class PersonController extends Controller
{

    /**
     *
     * @var Api\Persons\Repositories\PersonRepository
     */
    private $personRepository;

    /**
     *
     * @var Api\Persons\Services\PersonService
     */
    private $personService;

    /**
     * Person Controller Class Constructor.
     *
     * @param Api\Persons\Repositories\PersonRepository $personRepository
     * @param Api\Persons\Services\PersonService $personService
     */
    public function __construct(PersonRepository $personRepository, PersonService $personService)
    {
        $this->personRepository = $personRepository;
        $this->personService = $personService;
    }

    /**
     * Get all persons.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $persons = $this->personRepository->getAll();

        if (count($persons) === 0) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'persons' => $persons
        ]);
    }

    /**
     * Get person by id.
     *
     * @param int $personId
     * @return Illuminate\Http\JsonResponse
     */
    public function show($personId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $source = $person->source; unset($person->source);
        $addresses = $person->addresses;
        $socials = $person->socials;
        $tags = $person->tags;
        $response = ['person' => $person];
        $response['person']['source'] = ['id' => $source->id, 'name' => $source->name];
        return new JsonResponse($response);
    }

    /**
     * Create person.
     *
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $data = $request->get('person');
        $person = $this->personRepository->create($data);
        $source = $person->source; unset($person->source);
        $response = ['person' => $person];
        $response['person']['source'] = ['id' => $source->id, 'name' => $source->name];
        return new JsonResponse($response, Response::HTTP_CREATED);
    }

    /**
     * Update person by id.
     *
     * @param int $personId
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function update($personId = 0, Request $request)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $data = $request->get('person');
        $personUpdated = $this->personRepository->update($person, $data);

        if (!$personUpdated) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        $person = $personUpdated;
        $source = $person->source; unset($person->source);
        $response = ['person' => $person];
        $response['person']['source'] = ['id' => $source->id, 'name' => $source->name];

        return new JsonResponse($response);
    }

    /**
     * Delete person by id.
     *
     * @param int $personId
     * @return Illuminate\Http\JsonResponse
     */
    public function delete($personId = 0)
    {
        $person = $this->personService->getRequestedPerson($personId);
        $personDeleted = $this->personRepository->delete($person);

        if (!$personDeleted) {
            return new JsonResponse([], Response::HTTP_NO_CONTENT);
        }

        return new JsonResponse([
            'person' => []
        ]);
    }

}
