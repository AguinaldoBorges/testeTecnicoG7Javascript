// Criar algoritmo que retorne um conjunto de arrays com as seguintes características:
// Cada array do conjunto representa uma lista de Jobs a serem executados em sequência;
// Cada array deve conter jobs que sejam executados em, no máximo, 8h;
// Deve ser respeitada a data máxima de conclusão do Job;
// Todos os Jobs devem ser executados dentro da janela de execução (data início e fim).
// Desenvolvido por: Aguinaldo Borges 19/08/2021

// Array de dados
var job = [{ "ID": 1, "Descricao": "Importação de arquivos", "Data_Maxima_de_Conclusao": "2019-11-10 08:00:00", "Tempo_Estimado": 2 }, 
{ "ID": 2, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 12:00:00", "Tempo_Estimado": 4 }, 
{ "ID": 3, "Descricao": "Dados de integração", "Data_Maxima_de_Conclusao": "2019-11-11 08:00:00", "Tempo_Estimado": 6 },
{ "ID": 4, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 12:00:00", "Tempo_Estimado": 4 },
{ "ID": 5, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 },
{ "ID": 6, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 5 },
{ "ID": 7, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 },
{ "ID": 7, "Descricao": "Importação de Dados", "Data_Maxima_de_Conclusao": "2019-11-11 13:00:00", "Tempo_Estimado": 4 }]

// Ordena os jobs e exibe conforme a regra de negocio
function ListaOrdenadaDeJobsPorSLA(Job,tipo){
    // Ordenar a lista por Data Máxima de Comclusão
    function compare(a,b) {
        if (a.Data_Maxima_de_Conclusao < b.Data_Maxima_de_Conclusao)
        return -1;
        if (a.Data_Maxima_de_Conclusao > b.Data_Maxima_de_Conclusao)
        return 1;
        return 0;
    }
    
    Job.sort(compare);


    // Verificar as datas
    var dataMinima = Job[0].Data_Maxima_de_Conclusao
    var dataMaxima = Job[Job.length-1].Data_Maxima_de_Conclusao

    // Exibe na tela
    console.log('===Janela de Execução:==============================')
    console.log('Data Início:',dataMinima)
    console.log('Data Fim: ',dataMaxima)
    console.log('====================================================')

    
    // Armazenar e exibir o conjunto de strings
    var tempo = 0;
    var exibir = []
    var simplificada = []
    var maior = 0; //criterio para acao em caso de tempo igual ou superior a 8 horas

    // Percorrer a lista de dados
    for (i = 0; i < Job.length; i++) {
        tempo += Job[i].Tempo_Estimado
        
        // Validar tempo maximo de 8 horas e registrar os Jobs Ordenados
        if (tempo ==8){
            let subIndice = exibir.length-1
            exibir[subIndice].push(Job[i])
            simplificada[subIndice].push(Job[i].ID)
            maior = 1
            tempo = 0
        }else if (tempo > 8){
            exibir.push([Job[i]])
            simplificada.push([Job[i].ID])
            let subIndice = exibir.length-1
            maior = 1
            tempo = 0
        }else{
            let indice = exibir.length;
            if (exibir.length == 0){
                exibir.push([Job[i]])
                simplificada.push([Job[i].ID])
            }else if(maior == 1){
                exibir.push([Job[i]])
                simplificada.push([Job[i].ID])
                maior = 0
            }else{
                let subIndice = exibir.length-1
                exibir[subIndice].push(Job[i])
                simplificada[subIndice].push(Job[i].ID)
            }

        }
        


        

    }
    function a(){
        console.log('Sucesso')
    }
    // Return
    // Documentação:
    // 's' = Lista Simplificada => Exibe somente os ID's
    // 'd' = Retorna o booleano da verificação entre data minima e maxima
    // 'di' = Retorna a Data Inicial (mínima)
    // 'df' = Retorna a Data Final (máxima)
    if (tipo == 's'){
        return simplificada
    }else if(tipo == 'd'){
        return dataMinima < dataMaxima
        
    }else if(tipo == 'di'){
        return dataMinima
        
    }else if(tipo == 'df'){
        return dataMaxima
        
    }else{
        return exibir
    }
    
}

console.log('Lista Simplificada ID >>>')
console.log(ListaOrdenadaDeJobsPorSLA(job,'s'))
console.log(' ')
console.log('Lista Completa >>>')
console.log(ListaOrdenadaDeJobsPorSLA(job,))
console.log('====================================================')


