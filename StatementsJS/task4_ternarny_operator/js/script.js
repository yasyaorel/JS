/*Задание4. Перепишите if с использованием оператора '?':
if (a + b < 4) {  
result = 'Мало';
} else {  
result = 'Много';
}*/

var a = +prompt('Введите число', '0');
var b = +prompt('Введите число', '0');
document.write("var a = " + a + "<br/>" + "var b = " + b + "&nbsp" + "<br/>" + "<br/>");
result = (a + b < 4) ? "\"Мало\"" : "\"Много\"";

document.write(result);
