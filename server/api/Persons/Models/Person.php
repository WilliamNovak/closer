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
use App\User;

class Person extends Model {

    use SoftDeletes;

    /**
     * Define name of table of this model.
     *
     * @var string
     */
    protected $table = 'persons';

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
        'name', 'identifier', 'description', 'contact_preference',
        'mobile', 'phone', 'email', 'company_name', 'role_name',
        'accept_newsletter', 'accept_mailmarketing',
        'source_id', 'stage_id', 'user_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'source_id', 'stage_id', 'user_id',
        'deleted_at'
    ];

    /**
     * Get custom fields collection.
     *
     * @return Api\Persons\Models\CustomField
     */
    public function customFields()
    {
        return $this->hasMany(CustomField::class, 'person_id');
    }

    /**
     * Get notes collection.
     *
     * @return Api\Persons\Models\Notes
     */
    public function notes()
    {
        return $this->hasMany(Notes::class, 'person_id');
    }

    /**
     * Get tags collection.
     *
     * @return Api\Persons\Models\Tags
     */
    public function tags()
    {
        return $this->hasMany(Tags::class, 'person_id')->with('tag');
    }

    /**
     * Get addresses collection.
     *
     * @return Api\Persons\Models\Addresses
     */
    public function addresses()
    {
        return $this->hasMany(Addresses::class, 'person_id');
    }

    /**
     * Get socials collection.
     *
     * @return Api\Persons\Models\Socials
     */
    public function socials()
    {
        return $this->hasMany(Socials::class, 'person_id')->with('social');
    }

    /**
     * Get souce.
     *
     * @return Api\Sources\Models\Source
     */
    public function source()
    {
        return $this->belongsTo(Source::class, 'source_id');
    }

    /**
     * Get stage.
     *
     * @return Api\Stages\Models\Stage
     */
    public function stage()
    {
        return $this->belongsTo(Stage::class, 'stage_id');
    }

    /**
     * Get owner.
     *
     * @return App\User
     */
    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
