// задача 4.2:
// Дано целое положительное число N. Найти сумму квадратов 
//всех натуральных чисел от 0 до N.

/*
prompt() - для получения данных от пользователя
parseInt ()-переводит строковые данные в числовые
if - условие 
alert() - чтобы вывести результат 

как решать:
*/

var numberString= prompt("Введите число");
var N = parseInt(numberString);

var squareSumm=0;

  for (var count = 0; count<=N; count= count+1){
    if(count>0){
      var square = count*count;
      squareSumm = squareSumm+square;
    }
  }

  alert("Cумма квадратов до N= " + N + "равна " + squareSumm);