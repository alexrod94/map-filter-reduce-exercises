const names = ["juan", "pepe", "carlos"];

//['Juan', 'Pepe', 'Carlos']

/*const newArr = [];

myArray.forEach((el) => newArr.push(el * 2));*/

// Map: transforms the elements in the array

//const newArr = myArray.map((el) => el * 2);

// console.log(newArr);

// const newNames = names.map((name) => {
//   const firstLetter = name[0].toUpperCase();
//   const secondHalf = name.slice(1);
//   return firstLetter + secondHalf;
// });

// console.log(names);
// console.log(newNames);

// const newNames = [];

// names.forEach((name) => {
//   if (name.includes("a")) {
//     newNames.push(name);
//   }
// });

// Filter: filter the array

// const newNames = names.filter((name) => name.includes("a"));

// console.log(newNames);

const myArray = [1, 2, 3, 4];

// Reduce: Adds all the elements in the array

let sum = myArray.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator - currentValue;
}, 0);

console.log(sum);
