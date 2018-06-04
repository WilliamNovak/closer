<?php

use Illuminate\Database\Seeder;

class CollectionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('collections')->insert([
            'name' => 'Todo mundo vê os porris que eu tomo',
            'description' => 'Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Atirei o pau no gatis, per gatis num morreus. Interagi no mé, cursus quis, vehicula ac nisi.',
            'user_id' => 1,
            'is_private' => 1,
            'is_active' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('collections')->insert([
            'name' => 'Nullam a nisl ut ante blandit hendrerit',
            'description' => 'Quem num gosta di mé, boa gentis num é. Quem manda na minha terra sou euzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.',
            'user_id' => 1,
            'is_private' => 0,
            'is_active' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('collections')->insert([
            'name' => 'Mussum Ipsum, cacilds vidis litro abertis',
            'description' => 'Quem num gosta di mé, boa gentis num é. Quem manda na minha terra sou euzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.',
            'user_id' => 1,
            'is_private' => 0,
            'is_active' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

    }
}
