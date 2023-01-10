"use strict"
// // console.log('Привет Вася'); var - старая врсия let - новая

// message 
// const quantity = 2
// // let quantity = 2

// quantity = 4
 
// alert(quantity)

// let firstNum = 5;
// let secondNum =2;

// console.log(firstNum < secondNum ) //false
// console.log(firstNum === secondNum ) //для сравнения импользовать всегда тройное ===
// console.log(firstNum !== secondNum ) // превращает тру в фолс и наоборот 

// let firstNum = 1;
// let secondNum = 10;

// if(firstNum < secondNum) {
// console.log(firstNum,'меньше чем', secondNum)
// }


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

let arg2 = prompt('Введи второе число: ');
if (arg2.length == 0 || arg2.indexOf(' ') != -1) {
    alert('Некорректный ввод второго числа!');
}
// Проверка на NaN
if (isNaN(Number(arg2))) {
    alert('Это не число -____-');
}

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