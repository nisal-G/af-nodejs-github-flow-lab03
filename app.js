console.log("Hello from Node.js!");
console.log("Lab 03 - Introduction to Node.js and GitHub Flow");

console.log("=== Node.js Complete Demo ===\n");

const fs = require('fs');
const http = require('http');
const https = require('https');

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

// 3. Web Server
console.log("\n3. Starting web server on port 3000...");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World!</h1>');
  res.write('<p>Welcome to Node.js Web Server</p>');
  res.end();
}).listen(3000);

// 4. Making an HTTP Request
console.log("4. Making HTTP request to API...");
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log("API Response:");
    console.log(JSON.parse(data));
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});

// 5. Using a Module
console.log("\n5. Using custom module...");
const myModule = require('./my-module.js');
console.log(myModule.myFunction());
console.log("Add 5 + 3 =", myModule.add(5, 3));
console.log(myModule.greet("Nisal"));

console.log('\nServer running at http://localhost:3000/');
console.log('Press Ctrl+C to stop');