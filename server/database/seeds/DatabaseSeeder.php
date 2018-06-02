<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call('RoleTableSeeder');
        $this->call('UserTableSeeder');
        $this->call('TagTableSeeder');
        $this->call('StageTableSeeder');
        $this->call('SourceTableSeeder');
        $this->call('OperationTableSeeder');
        $this->call('CustomerTableSeeder');
        $this->call('CustomFieldTableSeeder');
        $this->call('NoteTableSeeder');
    }
}
