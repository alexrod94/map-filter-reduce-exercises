/*function myFunction() {

} */

// const myFunction = () => console.log("Hello");

function printSomething() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }

  if (arguments.length < 2) {
    console.log("You're missing your second input");
  }
}

printSomething("hi", "there");
