console.log("Hello from Node.js!");
console.log("Lab 03 - Introduction to Node.js and GitHub Flow");

console.log("=== Node.js File Operations Demo ===\n");

// 1. Read File
const fs = require('fs');

console.log("1. Reading file...");
fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log("File content:");
  console.log(data);
});