/*Задание 3: Вычислите среднее арифметическое трех целочисленных значений
и выведите его на экран.*/

var a = prompt("Input a value", "0"); //a - будет строкового типа
document.write("Введена переменная a = " + a + "<br/>");

var b = prompt("Input b value", "0"); //b - будет строкового типа
document.write("Введена переменная b = " + b + "<br/>");

var c = prompt("Input c value", "0"); //c - будет строкового типа
document.write("Введена переменная с = " + c + "<br/>");

var result = (a + b + c) / 3;
document.write("(a + b + c) /3 = будет строкового типа = результат неверен! = " + result + "<hr/>");

/*Конвертация строкового значения в числовое:
parseFloat() конвертация в вещественное значение.
parseInt() конвертация в целочисленное значение.
Данные функции возвращают значение NaN если конвертация не удалась.*/

var integerA = parseInt(a);
var integerB = parseInt(b);
var integerC = parseInt(c);

result = (integerA + integerB + integerC) / 3;
document.write("(a + b + c) /3 = конвертируем строковое значение в числовое = " + result + "<br/>" + "<hr/>");


var a = 25;
var b = 50;
var c = 15;
var res;
document.write("var a = 25; var b = 50 ; var c = 15: " + "<br/>");

res = (a + b + c) / 3;
document.write("(a + b + c) / 3 = " + res + "<br/>" + "<hr/>");
