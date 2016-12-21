/*Задание: Создать программу, которая принимает значение от пользователя,
    а затем выводит случайное число от 1 до числа, что ввел пользователь.
    Нужно вывести случайное число от 1 до ... включительно.*/

/*Для решения задачи используем формулу, написанную ниже:
Returns a random integer between min (included) and max (included)
return Math.floor(Math.random() * (max - min + 1)) + min;*/

var stringNum = prompt("Введите число: ", "1");
var integerNum = parseInt(stringNum);
var randomNum = Math.floor(Math.random() * (integerNum - 1 + 1)) + 1;
document.write("Случайное число от 1 до " + integerNum + " = " + randomNum);
