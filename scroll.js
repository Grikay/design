// document.querySelectorAll(".nav_link");

// let question = prompt("вы согласны?");

// if (question === "да") {
//   alert("молодец");
// } else {
//   alert("ты не молодец");
// }

// ------------------------------ функция обычная с if и else

// function G() {
//   let question = prompt("вы согласны?");

//   if (question === "да" || question === "ДА") {
//     alert("молодец");
//   } else {
//     alert("ты не молодец");
//   }
// }
// G();

// ------------------------------ стрелочная функцмя
// let sum = (a, b) => a + b;

// /* Эта стрелочная функция представляет собой более короткую форму:

// let sum = function(a, b) {
//   return a + b;
// };
// */

// alert(sum(1, 2)); // 3

// const add = (a, b) => a + b;
// console.log(add(5, 2));

// ------------------------------ обьекты
// let user = {
//   name: "John",
//   age: 30,
// }

// let key = prompt("Что вы хотите узнать о пользователе?", "age");

// // доступ к свойству через переменную
// alert(user[key]); // John (если ввели "name")

// let codes = {
//   49: "Германия",
//   41: "Швейцария",
//   44: "Великобритания",
//   // ..,
//   1: "США",
// };

// for (let code in codes) {
//   alert(code);
// }

// до вызова функции

// ------------------------------ 2 решения задачки
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//     alert(obj[key]);
//   }
// }

// multiplyNumeric(menu);

// -------------

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
//   return obj;
// }
// console.log(multiplyNumeric(menu));

//---------------------------

// function isRightRange(str, n) {
//   if (str.length === n) {
//     return false;
//   } else {
//     return true;
//   }
// }
// alert(isRightRange(5, 5));
