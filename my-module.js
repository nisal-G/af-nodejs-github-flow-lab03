// Custom module for Lab 03
function myFunction() {
  return "Hello from custom module!";
}

function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Welcome ${name} to Node.js modules!`;
}

module.exports = {
  myFunction,
  add,
  greet
};
