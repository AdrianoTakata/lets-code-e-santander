// Falsy value : false, null, undefined, 0, ''

// Funções com array

const arr = ["item0", "item1", "item2", "item3"]

// push
arr.push("item4")
console.log(arr);

// pop
arr.pop()
console.log(arr);

// unshift
arr.unshift("item00")
console.log(arr);

//shift
arr.shift()
console.log(arr);

// indexOf
console.log(arr.indexOf('item3'))

// includes
console.log(arr.includes('item4'))

// slide --> não altera o array original
console.log(arr.slice(4,0))
console.log(arr)

// splice --> retorno os elementos excluidos
console.log(arr.splice(2, 0, 'item X'))
console.log(arr)

// ... --> spred operator
const arrX = arr
const arrY = [...arr] // quebra o conteúdo em pedacinho e monta outro array --> copia um array com endereço diferente.

// join
const v = arr.join('-')
console.log(v)

// concat 
const arr1 = [1,2]
const arr2 = [3,4]
console.log(arr1.concat(arr2))

// flat


// filter --> Higher order function --> ela recebem como parâmetro outras function
const arrK = [1, 2, 3, 4, 5]
const filteredItems = arrK.filter()

// laço de repetição -- for, for in, for of, while
const arr = ['azul', 'rosa', 'roxo', 'purpura', 'vermelho']

const productsPrice = [28, 33, 42, 14, 10, 88, 95, 100, 29];

let n = productsPrice.length;
let soma = 0;
for (let i=0; i< n; i++){
    soma += productsPrice;
}

console.log(soma/n)