/*Задание6: Вывести простые числа.
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
Создайте функцию, которая выводит все простые числа из интервала, который задает пользователь.*/

var a = +prompt("Введите число:", 1)
var b = +prompt("Введите еще одно число, больше первого:", 1)
var res = "";
showPrime(); // вызов функции
document.write("Из интервала введенных чисел: " + a + " и " + b + " простые числа = " + res + "<br />" + "<hr />");

function showPrime() {
    metka: 
    for (var i = a; i < b; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue metka; // используем метку, чтобы перейти на следующую итерацию внешнего цикла
        }
        res = res + i + " , ";
    }
}
