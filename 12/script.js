// задача 05:
// Пользователь вводит произвольное число N. Далее программа просит ввести N раз 
//числа на каждый ввод, выводится alert с сообщением
//что число четное (если делится на 2 без остатка) или нечетное.

/*
prompt() - для получения данных от пользователя
parseInt ()-переводит строковые данные в числовые
if - условие 
else if - условие 
alert() - чтобы вывести результат 

как решать:
получим первое число
полученное число разделить на 2

*/

var numberForLoopString= prompt("Введите число");
var numberForLoop = parseInt(numberForLoopString);

for (var count = 0; count<numberForLoop; count= count+1){
  var firstNumberString= prompt("Введите число");
  var firstNumber = parseInt(firstNumberString);
  if(firstNumber%2 == 0){
    alert("Ваше число четное")
  }
  if(firstNumber%2 == 1){
    alert("Ваше число не четное");
  }
}
