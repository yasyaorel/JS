/*Задание3: В объекте есть свойство className, которое содержит список "классов" - слов, разделенных пробелом.
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет.
Ваша функция не должна добавлять лишних пробелов.*/
var classes;
function addClass(obj, cls) {
	if (obj.className) {
		var classes = obj.className.split(' ');
	} else {
		var classes = [];
	};
	for (var i = 0; i < classes.length; i++) {
		if (classes[i] == cls) return; //класс уже есть
	}

	classes.push(cls); //добавить в список класс
	obj.className = classes.join(' '); //обновляем свойство
}

var obj = {
	className: 'open menu'
};

document.write("<p> obj.className = " + obj.className);
addClass(obj, 'new'); //obj.className='open menu new'
document.write("<p> addClass(obj, 'new'); obj.className = " + obj.className);
addClass(obj, 'open'); //без изменений
document.write("<p> addClass(obj, 'open'); obj.className = " + obj.className);
addClass(obj, 'me'); //obj.className='open menu new me'
document.write("<p> addClass(obj, 'me'); obj.className = " + obj.className);
console.log( obj.className ); //"Выводит сообщения в веб-консоль: open menu new me"
