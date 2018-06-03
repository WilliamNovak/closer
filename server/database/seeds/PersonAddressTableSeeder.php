<?php

use Illuminate\Database\Seeder;

class PersonAddressTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 1; $i <= 5; $i++) {
            DB::table('person_addresses')->insert([
                'person_id' => $i,
                'street' => 'Rua Vicente Machado',
                'street_number' => '15',
                'neighborhood' => 'Centro',
                'complement' => '',
                'postal_code' => '80420010',
                'city_name' => 'Curitiba',
                'state_code' => 'PR',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ]);
        }

    }
}
