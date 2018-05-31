<?php

use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'slug' => 'master',
            'name' => 'master user role'
        ]);

        DB::table('roles')->insert([
            'slug' => 'manager',
            'name' => 'manager user role'
        ]);

        DB::table('roles')->insert([
            'slug' => 'common',
            'name' => 'common user role'
        ]);

        DB::table('roles')->insert([
            'slug' => 'guest',
            'name' => 'guest user role'
        ]);
    }
}
