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
        $this->call('SocialTableSeeder');
        $this->call('TagTableSeeder');
        $this->call('StageTableSeeder');
        $this->call('SourceTableSeeder');
        $this->call('OperationTableSeeder');
        $this->call('PersonTableSeeder');
        $this->call('PersonAddressTableSeeder');
        $this->call('CustomFieldTableSeeder');
        $this->call('PersonNoteTableSeeder');
        $this->call('PersonTagTableSeeder');
        $this->call('PersonSocialTableSeeder');
        $this->call('PersonChecklistTableSeeder');
        $this->call('CollectionTableSeeder');
    }
}
