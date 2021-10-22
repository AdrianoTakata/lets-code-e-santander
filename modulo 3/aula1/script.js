class Clientes {
    nome;
    rg;
    cpf;
    idade;
    numeroConta;
    agencia;

    depositar(valor){
        console.log(`Você depositou em sua conta o valor de R$${valor}`);
    }

    sacar(valor){
        console.log(`Você sacou de sua conta o valo de R$${valor}`);
    }

    verSaldo(){
        console.log('O seu saldo é de ...?');
    }
}

class Conta extends Clientes {
    

}

const cliente1 = new Clientes();
cliente1.nome = 'Adriano';
cliente1.rg = '12345678-9';
cliente1.cpf = '123.456.789-01';
cliente1.idade = 30;
cliente1.numeroConta = '123.456-0';
cliente1.agencia = '0001';

cliente1.depositar(300);
cliente1.sacar(200);
cliente1.verSaldo();

const pessoa = {
    nome: 'Adriano',
    idade: 30,
    dizerOi: () => {
        console.log(`Oi, meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos`)
    }
}

const pessoa2 = {
    nome: 'Adriano',
    idade: 30,
    dizerOi: function () {
        setTimeout( () => {
            console.log(`Oi, meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
        }, 3000)
    }
}

pessoa2.dizerOi();

// call, apply e bind
// difference between call and apply is the args 
// pessoa2.dizerOi(this, arg1, arg2)
// pessoa2.dizerOi(this, [arg1, arg2])

// Functions

const CarFactory = (brand, model, year) => {
    return {
        brand: brand,
        model: model,
        year: year,
    }
}

const car = CarFactory('Chevrolet', 'Celta', 2005)

console.log(car)

function CarFactory2(brand, model, year) {
    this.brand = brand,
    this.model = model,
    this.year = year
}

const car2 = new CarFactory2('Chevrolet', 'Celta', 2005)

console.log(car2)

