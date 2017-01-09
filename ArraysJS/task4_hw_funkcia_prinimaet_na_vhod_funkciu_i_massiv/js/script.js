/*Задание4: Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.

Пример:
function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // [] пустой массив

Обрати внимание: функция не должна изменять переданный ей массив:

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3] */


function map(fn, array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[i] = fn(array[i]);
    };
    return newArray;
}

function square(x) { return x * x; } 
var arr = [2, 3, 5, 8];

document.write("Выводим сам массив: " + arr + "<hr />");
document.write("Возведение в квадрат: " + map(square, arr) + "<hr />");
document.write("Возведение в квадрат пустого массива: " + map(square, []) + "<hr />");
