/* Задание: Имитация игры: Орел и Решка.
    Нужно вывести случайное число от 0 до 1 включительно.

    Для решения задачи используем формулу, написанную ниже:
    Returns a random integer between min (included) and max (included)
    return Math.floor(Math.random() * (max - min + 1)) + min;*/

var playing = confirm("Поиграем в \"Орёл и Решка\"?");
if (playing) {
    var randomNum = Math.floor(Math.random() * (2 - 1 + 1)) + 1;


    switch (randomNum) {
        case 1:
            {
                document.write("\"РЕШКА\"!");
            };
            break;

        case 2:
            {
                document.write("\"ОРЁЛ\"!");
            };
            break;

        default:
            {
                document.write("Монета стала на ребро!");
            };
    }

    alert("Выпало значение " + randomNum);
    //document.write("Ваше число " + randomNum);    
} else {
    document.write("Монету не бросали. Игра окончена!");
}
