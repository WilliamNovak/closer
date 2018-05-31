<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'William Novak',
            'email' => 'williamnvk@gmail.com',
            'password' => app('hash')->make('123456'),
            'remember_token' => str_random(10),
            'role_id' => 1
        ]);

        DB::table('users')->insert([
            'name' => 'Another User',
            'email' => 'another@user.com',
            'password' => app('hash')->make('123456'),
            'remember_token' => str_random(10),
            'role_id' => 4
        ]);
    }
}
