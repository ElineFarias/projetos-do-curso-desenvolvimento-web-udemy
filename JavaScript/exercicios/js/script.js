/*var a = 10
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
para o usuário. 

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

 var exibirSaudacao = function(nome) {
   document.write('Olá' + ' '+ nome+ '  '+ 'tudo bem ?' )
 }
 exibirSaudacao('Eline')
 document.write('<br>')
 document.write('<br /><hr />')
 

 var data =  new  Date()
 document.write(data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear())
 document.write('<br>')
 document.write('<br>')
document.write(data.toString())
*/



/*
1) Crie uma aplicação para efetuar cálculo aritméticos de soma e subtração.
Considere os seguintes critérios:
1) Ao executar o script a aplicação deve solicitar a entrada de um número, seguido de
uma operação de soma ou subtração e posteriormente seguido de um segundo
número.
2) A operação deve ser inserida pelo usuário de forma textual, ou seja, quando o sistema
solicita a operação o usuário deve informar o texto ‘soma’ ou ‘subtração’ (sem as
aspas).
3) Na sequência o sistema deve enviar os parâmetros para uma função efetuar o devido
cálculo. Exemplo: calculo(num1, num2, operacao).
4) A função deve executar o cálculo com base na operação informada pelo usuário e na
sequência deve retornar o valor encontrado.
5) Ao término o sistema deve fornecer a seguinte saída para o usuário:
“O resultado é: <resultado>.”
*A informação em vermelho é uma variável e deve ser substituída pelo seu respectivo valor
calculada dentro da aplicação. 
*/

var numeroA  =  prompt('Digite o Primeiro Número')
var operacao =  prompt('Digite a operação soma ou subtracao')
var numeroB =  prompt('Digite o Segundo Número')

function calcular( numero1,numero2,operacao) {
  numero1=parseFloat(numero1)
  numero2=parseFloat(numero2)
  var resultado = 0
  if (operacao == 'soma'){
    resultado =  numero1 + numero2
  } else if (operacao === 'subtracao') {
    resultado =  numero1 - numero2
  } else {
    document.write('Operação Inválida')
  }
  return resultado
}
document.write('O resultado é:' + calcular(numeroA, numeroB, operacao));

