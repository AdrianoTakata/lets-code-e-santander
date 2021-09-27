
function media (preco) {
    let n = preco.length;
    //console.log(n);
    let soma = 0;
    for (let i=0; i< n; i++){
        soma += preco[i];
    }

    return soma / n;
}

const productsPrice = [28, 33, 42, 14, 10, 88, 95, 100, 29];
console.log(media(productsPrice))

function aprovadoOuReprovado (estudantes) {
    
    let n = estudantes.length;
    let x = {};
    let contador = 0;
    //console.log(n)

    for (let i=0; i<n; i++){
        if (estudantes[i].score > 5){
            x[i] = estudantes[i]
            contador += 1;
        }
    }

    return x
}

const students = [
        {name: 'Estudante 1', score: 8},
        {name: 'Estudante 2', score: 4},
        {name: 'Estudante 3', score: 1},
        {name: 'Estudante 4', score: 6},
        {name: 'Estudante 5', score: 10},
    ]

console.log(aprovadoOuReprovado(students));

function grauDeFeliciade (consumidores) {

    let n = consumidores.length;
    console.log('n = ' + n)
    let contador = 0;
    for (let i = 0; i<n; i++ ){
        console.log(consumidores[i].nps)
        if (consumidores[i].nps > 7){
            contador += 1;
        }
    }

    return (contador / n)*100
}


const customers = [
        {name: 'customer1', nps: 7},
        {name: 'customer2', nps: 3},
        {name: 'customer3', nps: 1},
        {name: 'customer4', nps: 7},
        {name: 'customer5', nps: 6},
        {name: 'customer6', nps: 9},
        {name: 'customer7', nps: 8},
        {name: 'customer8', nps: 1},
        {name: 'customer9', nps: 7},
        {name: 'customer10', nps: 7},
        {name: 'customer11', nps: 3},
        {name: 'customer12', nps: 1},
        {name: 'customer13', nps: 7},
        {name: 'customer14', nps: 6},
        {name: 'customer15', nps: 9},
        {name: 'customer16', nps: 8},
        {name: 'customer17', nps: 1},
        {name: 'customer18', nps: 7}
    ]

console.log(grauDeFeliciade(customers))