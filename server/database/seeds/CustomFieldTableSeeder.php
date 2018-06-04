<?php

use Illuminate\Database\Seeder;

class CustomFieldTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('custom_fields')->insert([
            'name' => 'Indicação',
            'type' => 'text',
            'value' => 'Ed Harris',
            'person_id' => 1
        ]);

        DB::table('custom_fields')->insert([
            'name' => 'Melhor horário para conversar',
            'type' => 'time',
            'value' => '10:00',
            'person_id' => 1
        ]);

        DB::table('custom_fields')->insert([
            'name' => 'Melhor horário para conversar',
            'type' => 'time',
            'value' => '10:00',
            'person_id' => 2
        ]);

        DB::table('custom_fields')->insert([
            'name' => 'Gosta de séries?',
            'type' => 'text',
            'value' => 'Não',
            'person_id' => 2
        ]);

        DB::table('custom_fields')->insert([
            'name' => 'Cor favorita',
            'type' => 'text',
            'value' => 'laranjado',
            'person_id' => 3
        ]);

        DB::table('custom_fields')->insert([
            'name' => 'Número de sorte',
            'type' => 'numeric',
            'value' => '13',
            'person_id' => 3
        ]);


    }
}
