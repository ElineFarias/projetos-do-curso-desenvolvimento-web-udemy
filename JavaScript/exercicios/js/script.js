var a = 10
var b = 20
var c = null

document.write('A:' + a + '<br />')
document.write('B:' + b + '<br />')
document.write('C:' + c + '<br />')
document.write('<hr />')
var c = b
var b = a
var a = c
var c = null

document.write('A:' + a + '<br />')
document.write('B:' + b + '<br />')
document.write('C:' + c + '<br />')

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
var a, b; //Declara ambos a & b para hoisting
/* Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo
usuário. Considere os seguintes critérios:
Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”.
Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”.
Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”.
Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.
Fique à vontade para utilizar qualquer uma das funções aprendidas para exibição de dados
para o usuário. */

const idade = prompt("Digite sua idade:");
//alert(`Sua idade ${idade} anos`);
 if (idade  >= 0 && idade < 15) {
   alert ('Criança')
 } else if (idade >= 15 && idade < 30) {
   alert ('Jovem')
 } else if ( idade >= 30 && idade < 60) {
   alert ('Adulto')
 } else {
   alert ('Idoso')
 }
