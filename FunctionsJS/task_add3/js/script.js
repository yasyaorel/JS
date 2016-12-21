 /*Задание: Напишите функцию, которая будет принимать число и определять:
 1. Является ли введенное число положительным или отрицательным.
 2. Является ли оно простым
 3. Делится ли оно на 2, 5, 3, 6, 9 без остатка*/

 var num = +prompt("Введите число", "0");
 document.write("Введена переменная num1 = " + num + "<br/>" + "<hr/>");

 function determine(a) {

     if (a > 0) {
         document.write("Число " + num + " больше 0, те оно - положительное <br/>" + "<hr/>");
     } else {
         document.write("Число " + num + " меньше 0, те оно - отрицательное <br/>" + "<hr/>");
     }

     if (a % 2 == 0) {
         document.write("Число " + num + " делится на 2 без остатка <br/>");
     } else {
         document.write("Число " + num + " не делится на 2 без остатка <br/>");
     }
     if (a % 5 == 0) {
         document.write("Число " + num + " делится на 5 без остатка <br/>");
     } else {
         document.write("Число " + num + " не делится на 5 без остатка <br/>");
     }
     if (a % 3 == 0) {
         document.write("Число " + num + " делится на 3 без остатка <br/>");
     } else {
         document.write("Число " + num + " не делится на 3 без остатка <br/>");
     }
     if (a % 6 == 0) {
         document.write("Число " + num + " делится на 6 без остатка <br/>");
     } else {
         document.write("Число " + num + " не делится на 6 без остатка <br/>");
     }
     if (a % 9 == 0) {
         document.write("Число " + num + " делится на 9 без остатка <br/>");
     } else {
         document.write("Число " + num + " не делится на 9 без остатка <br/>");
     }

     // 1 - это не простое число
     if (a == 1)
         return false;

     // ищем делители
     for (var b = 2; b * b <= a; b++) {

         // если после деления по модулю нет остатка
         if (a % b == 0)
             return false;
     }

     return true;
 }

 var res = determine(num);

 if (res) {
     document.write("Число " + num + " простое  <br/>" + "<hr/>");
 } else {
     document.write("Число " + num + " не простое  <br/>" + "<hr/>");
 }
