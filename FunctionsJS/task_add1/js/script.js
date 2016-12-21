/*Задание по функциям:

1. Создайте метод с именем Calculate, который принимает в качестве
параметров три целочисленных значения и выводит на экран среднее
арифметическое этих параметров.

arguments.length - Cвойство содержашее число аргументов переданных в функцию.*/

var num1 = +prompt("Введите число", "0");
document.write("Введена переменная num1 = " + num1 + "<br/>");

var num2 = +prompt("Введите число", "0");
document.write("Введена переменная num2 = " + num2 + "<br/>");

var num3 = +prompt("Введите число", "0");
document.write("Введена переменная num3 = " + num3 + "<br/>" + "<hr/>");

function Calculate(a, b, c) {

    var res = (a + b + c) / arguments.length;

    document.write("Среднее арифметическое = " + res + "<br/>" + "<hr/>");
};

Calculate(num1, num2, num3);
