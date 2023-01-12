"use strict"
let arg1 = prompt('Введи первое число: ');
if (arg1.length == 0 || arg1.indexOf(' ') != -1) {
    alert('Некорректный ввод первого числа!');
}
// Проверка на NaN
if (isNaN(Number(arg1))) {
    alert('Это не число -____-');
}

let operator = prompt('Введи знак ( +, -, * или / ): ');
if (operator.length == 0 || operator.indexOf(' ') != -1) {
    alert('Некорректный ввод знака!');
}
// if (operator != '+') {
//     alert('Некорректный ввод знака!');
// }


switch(operator) {
    case '+':  
        alert(+arg1 + +arg2);
        break;
    case '-':
        alert(+arg1 - +arg2);
        break;
    case '*':
        alert(+arg1 * +arg2);
        break;
    case '/':
        alert(+arg1 / +arg2);
        break;
    default:
        alert('Я не могу это посчитать -______-');
}