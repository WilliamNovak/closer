<?php

namespace Api\Persons\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Api\Persons\Models\Person;
use Api\SocialNetworks\Models\SocialNetwork;

class Socials extends Model {

    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'value', 'social_network_id', 'person_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'social_network_id', 'person_id',
        'deleted_at'
    ];

    public function person()
    {
        return $this->belongsTo(Person::class, 'person_id');
    }

    public function network()
    {
        return $this->belongsTo(SocialNetwork::class, 'social_network_id');
    }

}
