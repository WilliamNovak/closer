<?php

use Illuminate\Database\Seeder;

class TagTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tags')->insert([
            'slug' => 'new',
            'name' => 'new',
            'color' => 'green'
        ]);

        DB::table('tags')->insert([
            'slug' => 'frozen',
            'name' => 'congelado',
            'color' => 'blue'
        ]);

        DB::table('tags')->insert([
            'slug' => 'no-interest',
            'name' => 'sem interesse',
            'color' => 'yellow'
        ]);

        DB::table('tags')->insert([
            'slug' => 'not-disturb',
            'name' => 'não perturbe',
            'color' => 'red'
        ]);
    }
}
