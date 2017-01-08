/*Задание2: Усовершенствовать функцию случайного числа:
	вывести случайное число между двумя введенными пользователем*/

	/*Для решения задачи используем формулу, написанную ниже:
Returns a random integer between min (included) and max (included)
return Math.floor(Math.random() * (max - min + 1)) + min;*/

var operand1 = prompt("Введите число: ", "1");
operand1 = parseInt(operand1);
document.write("Введено число: " + operand1 + "<br/>" + "<hr/>");

var operand2 = prompt("Введите еще одно число, больше первого: ", "1");
operand2 = parseInt(operand2);
document.write("Введено число: " + operand2 + "<br/>" + "<hr/>");

function showRandomNum() {
	var randomNum = Math.floor(Math.random() * (operand2 - operand1 + 1)) + operand1;
	document.write("Сгенерированно случайное число: " + randomNum);
}

showRandomNum();
