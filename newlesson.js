// let n = [1, 2, 3, 4, 5, 6];
// console.log(n);

// console.log(n.length);

// for (let a = 0; a < n.length; a++) {
//   console.log(a, n[a]);
// }

let n = 3;

let balls = ["red", "blue", "green"];

let a = 7;

let array = [];

for (let i = 0, k = 0; i < a; i++, k++) {
  if (k == 3) {
    k = 0;
  }
  array.push(balls[k]);
}

alert(array);
