// задача 3.3:
// Дано 3 целых числа. Вывести их в порядке возрастания.

/*
prompt() - для получения данных от пользователя
parseInt ()-переводит строковые данные в числовые
if - условие 
alert() - чтобы вывести результат 

как решать:

*/

var firstNumberString= prompt("Введите первое число");
var secondNumberString= prompt("Введите второе число");
var thirdNumberString = prompt("Введите третье число");

var firstNumber = parseInt(firstNumberString);
var secondNumber= parseInt(secondNumberString);
var thirdNumber = parseInt(thirdNumberString);

    if (firstNumber>secondNumber && firstNumber>thirdNumber && secondNumber>thirdNumber)
    console.log(firstNumber, " ", secondNumber, " ", thirdNumber);  
    else if(secondNumber>firstNumber && secondNumber>thirdNumber && firstNumber>thirdNumbert)
    console.log(secondNumber, " ", firstNumber, " ", thirdNumber);
  else if(thirdNumber>firstNumber && thirdNumber>secondNumber && firstNumber>thirdNumber)
  console.log(thirdNumber, " ", firstNumber, " ", secondNumber);
  else if(secondNumber>firstNumber && secondNumber>thirdNumber && thirdNumber>firstNumber)
  console.log(secondNumber, " ", thirdNumber, " ", firstNumber);
  else(thirdNumber, " ", secondNumber, " ", firstNumber);
