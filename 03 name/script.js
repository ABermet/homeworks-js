// задача 03:
// THIS Пользователь вводит свое имя и число (место буквы).
 //Надо вывести какая буква находится под этим номером (числом).
/*
prompt() - для получения данных от пользователя
parseInt ()-переводит строковые данные в числовые
alert() - чтобы вывести результат 

как решать:
получим имя
получим число
потом получим букву по числу
выведем букву

Галадриель
*/

var NameString = prompt("Введите имя");
var indexString = prompt("Введите число");

var index = parseInt(indexString);
var indexForNormalPeople = index-1;

var bukva = NameString[indexForNormalPeople];
alert("Ваше имя " + NameString+ "и число которое вы ввели "+ index+ "ваша буква =" + bukva);