/*Дополнительное задание: Создайте две переменные типа Number и выведите на экран
результаты всех арифметических операций над этими двумя переменными.*/

var a = 10;
var b = 2;
var res;
document.write("var a = 10; var b = 2: " + "<br/>" + "<br/>");

res = a + b;
document.write("a + b = " + res + "<br/>");

res = a - b;
document.write("a - b = " + res + "<br/>");

res = b - a;
document.write("b - a = " + res + "<br/>");

res = a * b;
document.write("a * b = " + res + "<br/>");

res = a / b;
document.write("a / b = " + res + "<br/>");

res = b / a;
document.write("b / a = " + res + "<br/>" + "<hr/>");


/*Задание 4: Напишите программу расчета объма - V и площади поверхности - S цилиндра.
Объем V - цилиндра радиусом - r и высотой - h, вычисляется по формуле: V = π r2 h.
Площадь S поверхности цилиндра вычисляется по формуле: S = 2π rh + 2π r2 = 2π r (r+h).
Результаты расчетов выведите на экран.*/

var p = 3.14;
var r = 3;
var h = 5;
var res;
document.write("var p = 3.14; var r = 3; var h = 5: " + "<br/>" + "<br/>");

res = p * (r * r) * h;
document.write("объем цилиндра V = " + res + "<br/>");

res = 2 * p * r * h + 2 * p * (r * r);
document.write("площадь поверхности цилиндра S = " + res + "<br/>");

res = 2 * p * r * (r + h);
document.write("площадь поверхности цилиндра S = " + res + "<br/>" + "<hr/>");


/*Задание: Создайте 3 переменные x = 6, y = 15, z = 4.
Выполните и отобразите результат следующих операций для этих переменных:*/

var x = 6;
var y = 15;
var z = 4;
var res;
document.write("var x = 6; var y = 15; var z = 4: " + "<br/>" + "<br/>");

res = x += y - x++ * z;
document.write("x += y - x++ * z = " + res + "<br/>");

res = z = --x - y * 5;
document.write("z = -- x - y * 5 = " + res + "<br/>");

res = y /= x + 5 % z;
document.write("y /= x + 5 % z = " + res + "<br/>");

res = z = x++ + y * 5;
document.write("z x++ + y * 5 = " + res + "<br/>");

res = x = y - x++ * z;
document.write("x = y - x++ * z = " + res + "<br/>");
