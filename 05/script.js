// задача 05:
// Даны 3 целых числа. Вывести наибольшее из них. 
/*
prompt() - для получения данных от пользователя
parseInt ()-переводит строковые данные в числовые
if - условие 
else if - условие 
alert() - чтобы вывести результат 

как решать:
получим первое число
получим второе число
получим третье число

maxNumber = x

если maxNumber < y, тогда maxNumber = y
если maxNumber < z, тогда maxNumber =z
x y z 
5 6 2
*/

var firstNumberString= prompt("Введите первое число");
var secondNumberString= prompt("Введите второе число");
var thirdNumberString = prompt("Введите третье число");

var firstNumber = parseInt(firstNumberString);
var secondNumber= parseInt(secondNumberString);
var thirdNumber = parseInt(thirdNumberString);

var maxNumber=firstNumber;

if (maxNumber<secondNumber){
  maxNumber=secondNumber;
}
if (maxNumber<thirdNumber){
  maxNumber=thirdNumber;
}
alert("Максимальное число = " +maxNumber);