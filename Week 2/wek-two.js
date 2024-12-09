// // typeScript
// // cast it to a number
// function sum(a, b) {
//     return a + b;
// }

// let ans = sum(2 , 3)
// console.log(ans);


// function sum(n) {
//     let ans = 0;
//     for(let i=0; i <= n; i++){
//         ans = ans + i;
//     }
//     return ans;
// }


// let ans = sum(110);
// console.log(ans);


// const fs = require("fs");

// function print(err, data) {
//     console.log(data);
// }

// fs.readFile("a.txt", "utf-8", print);

// fs.readFile("b.txt", "utf-8", print);


// console.log('done kra')

// function timeout() {
//     console.log('click the button');
// }

// console.log('Hi!');

// setTimeout(timeout, 15000);

// console.log('hello kia ha');

// let c = 0;
// for(let i =0; i < 1000000000; i++) {
//   c = c + 1;
// }

// console.log("expensive the code")

// Date

// const data = new Date();
// console.log(data.getFullYear());

//Map

// const map = new Map();

// map.set('name', 'Mohiz');
// map.set('age', 30);
// console.log(map.get('name'));

// function logName() {
//     console.log("Abdul Mohiz")
// }

// setTimeout(logName, 2000) 

// function callback() {
//     console.log('My name is mohiz sultan')

// }

// setTimeout(callback, 3000);


// setTimeoutPromisified(3000).then(callback)

//

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function callback() {
//       console.log("3 seconds have passed");
//   }
  
//   setTimeoutPromisified(3000).then(callback)


// function random(resolve) {
//     resolve();
// }

// let p = new Promise(random);

// function callback() {
//     console.log("promise succeded");
// }   

// const fs = require("fs");

// function readTheFile(sendTheFinalValueHere) {
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         sendTheFinalValueHere(data);
//     })
// }

// function readFile(fileName) {
//     return new Promise(readTheFile);
// }

// const p = readFile("a.txt");
// function callback(contents) {
//     console.log(contents)
// }
// p.then(callback);


// function wait(n) {
//     let p = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, n * 3000);
//     });
//     return p;
// }

// module.exports = wait;

async function getData() {
    let resultFromServer = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(await resultFromServer.json());
}

  getData();