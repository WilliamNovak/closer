<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSocialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('socials', function (Blueprint $table) {
            $table->increments('id');
            $table->string('value');
            $table->integer('social_network_id')->unsigned()->index();
            $table->foreign('social_network_id')->references('id')->on('social_networks');
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
        Schema::drop('socials');
    }
}
