/*Дополнительное задание 1: Написать функцию, которая принимает на вход массив
и возвращает последний элемент массива.*/

var arr = [1, 10, 7, 22];

function lastElement(arr1) {
	var elementNumber = arr1.length;
	return arr1[elementNumber - 1];
}
document.write("Массив: " + arr + "<br />");
document.write("Последний элемент массива: " + lastElement(arr) + "<hr />");