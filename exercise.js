const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 20 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

/*const elegiblePeople = [];

people.forEach((person) => {
  if (person.age >= 21) {
    elegiblePeople.push(person);
  }
}); */

// const elegiblePeople = people.filter((person) => {
//   if (person.age >= 21) return person;
// });

const elegiblePeople = people.filter((person) =>
  person.age >= 21 ? person : null
);

console.log(elegiblePeople);
