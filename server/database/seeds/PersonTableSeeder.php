<?php

use Illuminate\Database\Seeder;

class PersonTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('persons')->insert([
            'name' => 'Zack Snyder',
            'source_id' => 1,
            'stage_id' => 1,
            'description' => 'Test description',
            'identifier' => '123456',
            'company_name' => 'Company Name',
            'role_name' => '',
            'contact_preference' => 'whatsapp',
            'email' => 'zack.snyder@gmail.com',
            'phone' => '41999999999',
            'mobile' => null,
            'user_id' => 1
        ]);


        DB::table('persons')->insert([
            'name' => 'Christopher Nolan',
            'source_id' => 2,
            'stage_id' => 1,
            'description' => 'Test description',
            'identifier' => '123456',
            'company_name' => 'Company Name',
            'role_name' => '',
            'contact_preference' => 'whatsapp',
            'email' => 'zack.snyder@gmail.com',
            'phone' => '41999999999',
            'mobile' => null,
            'user_id' => 1
        ]);

        DB::table('persons')->insert([
            'name' => 'George Miller',
            'source_id' => 3,
            'stage_id' => 1,
            'description' => 'Test description',
            'identifier' => '123456',
            'company_name' => 'Company Name',
            'role_name' => '',
            'contact_preference' => 'whatsapp',
            'email' => 'zack.snyder@gmail.com',
            'phone' => '41999999999',
            'mobile' => null,
            'user_id' => 1
        ]);

        DB::table('persons')->insert([
            'name' => 'Steven Spielberg',
            'source_id' => 4,
            'stage_id' => 1,
            'description' => 'Test description',
            'identifier' => '123456',
            'company_name' => 'Company Name',
            'role_name' => '',
            'contact_preference' => 'whatsapp',
            'email' => 'zack.snyder@gmail.com',
            'phone' => '41999999999',
            'mobile' => null,
            'user_id' => 1
        ]);

        DB::table('persons')->insert([
            'name' => 'Tim Burton',
            'source_id' => 1,
            'stage_id' => 1,
            'description' => 'Test description',
            'identifier' => '123456',
            'company_name' => 'Company Name',
            'role_name' => '',
            'contact_preference' => 'whatsapp',
            'email' => 'zack.snyder@gmail.com',
            'phone' => '41999999999',
            'mobile' => null,
            'user_id' => 1
        ]);

    }
}
