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