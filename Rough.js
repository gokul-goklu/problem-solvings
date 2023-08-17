function addNumbers() {
  console.log(arguments);
  //   let sum = 0;
  //   for (let i = 0; i < arguments.length; i++) {
  //     sum += arguments[i];
  //   }

  return arguments;
}

console.log(addNumbers(10, 20));
console.log(addNumbers(10, 20, 10));
console.log(addNumbers(10, 20, 10, 1));
console.log(addNumbers(10, 20, 20, 90, 80));
console.log(addNumbers(10, 20, 20, 90, 80, 90, 70));
