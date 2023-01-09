// задача 05:
// Даны 3 вещественных числа a,b,c. Существует ли треугольник со сторонами a,b,c.

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

проверим первое правило - что все числы больше 0
проверим второе правило- что сумма двух маленьких сторон больше длины самой большой стороны
проверим третье правило-что каждая сторона треугольника меньше суммы двух других сторон
a - first, b-second, c-third
a+b > c
a + c > b
b + c > a
*/

var firstNumberString= prompt("Введите первое число");
var secondNumberString= prompt("Введите второе число");
var thirdNumberString = prompt("Введите третье число");

var firstNumber = parseInt(firstNumberString);
var secondNumber= parseInt(secondNumberString);
var thirdNumber = parseInt(thirdNumberString);

var triangleExist = false;

if(firstNumber>0 && secondNumber>0 && thirdNumber>0){
  if(firstNumber+secondNumber>thirdNumber &&firstNumber+thirdNumber>secondNumber
      &&secondNumber+thirdNumber>firstNumber)
      {
        triangleExist=true;
      }
      else{
        alert("треугольник не может существовать когда одна из сторон меньше или равна 0")
      }
}
if(triangleExist) {
  alert("Треугольник существует");
} else{
  alert("Треугольник не существует");
}
