/*
//-------Hoists-----------

//Exemplo 1 - Não eleva (hoist)
var x = 1; // Inicializa x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialize y
//Isso não funcionará, pois o JavaScript apenas eleva declarações

//Example 2 - Hoists
var num1 = 3; //Declara e inicializa num1
num2 = 4; //Inicializa num2
console.log(num1 + " " + num2); //'3 4'
var num2; //Declara num2 para hoisting

//Example 3 - Hoists
a = 'Cran'; //Inicializa a
b = 'berry'; //Inicializa b
console.log(a + "" + b); // 'Cranberry'
var a, b; //Declara ambos a & b para hoisting */

//--------------------Novas features------------------------------------------------//
/*
//Arrow Functions inicio
// Em javaScript
function sum(a, b) {
  return a + b
}
 x = sum(1, 2)
 console.log(x) //3

 //Com ES6
const sum2  =  (a, b) =>   a + b

y = sum2(3, 4)
console.log(y) //7

//js
function isAdult(age) {
  return age >= 18
}
a = isAdult(4)
document.write('a:' + a + '<br />')

//ES6
const isAdult2  =  age => age >= 18
b =  isAdult2(20)
document.write('b:' + b + '<br />')

//js
document.addEventListener('click', function () {
  console.log('clicked')
})

//ES6
document.addEventListener('click', ( ) => console.log('clickedComES6'))


 // arrow function this
class Person {
  constructor(name) {
    this.name = name
  }

  //js
printNameFunction( ) {
  setTimeout(function( ) {
    console.log(this.name)
  },100);
}
//Ecma
printNameArrowFunction( ) {
  setTimeout( ( ) => {
    console.log(this.name)
  },100);
}
}
const creature = new Person('Maria') 
// define this com base onde a função é chamada
creature.printNameFunction( ) // vazio
creature.printNameArrowFunction( ) // maria

//Arrow Functions fim
*/

















/*

//métodos  map, filter e reduce inicio
// método map
// coleção com dois produtos
const produtos = [
  {
    nome: "notebook",
    preco: 2100 //dolar
  },

  {
    nome: "smartphone",
    preco:400
  }
]

const ProdutosEmReais =  produtos.map( p => p.preco * 5) 
//  criando uma nova coleção; referenciar o produto que recebe uma função callback como parametro
// função callback argumento
console.log(ProdutosEmReais)
//console.log(produtos)

// método reduce 
const produtosReduce = [
  {
    nome: "notebook",
    preco: 2100
  },

  {
    nome: "smartphone",
    preco:400
  }
]
 const total  =  produtosReduce. reduce((a, b)  => a  + b.preco, 0) //  a é o acumulador  b item a ser processador e 0 valor inicial
 console.log(total)

 // filter
 const  valoresQuaseAleatorios = [ 2, 4, 6, 89, 2, 5, 7, 4, 89, 0, 98]
  const valoresRepetidos =  valoresQuaseAleatorios.filter((  elematual, indexelematual, arr) =>  arr.indexOf(elematual) === indexelematual) 
  //O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
  console.log (valoresRepetidos)   
  //métodos  map, filter e reduce fim
  */
  
















/*

//métodos  some - every- find  inicio
// método some
//testar se algum elemento de um array é maior que 10.
function isBiggerThan10(currentValue, index, arr) {
  return currentValue > 10;
}
 
console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  // false
console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true


//método every
//testar se todos os elementos de um array são maiores que 10.
function isBigEnough(currentValue, index, arr) {
  return currentValue >= 10;
}
console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

//método find
//encontrar um objeto em um array através de uma de suas propriedades.
var inventory = [
  {name: 'jaca', quantity: 2},
  {name: 'banana', quantity: 0},
  {name: 'cereja', quantity: 5}
];

function isCherries(fruit, index, arr) { 
  return fruit.name === 'cereja';
}
console.log(inventory.find(isCherries)); // { name: 'cereja', quantity: 5 }


//métodos  some - every- find  fim
*/
















//Comandos const e let, entre outros. - identificadores de variáveis inicio
// let
function returnCar() {

  let car = 'Land Rover';

  if (car === 'Land Rover') {

      let car = 'Ferrari';

      console.log('Dentro do if: ' + car);

  }

  console.log('Fora do if: ' + car);

}

c = returnCar( )
//console.log(c)
// const
const numero = 1;
//numero = "1";

console.log(numero); 
// criando o objeto pessoa
const pessoa = {
  nome: 'Diego',
  idade: 26
}

pessoa.sobrenome = 'Pinho'; // inserindo nova propriedade ao objeto

console.log(pessoa);

//Comandos const e let, entre outros. - identificadores de variáveis fim
