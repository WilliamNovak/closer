<?php

use Illuminate\Database\Seeder;

class SourceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sources')->insert([
            'slug' => 'undefined',
            'name' => 'não definido'
        ]);

        DB::table('sources')->insert([
            'slug' => 'social.facebook',
            'name' => 'facebook'
        ]);

        DB::table('sources')->insert([
            'slug' => 'social.twitter',
            'name' => 'twitter'
        ]);

        DB::table('sources')->insert([
            'slug' => 'social.instagram',
            'name' => 'instagram'
        ]);

        DB::table('sources')->insert([
            'slug' => 'email.marketing',
            'name' => 'blog'
        ]);

        DB::table('sources')->insert([
            'slug' => 'website',
            'name' => 'site'
        ]);

        DB::table('sources')->insert([
            'slug' => 'website',
            'name' => 'site'
        ]);

        DB::table('sources')->insert([
            'slug' => 'events',
            'name' => 'eventos'
        ]);

        DB::table('sources')->insert([
            'slug' => 'outbound',
            'name' => 'outbound'
        ]);

        DB::table('sources')->insert([
            'slug' => 'other',
            'name' => 'outros'
        ]);
    }
}
