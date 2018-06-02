<?php

use Illuminate\Database\Seeder;

class CustomerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('customers')->insert([
            'name' => 'Zack Snyder'
        ]);

        DB::table('customers')->insert([
            'name' => 'Christopher Nolan'
        ]);

        DB::table('customers')->insert([
            'name' => 'George Miller'
        ]);

        DB::table('customers')->insert([
            'name' => 'Steven Spielberg'
        ]);

        DB::table('customers')->insert([
            'name' => 'Tim Burton'
        ]);

    }
}
