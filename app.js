console.log("Hello from Node.js!");
console.log("Lab 03 - Introduction to Node.js and GitHub Flow");

console.log("=== Node.js File Operations Demo ===\n");

const fs = require('fs');

// 1. Read File
console.log("1. Reading file...");
fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log("File content:");
  console.log(data);
  console.log();
});

// 2. Write to File
console.log("2. Writing to file...");
fs.writeFile('output.txt', 'Hello World! This is written by Node.js', function (err) {
  if (err) throw err;
  console.log('File saved successfully!');
});