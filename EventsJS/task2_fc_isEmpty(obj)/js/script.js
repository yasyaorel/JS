/*Задание2: Создайте функцию isEmpty(obj), которая возвращает true,
если в объекте нет свойств и false - если хоть одно свойство есть.*/

var menuSetup = {
  width: 300,
  height: 200,
  title: "Menu"
};

var salaries = {};

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
document.write("Если в объекте есть свойства - " + " функция isEmpty(obj) возвращает: " + isEmpty(menuSetup) + "<br />");
document.write("Если в объекте нет свойств - " + " функция isEmpty(obj) возвращает: " + isEmpty(salaries) + "<hr />");

