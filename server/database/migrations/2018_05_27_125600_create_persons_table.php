<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('persons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', '96');
            $table->text('description')->nullable();
            $table->string('identifier', 20);

            $table->string('company_name', '96')->nullable();
            $table->string('role_name', '96')->nullable();

            $table->string('contact_preference', '12')->nullable();

            $table->string('email', '112')->nullable();
            $table->boolean('accept_newsletter')->default(1);
            $table->boolean('accept_mailmarketing')->default(1);

            $table->string('phone', '12')->nullable();
            $table->string('mobile', '12')->nullable();

            $table->integer('user_id')->unsigned()->index();
            $table->foreign('user_id')->references('id')->on('users');

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
        Schema::drop('persons');
    }
}
