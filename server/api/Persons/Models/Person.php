<?php

namespace Api\Persons\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Api\Persons\Models\Addresses;
use Api\Persons\Models\Socials;
use Api\Persons\Models\CustomField;
use Api\Persons\Models\Notes;
use Api\Persons\Models\Tags;
use Api\Sources\Models\Source;
use Api\Stages\Models\Stage;

class Person extends Model {

    use SoftDeletes;

    protected $table = 'persons';

    protected $softDelete = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'identifier', 'description', 'contact_preference',
        'mobile', 'phone', 'email', 'company_name', 'role_name',
        'accept_newsletter', 'accept_mailmarketing',
        'source_id', 'stage_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'source_id', 'stage_id',
        'deleted_at'
    ];

    public function customFields()
    {
        return $this->hasMany(CustomField::class, 'person_id');
    }

    public function notes()
    {
        return $this->hasMany(CustomField::class, 'person_id');
    }

    public function tags()
    {
        return $this->hasMany(Tags::class, 'person_id')->with('tag');
    }

    public function addresses()
    {
        return $this->hasMany(Addresses::class, 'person_id');
    }

    public function socials()
    {
        return $this->hasMany(Socials::class, 'person_id')->with('network');
    }

    public function source()
    {
        return $this->belongsTo(Source::class, 'source_id');
    }

    public function stage()
    {
        return $this->belongsTo(Stage::class, 'stage_id');
    }

}
