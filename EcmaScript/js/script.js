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

//---------------Novas features--------------------
//Arrow Functions
// Em javaScript
function sum(a, b) {
  return a + b
}
 x = sum(1, 2)
 console.log(x)
 //Com ES6
const sum2  =  (a, b) =>   a + b

y = sum2(3, 4)
console.log(y)

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

printNameFunction() {
  setTimeout(function() {
    console.log(this.name)
  },100);
}

printNameArrowFunction( ) {
  setTimeout( ( ) => {
    console.log(this.name)
  },100);
}
}
const creature = new Person('Maria') 
creature.printNameFunction()
creature.printNameArrowFunction()

//Funções map, filter e reduce;
// map
const produtos = [
  {
    nome: "notebook",
    preco: 2100
  },

  {
    nome: "smartphone",
    preco:400
  }
]

const ProdutosEmReais =  produtos.map( p => p.preco * 5)
console.log(ProdutosEmReais)
console.log(produtos)

//reduce 
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
//Funções some e every;
//Função find;
//Comandos const e let, entre outros.

