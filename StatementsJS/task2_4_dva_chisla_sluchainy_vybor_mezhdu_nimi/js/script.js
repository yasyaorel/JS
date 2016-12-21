/*Задание: Создать программу, которая принимает два значение от пользователя,
а затем выводит случайное число от первого до второго числа, что ввел пользователь.
Нужно вывести случайное число от ... и до ... включительно.*/

/*Для решения задачи используем формулу, написанную ниже:
Returns a random integer between min (included) and max (included)
return Math.floor(Math.random() * (max - min + 1)) + min;*/

var stringNum1 = prompt("Введите число: ", "1");
var integerNum1 = parseInt(stringNum1);
document.write("Введено число: " + integerNum1 + "<br/>" + "<hr/>");

var stringNum2 = prompt("Введите еще одно число: ", "1");
var integerNum2 = parseInt(stringNum2);
document.write("Введено число: " + integerNum2 + "<br/>" + "<hr/>");

var randomNum = Math.floor(Math.random() * (integerNum2 - integerNum1 + 1)) + integerNum1;
document.write("Сгенерированно случайное число: " + randomNum);
