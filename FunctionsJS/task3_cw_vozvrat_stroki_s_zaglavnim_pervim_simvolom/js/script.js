/*Задание3: Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
ucFirst("вася") == "Вася";
ucFirst("") == ""; // нет ошибок при пустой строке
P.S. В JavaScript нет встроенного метода для этого. Создайте функцию, используя toUpperCase() и charAt().*/

/*Метод toUpperCase (String) в JavaScript преобразует все буквы в строке к прописным.
Метод toUpperCase не применяется к знакам, отличным от букв.*/

/*Метод charAt (String) в JavaScript возвращает символ по указанному индексу.
Метод charAt возвращает символьное значение, представляющее символ,
расположенный по указанному индексу index. Первый знак строки имеет индекс 0,
второй — индекс 1 и т. д. При указании значения index, выходящего за пределы
допустимого диапазона, возвращается пустая строка. */


 


var originStr = prompt ("Как вас зовут?");
if (originStr == "") {
    alert("Вы забыли ввести своё имя!");
} else {
    convertedString = ucFirst(originStr);
    document.write("Вы ввели имя: " + convertedString + "<hr/>");
}

function ucFirst(str) {
	var firstChar = str.charAt(0);
	var ucFirstChar = firstChar.toUpperCase();
	var tempStr = str.slice(1);
	var returnString = ucFirstChar + tempStr;
	return returnString;
}