/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable no-plusplus */
// Fibonacci Function

function fiboFn(n) {
  let first = 0;
  let second = 1;
  let third = 0;
  let result = `${first} ${second}`;
  for (let i = 3; i <= n; i++) {
    third = first + second;
    result = `${result} ${third}`;
    first = second;
    second = third;
  }
  return result.split(" ");
}
console.log(fiboFn(8));

// I came up with
// function fiboRec(n) {
//   if (n === 1) return 0;
//   if (n === 2) return 1;

//   return fiboRec(n - 1) + fiboRec(n - 2);
// }

// This solution i saw it on Internet.
function fiboRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  return [
    ...fiboRec(n - 1),
    fiboRec(n - 1)[n - 1 - 1] + fiboRec(n - 1)[n - 1 - 2],
  ];
}

console.log(fiboRec(8));
