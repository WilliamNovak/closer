<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('person_addresses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('street', '112')->nullable();
            $table->string('street_number', '8')->nullable();
            $table->string('neighborhood', '72')->nullable();
            $table->string('complement', '48')->nullable();
            $table->string('postal_code', '8')->nullable();
            $table->string('city_name', '59')->nullable();
            $table->string('state_code', '2')->nullable();
            $table->integer('person_id')->unsigned()->index();
            $table->foreign('person_id')->references('id')->on('persons');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('person_addresses');
    }
}
