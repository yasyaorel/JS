/*Написать функцию которая выводит случайное число от 1 до 6 (имитация игральных костей).

 		Для решения задачи используем формулу, написанную ниже:
        Returns a random integer between min (included) and max (included)
        return Math.floor(Math.random() * (max - min + 1)) + min;*/

var playing = confirm("Бросаем игральные кости?");
if (playing) {
    
    showRandomNum(); //Вызов функции
    
} else {
    document.write("Кости не бросали. Игра окончена!");

}

function showRandomNum() {
    var randomNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
       switch (randomNum) {
        case 1:
            {
                document.write("<img src='images/cube_01.png'/>");
            };
            break;

        case 2:
            {
                document.write("<img src='images/cube_02.png'/>");
            };
            break;

        case 3:
            {
                document.write("<img src='images/cube_03.png'/>");
            };
            break;

        case 4:
            {
                document.write("<img src='images/cube_04.png'/>");
            };
            break;

        case 5:
            {
                document.write("<img src='images/cube_05.png'/>");
            };
            break;

        case 6:
            {
                document.write("<img src='images/cube_06.png'/>");
            };
            break;

        default:
            {
                document.write("Кость стала на ребро!");
            };
    }

    alert("Выпало число " + randomNum);
    document.write("<br/>" + "<br/>" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "ВАШ РЕЗУЛЬТАТ: " + randomNum + "!" + "<br/>");
}






















































































