<?php

namespace Api\Persons\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Api\Persons\Models\Person;
use App\User;

class Checklists extends Model {

    use SoftDeletes;

    /**
     * Define name of table of this model.
     *
     * @var string
     */
    protected $table = 'person_checklists';

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
        'name', 'is_closed', 'user_id', 'person_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'person_id',
        'user_id',
        'deleted_at'
    ];

    public function person()
    {
        return $this->belongsTo(Person::class, 'person_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
