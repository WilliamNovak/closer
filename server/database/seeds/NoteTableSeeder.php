<?php

use Illuminate\Database\Seeder;

class NoteTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('notes')->insert([
            'text' => 'Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Interagi no mé, cursus quis, vehicula ac nisi. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Delegadis gente finis, bibendum egestas augue arcu ut est.',
            'color' => 'gray',
            'customer_id' => 1,
            'user_id' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('notes')->insert([
            'text' => 'Atirei o pau no gatis, per gatis num morreus. Interagi no mé, cursus quis, vehicula ac nisi.',
            'customer_id' => 1,
            'user_id' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('notes')->insert([
            'text' => 'Interagi no mé, cursus quis, vehicula ac nisi. Atirei o pau no gatis, per gatis num morreus.',
            'customer_id' => 1,
            'user_id' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('notes')->insert([
            'text' => 'Atirei o pau no gatis, per gatis num morreus. Interagi no mé, cursus quis, vehicula ac nisi.',
            'customer_id' => 2,
            'user_id' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('notes')->insert([
            'text' => 'Interagi no mé, cursus quis, vehicula ac nisi.',
            'customer_id' => 2,
            'user_id' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);


    }
}
