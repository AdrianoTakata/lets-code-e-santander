let dados = {
    "students": [
        {"name": "Adriana Evangelista", "state": "", "age": ""},
        {"name": "Adriano Takata", "state": "SP", "age": "30"},
        {"name": "Ana Caroline Gomes", "state": "SP", "age": "21"},
        {"name": "Antonio Moreno", "state": "SC", "age": "27"},
        {"name": "Armando de Moraes Arnaldo", "state": "CE", "age": "31"},
        {"name": "Brenno Cavalcante", "state": "SP", "age": "21"},
        {"name": "Bruno Ribeiro Da Silva", "state": "SP", "age": "19"},
        {"name": "Bruno Soares", "state": "BA", "age": "32"},
        {"name": "Carlos Alberto Victorino Junior", "state": "", "age": ""},
        {"name": "Carlos Mendes", "state": "PE", "age": "19"},
        {"name": "Carolina Daniel", "state": "", "age": ""},
        {"name": "Cristian Soares", "state": "RN", "age": "19"},
        {"name": "Domynik Vieira", "state": "MG", "age": "22"},
        {"name": "Edla Câmara", "state": "PE", "age": "21"},
        {"name": "Edwedja Lima", "state": "PE", "age": "27"},
        {"name": "Everton Reis", "state": "BA", "age": "24"},
        {"name": "Felipe Luiz Pontes de Andrade", "state": "SP", "age": "28"},
        {"name": "Felipe Rodrigues Garé Carnielli", "state": "", "age": ""},
        {"name": "Filipe Ferreira", "state": "PE", "age": "35"},
        {"name": "Francisco Márcio", "state": "CE", "age": "19"},
        {"name": "Gabriela Di Poggio", "state": "BA", "age": "24"},
        {"name": "Genilson Cavalcante de Oliveira", "state": "PB", "age": "19"},
        {"name": "Igor Ruiz de França", "state": "", "age": ""},
        {"name": "Ismália Santiago", "state": "", "age": ""},
        {"name": "Israel Cena developer", "state": "RJ", "age": "31"},
        {"name": "Jonatan Marques", "state": "RJ", "age": "25"},
        {"name": "Jordanny Alves Mizukoshi", "state": "GO", "age": "24"},
        {"name": "José Biaggio", "state": "SP", "age": "26"},
        {"name": "João Woigt Azevedo", "state": "SP", "age": "23"},
        {"name": "Jéferson Alves", "state": "SP", "age": "34"},
        {"name": "Kevin Junior Antonio Neves", "state": "PR", "age": "32"},
        {"name": "Leidson Oliveira", "state": "MG", "age": "33"},
        {"name": "Lourene Camargo", "state": "RJ", "age": "38"},
        {"name": "Luca Simaque Souza", "state": "SP", "age": "23"},
        {"name": "Lucas Suplino", "state": "RJ", "age": "29"},
        {"name": "Luiza Frota", "state": "RJ", "age": "19"},
        {"name": "Marla Ingridh", "state": "", "age": ""},
        {"name": "Mattheus Alexandre de Fabbio", "state": "", "age": ""},
        {"name": "Miller Raycell", "state": "", "age": ""},
        {"name": "Muriel Delvaux", "state": "", "age": ""},
        {"name": "Murilo Melo", "state": "RJ", "age": "29"},
        {"name": "Paulo Guilherme Damasceno", "state": "CE", "age": "24"},
        {"name": "Pedro H P Ricardo", "state": "RJ", "age": "21"},
        {"name": "Rafael Almeida", "state": "DF", "age": "30"},
        {"name": "Rafael Oliveira", "state": "RJ", "age": "30"},
        {"name": "Rafaela de Moraes Papale", "state": "MG", "age": "21"},
        {"name": "Renan Gonçalves", "state": "RJ", "age": "22"},
        {"name": "Samuel Alves", "state": "", "age": ""},
        {"name": "Samuel Cruz", "state": "CE", "age": "24"},
        {"name": "Samuel Giacomelli Bruing", "state": "RS", "age": "18"},
        {"name": "Tainá Silveira Leal", "state": "BA", "age": "28"},
        {"name": "Thiago Henrique Assi", "state": "SP", "age": "21"},
        {"name": "Vitor Henrique Grego Zillig", "state": "RS", "age": "18"}
    ]
};

function countStudents (objData) {
    return objData.students.length;
}

function averageAge (objData) {
    let n = objData.length;
    let sum = 0;
    for (let data of objData){
        sum += parseInt(data.age);
    }

    return sum / n;
}

function countStudentState (objData) {
    return objData.length;
}


function main (dados) {

    let stateName = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 
                     'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
                     'RN', 'RS', 'RJ', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    
    let numeroStates = 0;
    let avegareAgeState = 0;
    let totalStudentsState = 0;
    let totalStudents = countStudents(dados);
    let infos = {
        'total': 0,
        'stateCount': 0,
        'infosPerState': [],
    };

    let objAux = {};

    infos['total'] = totalStudents;

    // remove the students without response
    let students = dados.students.filter(({state}) =>{
        return state != '';
    })

    for (let stateInitials of stateName){

        let x = dados.students.filter(({state}) =>{
            return state == stateInitials;
        })

        if ( x.length !== 0){
            numeroStates += 1;
            avegareAgeState = averageAge(x);
            totalStudentsState = countStudentState(x);

            objAux[stateInitials] = {
                'totalStudents': totalStudentsState,
                'averageAge': avegareAgeState,
            }
        }
    }

    infos['stateCount'] = numeroStates;
    infos['infosPerState'].push(objAux);

    return infos
}


console.log(main(dados));
console.log(main(dados)['infosPerState'])