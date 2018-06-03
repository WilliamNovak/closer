<?php

namespace Api\Persons\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Api\Persons\Models\Person;

class Addresses extends Model {

    use SoftDeletes;

    protected $table = "person_addresses";

    /**
     * Usage for SoftDeletes.
     *
     * @var string
     */
    protected $softDelete = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'street', 'street_number',
        'complement', 'neighborhood',
        'city_name', 'state_code',
        'person_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'person_id',
        'deleted_at'
    ];

    public function person()
    {
        return $this->belongsTo(Person::class, 'person_id');
    }

}
