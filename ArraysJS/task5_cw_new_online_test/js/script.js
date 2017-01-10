/*Задание1: Усовершенствовать “Онлайн тест” с урока про массивы.
Вывести не только количество правильных ответов,
но и вывести список вопросов на которые правильно ответили и список с неправильными ответами.

Создать простой работающий “Онлайн тест”.
Вопросы и ответы хранятся в двумерном массиве.
Результат выводим на страницу: You got 1 question(s) right. */

var test = [
    ["Сколько секунд в минуте?", "60", false],
    ["Квадратный корень из числа 64?", "8", false],
    ["Сколько градусов показывает стрелка часов, когда на часах 15-00?", "90", false],
    ["Какой по счету месяц Июнь?", "6", false],
    ["Сколько часов в сутках?", "24", false]
];
var result = 0;
for (var i = 0; i < test.length; i++) {
    var answer = prompt(test[i][0]);
    if (answer == null || answer == "") {
        answer = " ";
    }
    if (answer == test[i][1]) {
        result++;
    } else {
        test[i][2] = answer;
    }

}

switch (result) {
    case 1:
        {
            document.write("<img src='images/verybad.jpg'/>" + "<br />");
            document.write("VERY BAD!");
        };
        break;

    case 2:
        {
            document.write("<img src='images/soso.jpg'/>" + "<br />");
            document.write("SO SO!");

        };
        break;

    case 3:
        {
            document.write("<img src='images/notbad.png'/>" + "<br />");
            document.write("NOT BAD!");
        };
        break;

    case 4:
        {
            document.write("<img src='images/good.jpg'/>" + "<br />");
            document.write("GOOD!");
        };
        break;

    case 5:
        {

            document.write("<img src='images/excellent.jpg'/>" + "<br />");
            document.write("EXCELLENT!");
        };
        break;

    default:
        {
            document.write("<img src='images/verybad.jpg'/>" + "<br />");
            document.write("VERY BAD!");
        };
}

document.write("<b> You got " + result + " question(s) right!</b>" + "<br />" + "<br />");

if (result > 0) {
    document.write("<b>You gave right answer on this question(s): </b>" + "<br />");
    for (var i = 0; i < test.length; i++)
        if (!test[i][2]) {
            document.write(test[i][0] + "<br />");
        }
    document.write("<br />");
}
if (result != test.length) {
    document.write("<b>You gave wrong answer(s) to the question(s): </b>" + "<br />");
    for (var i = 0; i < test.length; i++)
        if (test[i][2]) {
            document.write(test[i][0]);
            document.write("<b> Your wrong answer: </b>" + test[i][2] + "<br />");
        }
    document.write("<hr />");
}
