<?php

use Illuminate\Database\Seeder;

class PersonSocialTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 1; $i <= 5; $i++) {
            for($x = 1; $x <= 5; $x++) {
                DB::table('person_socials')->insert([
                    'person_id' => $i,
                    'social_id' => $x,
                    'value' => $this->generateRandomString((20 - $x) + $i)
                ]);
            }
        }

    }

    private function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
