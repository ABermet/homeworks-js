// задача 01:
// THIS Напишите программу, которая запрашивает у пользователя вес в килограммах и
//конвертирует его в фунты. В килограмме 2,2 фунта.
/*
prompt() - для получения данных от пользователя
parseInt ()-переводит строковые данные в числовые
* - умножение
** - возведение в степень
alert() - чтобы вывести результат 

как решать:
получим число от пользователя (какой то вес в кг)
умножим число на 2,2
выведем результат
*/
// получаем число, вес в кг
var weightInKgsString = prompt("Введите вес в килограммах");

// переводим в числовое
var weightInKgs = parseInt(weightInKgsString);
// умножаем на 2.2 = это в фунтах
var weightInPounds = weightInKgs* 2.205;
// выводим результат 
alert("Вес в фунтах =" +weightInPounds);