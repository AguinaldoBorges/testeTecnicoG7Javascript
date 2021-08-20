describe("Lista de Prioridade (SLA) de Jobs", function(){

    it("Deve receber os jobs ordenados, por Data Máxima de Conclusão, respeitando o limite de 8 horas de Tempo Estimado por Array. ID's esperados: [ [ 1, 3 ], [ 2, 4 ], [ 5 ], [ 6 ], [ 7, 8 ] ]", function(){
        var job = [{ "ID": 1, "Descricao": "Importação de arquivos", "Data_Maxima_de_Conclusao": "2019-11-10 08:00:00", "Tempo_Estimado": 2 }, 
{ "ID": 2, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 12:00:00", "Tempo_Estimado": 4 }, 
{ "ID": 3, "Descricao": "Dados de integração", "Data_Maxima_de_Conclusao": "2019-11-11 08:00:00", "Tempo_Estimado": 6 },
{ "ID": 4, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 12:00:00", "Tempo_Estimado": 4 },
{ "ID": 5, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 },
{ "ID": 6, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 5 },
{ "ID": 7, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 },
{ "ID": 8, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 }]
        
        expect(ListaOrdenadaDeJobsPorSLA(job,'s')).toEqual([ [ 1, 3 ], [ 2, 4 ], [ 5 ], [ 6 ], [ 7, 8 ] ]);
    });

    it("Deve receber os jobs ordenados, por Data Máxima de Conclusão, respeitando o limite de 8 horas de Tempo Estimado por Array. ID's esperados: [ [ 1 ], [ 3 ], [ 2 ], [ 4 ], [ 5 ], [ 6 ], [ 7, 8 ] ]", function(){
        var job = [{ "ID": 1, "Descricao": "Importação de arquivos", "Data_Maxima_de_Conclusao": "2019-11-10 08:00:00", "Tempo_Estimado": 2 }, 
{ "ID": 2, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 12:00:00", "Tempo_Estimado": 7 }, 
{ "ID": 3, "Descricao": "Dados de integração", "Data_Maxima_de_Conclusao": "2019-11-11 08:00:00", "Tempo_Estimado": 8 },
{ "ID": 4, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 12:00:00", "Tempo_Estimado": 4 },
{ "ID": 5, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 },
{ "ID": 6, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 5 },
{ "ID": 7, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 },
{ "ID": 8, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 }]
        
        expect(ListaOrdenadaDeJobsPorSLA(job,'s')).toEqual([
            [ 1 ],    [ 3 ],
            [ 2 ],    [ 4 ],
            [ 5 ],    [ 6 ],
            [ 7, 8 ]
          ]);
    });

    it("Deve verificar se as datas Inicio e Fim estão corretas. Retorno esperado: true", function(){
        var job = [{ "ID": 1, "Descricao": "Importação de arquivos", "Data_Maxima_de_Conclusao": "2019-11-10 08:00:00", "Tempo_Estimado": 2 }, 
{ "ID": 2, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 12:00:00", "Tempo_Estimado": 4 }, 
{ "ID": 3, "Descricao": "Dados de integração", "Data_Maxima_de_Conclusao": "2019-11-11 08:00:00", "Tempo_Estimado": 6 },
{ "ID": 4, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 12:00:00", "Tempo_Estimado": 4 },
{ "ID": 5, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 },
{ "ID": 6, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 5 },
{ "ID": 7, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 },
{ "ID": 8, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 }]
        
        expect(ListaOrdenadaDeJobsPorSLA(job,'d')).toEqual(true);
    });

    it("Deve verificar a data Inicial. Retorno esperado: 2019-11-10 08:00:00", function(){
        var job = [{ "ID": 1, "Descricao": "Importação de arquivos", "Data_Maxima_de_Conclusao": "2019-11-10 08:00:00", "Tempo_Estimado": 2 }, 
{ "ID": 2, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 12:00:00", "Tempo_Estimado": 4 }, 
{ "ID": 3, "Descricao": "Dados de integração", "Data_Maxima_de_Conclusao": "2019-11-11 08:00:00", "Tempo_Estimado": 6 },
{ "ID": 4, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 12:00:00", "Tempo_Estimado": 4 },
{ "ID": 5, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 },
{ "ID": 6, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 5 },
{ "ID": 7, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 },
{ "ID": 8, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 }]
        
        expect(ListaOrdenadaDeJobsPorSLA(job,'di')).toEqual('2019-11-10 08:00:00');
    });

    it("Deve verificar a data Final. Retorno esperado:  2019-11-11 13:00:00", function(){
        var job = [{ "ID": 1, "Descricao": "Importação de arquivos", "Data_Maxima_de_Conclusao": "2019-11-10 08:00:00", "Tempo_Estimado": 2 }, 
{ "ID": 2, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 12:00:00", "Tempo_Estimado": 4 }, 
{ "ID": 3, "Descricao": "Dados de integração", "Data_Maxima_de_Conclusao": "2019-11-11 08:00:00", "Tempo_Estimado": 6 },
{ "ID": 4, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 12:00:00", "Tempo_Estimado": 4 },
{ "ID": 5, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 },
{ "ID": 6, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 5 },
{ "ID": 7, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 },
{ "ID": 8, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 }]
        
        expect(ListaOrdenadaDeJobsPorSLA(job,'df')).toEqual('2019-11-11 13:00:00');
    });
});


