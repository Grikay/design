// Объявление директивы
// 'use strict'

// let arg1;
// do {
//     arg1 = prompt('Введи первое число: ');
// } while(arg1.length === 0 || arg1.indexOf(' ') !== -1 || isNaN(arg1));

// // arg1.indexOf(' ') != -1 - он ищет подстроку substr в строке str, начиная с позиции pos,
// //  и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений

// const operators = ['+','-','*','/'];
// let operator;
// do {
//     operator = prompt('Введите знак');
// } while(operator.length === 0 || operator.indexOf(' ') !== -1 || !operators.includes(operator));

// let arg2;
// do {
//     arg2 = prompt('Введи второе число: ');
// } while(arg2.length === 0 || arg2.indexOf(' ') !== -1 || isNaN(arg2));

// switch(operator) {
//     case '+':
//         alert(+arg1 + +arg2);
//         break;
//     case '-':
//         alert(+arg1 - +arg2);
//         break;
//     case '*':
//         alert(+arg1 * +arg2);
//         break;
//     case '/':
//         while(arg2 === '0') {
//             arg2 = prompt('Делить на 0 нельзя. Введите заново второе число');
//          }
//         alert(+arg1 / +arg2);
//         break;
//     default:
//         alert('Я не могу это посчитать -______-');
// }
