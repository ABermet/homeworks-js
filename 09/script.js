// задача 01-5:
//Напишите программу, которая просит пользователя ввести три числа 
//(используйте три отдельных оператора ввода). Создайте переменные с именами
// total и average, которые содержат сумму и среднее значение трех чисел,
// и распечатайте значения total и average.
/*
prompt() - для получения данных от пользователя
parseInt ()-переводит строковые данные в числовые
alert() - чтобы вывести результат 

как решать:
получим первое число 
получим второе число
получим третье число
вывести сумму трех чисел
вывести среднее значение трех чисел
вывести результат
*/

var firstNumberString = prompt("Введите первое число");
var secondNumberString = prompt("Введите второе число");
var thirdNumberString= prompt("Введите третье число");

var firstNumber= parseInt(firstNumberString);
var secondNumber= parseInt(secondNumberString);
var thirdNumber=parseInt(thirdNumberString);

var totalOfNumbers = firstNumber + secondNumber+ thirdNumber;
var averagePopularity= ((firstNumber + secondNumber+ thirdNumber)/3);

alert("сумма трех чисел ="+totalOfNumbers);
alert("Среднее трех чисел=" +averagePopularity);
