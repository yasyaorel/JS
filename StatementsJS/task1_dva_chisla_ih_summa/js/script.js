/*Задание1. Сумма чисел
Создайте страницу, которая предлагает ввести два числа и выводит их сумму.*/

var a = +prompt('Введите число', '0');
var b = +prompt('Введите число', '0');
document.write("var a = " + a + "<br/>" + "var b = " + b + "&nbsp" + "<br/>" + "<br/>");

var result = (a + b);
document.write("a + b = " + result + "<hr/>");
