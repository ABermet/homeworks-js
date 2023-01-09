// задача 01:
// THIS Пользователь вводит 2 числа, вывести квадрат каждого числа.
/*
prompt() - для получения данных от пользователя
parseInt ()-переводит строковые данные в числовые
* - умножение
alert() - чтобы вывести результат 

как решать:
получить первое число
получить второе число

возвести в квадрат первое число
и вывести квадрат первого числа
возвести квадрат второе число
и вывести квадрат второго числа
*/

// получили числа
var firstNumberString = prompt("Введите первое число");
var secondNumberString = prompt("Введите второе число");

//из стороковых начений перевели в числовые
var firstNumber= parseInt(firstNumberString);
var secondNumber= parseInt(secondNumberString);

// возведение в квадрат два варианта, умножить на себя и возвести во 2 степень
var squareOfFirstNumber = firstNumber * firstNumber;
var squareOfSecondNumber = secondNumber **2;

//выведение результата
alert("Квадрат первого числа ="+squareOfFirstNumber);
alert("Квадрат второго числа=" +squareOfSecondNumber);