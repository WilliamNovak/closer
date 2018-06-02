<?php

use Illuminate\Database\Seeder;

class StageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stages')->insert([
            'slug' => 'lead',
            'name' => 'lead'
        ]);

        DB::table('stages')->insert([
            'slug' => 'negotiation',
            'name' => 'em negociação'
        ]);

        DB::table('stages')->insert([
            'slug' => 'won',
            'name' => 'ganho'
        ]);

        DB::table('stages')->insert([
            'slug' => 'lost',
            'name' => 'perdido'
        ]);

        DB::table('stages')->insert([
            'slug' => 'qualified',
            'name' => 'qualificado'
        ]);

        DB::table('stages')->insert([
            'slug' => 'contacted',
            'name' => 'contato feito'
        ]);

    }
}
