<?php

use Illuminate\Database\Seeder;

class SocialTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('socials')->insert([
            'slug' => 'facebook',
            'name' => 'facebook',
            'description' => '',
            'color' => '#3b5998',
            'icon' => 'facebook'
        ]);

        DB::table('socials')->insert([
            'slug' => 'instagram',
            'name' => 'instagram',
            'description' => '',
            'color' => '#cd486b',
            'icon' => 'instagram'
        ]);

        DB::table('socials')->insert([
            'slug' => 'twitter',
            'name' => 'twitter',
            'description' => '',
            'color' => '#55acee',
            'icon' => 'twitter'
        ]);

        DB::table('socials')->insert([
            'slug' => 'skype',
            'name' => 'skype',
            'description' => '',
            'color' => '#00aff0',
            'icon' => 'skype'
        ]);

        DB::table('socials')->insert([
            'slug' => 'youtube',
            'name' => 'youtube',
            'description' => '',
            'color' => '#cd201f',
            'icon' => 'youtube'
        ]);

        DB::table('socials')->insert([
            'slug' => 'dribble',
            'name' => 'dribble',
            'description' => '',
            'color' => '#ea4c89',
            'icon' => 'dribble'
        ]);

        DB::table('socials')->insert([
            'slug' => 'behance',
            'name' => 'behance',
            'description' => '',
            'color' => '#131418',
            'icon' => 'behance'
        ]);

        DB::table('socials')->insert([
            'slug' => 'slack',
            'name' => 'slack',
            'description' => '',
            'color' => '#3aaf85',
            'icon' => 'slack'
        ]);

    }
}
