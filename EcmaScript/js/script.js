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
//Funções some e every;
//Função find;
//Comandos const e let, entre outros.

