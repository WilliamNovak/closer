<?php

namespace Api\Persons\Models;

use Illuminate\Database\Eloquent\Model;
use Api\Persons\Models\Person;
use Api\Tags\Models\Tag;

class Tags extends Model {

    protected $table = 'person_tags';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'person_id', 'tag_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'person_id',
        'tag_id',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function person()
    {
        return $this->belongsTo(Person::class, 'person_id');
    }

    public function tag()
    {
        return $this->belongsTo(Tag::class, 'tag_id');
    }

}
