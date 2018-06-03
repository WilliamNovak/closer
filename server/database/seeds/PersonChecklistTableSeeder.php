<?php

use Illuminate\Database\Seeder;

class PersonChecklistTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('person_checklists')->insert([
            'name' => 'Mussum Ipsum, cacilds vidis litro abertis.',
            'is_closed' => 0,
            'person_id' => 1,
            'user_id' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('person_checklists')->insert([
            'name' => 'Cacilds vidis litro abertis.',
            'is_closed' => 1,
            'person_id' => 1,
            'user_id' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('person_checklists')->insert([
            'name' => 'Interagi no mé, cursus quis, vehicula ac nisi. Atirei o pau no gatis, per gatis num morreus.',
            'is_closed' => 1,
            'person_id' => 1,
            'user_id' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);


    }
}
