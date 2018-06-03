<?php

namespace Api\Persons\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Api\Persons\Models\Person;

class CustomFields extends Model {

    use SoftDeletes;

    protected $softDelete = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'type', 'value', 'person_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'person_id'
    ];

    public function person()
    {
        return $this->belongsTo(Person::class, 'person_id');
    }

}
