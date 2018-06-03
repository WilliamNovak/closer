<?php

namespace Api\Persons\Models;

use Illuminate\Database\Eloquent\Model;
use Api\Persons\Models\Person;
use App\User;

class Logs extends Model {

    /**
     * Define table name of this model.
     *
     * @var string
     */
    protected $table = 'person_logs';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'key', 'value', 'user_id', 'person_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'person_id',
        'user_id'
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
