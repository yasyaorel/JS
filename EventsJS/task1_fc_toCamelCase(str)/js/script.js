/*Задание1: Напишите функцию toCamelCase(str), которая преобразует строки вида "my-short-string" в "myShortString".
То есть, дефисы удаляются, а все слова после них получают заглавную букву.
Например:
 toCamelCase('background-color'); //'backgroundColor';
 toCamelCase('list-style-image'); //'listStyleImage';
 toCamelCase('-webkit-transition'); //WebkitTransition';

 P.s. Ва пригодятся методы строк charAt, split и toUpperCase.


 * Метод charAt возвращает символьное значение, представляющее символ,
 расположенный по указанному индексу index. Первый знак строки имеет
 индекс 0, второй — индекс 1 и т. д. При указании значения index,
 выходящего за пределы допустимого диапазона, возвращается пустая строка.

 * Метод split(s) позволяет превратить строку в массив, разбив ее по разделителю s.

 * Метод toUpperCase() возвращает строку в верхнем регистре. 

 * Метод substring(start, end) возвращает подстроку с позиции start до, но не включая end.
 substring(start [, end]) */


function toCamelCase(str) {
	var arr = str.split("-");
	var resultStr = arr[0];
	for (var i = 1; i < arr.length; i++) {
		resultStr += arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
	}
	return resultStr;
}

document.write("toCamelCase('background-color') = " + toCamelCase('background-color') + "<br />");
document.write("toCamelCase('list-style-image') = " + toCamelCase('list-style-image') + "<br />");
document.write("toCamelCase('-webkit-transition') = " + toCamelCase('-webkit-transition') + "<br />");
document.write("<hr />");
