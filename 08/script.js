// задача 01-2:
//Дано число x. Выведите x, 2x, 3x, 4x и 5x, разделенных тремя дефисами, как показано ниже.


/*
prompt() - для получения данных от пользователя
parseInt ()-переводит строковые данные в числовые
alert() - чтобы вывести результат 

как решать:
получим первое число 
полученное число умножить на 2, 3, 4, 5
вывести результат 
*/

var firstNumberString = prompt("Введите первое число");

var firstNumber= parseInt(firstNumberString);

let squareOfNumber= "---";

var squareOfFirstNumber = firstNumber;
squareOfFirstNumber = squareOfFirstNumber + squareOfNumber+firstNumber*2;
squareOfFirstNumber = squareOfFirstNumber + squareOfNumber + firstNumber*3;
squareOfFirstNumber = squareOfFirstNumber + squareOfNumber + firstNumber*4;
squareOfFirstNumber = squareOfFirstNumber + squareOfNumber +firstNumber*5;

alert("Результат первого числа ="+squareOfFirstNumber);
