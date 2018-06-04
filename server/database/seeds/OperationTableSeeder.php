<?php

use Illuminate\Database\Seeder;

class OperationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('operations')->insert([
            'slug' => 'operation.marketing',
            'name' => 'marketing',
            'description' => 'Nesta parte, o CRM deve ser capaz de cadastrar os clientes, segmentá-los por tipos e ajudar a conhecer seus históricos de interação com a empresa, para que você possa conhecê-los cada vez melhor e saber exatamente o que desejam. Assim, é possível customizar ofertas por tipos de clientes, entre outras ações.'
        ]);

        DB::table('operations')->insert([
            'slug' => 'operation.sales',
            'name' => 'vendas',
            'description' => 'Agora seu CRM deve permitir analisar o pipeline de vendas, quantas transações entraram e estão fluindo por seu funil de conversão e até fazer previsões de fechamento. Esta funcionalidade permite gerenciar a força de vendas, direcionar esforços, tomar decisões e descobrir em quais etapas da jornada de vendas sua equipe é melhor ou pior, além de ser um ferramenta de consulta, online e em tempo real, para os vendedores internos e em campo.'
        ]);

        DB::table('operations')->insert([
            'slug' => 'operation.attendance',
            'name' => 'atendimento e pós Venda',
            'description' => 'Neste caso, o CRM pode ter um módulo para atendimento de chamadas de suporte ou reclamações, ou, como no caso que citamos, uma maneira de contactar o cliente para pedir feedback.'
        ]);
    }
}
