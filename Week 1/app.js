
// let age = 20 ;
// let mohiz = false;
// console.log(mohiz); 

// let user1 = 'abdul';
// let user2 = 'mohiz';
// let user3 = 'awan';

// console.log(user1);


// let user = ['abdul mohiz', 'Farhan', 'Saif'];


// console.log(user[1]);


// let age2 = 19;

// let adualt = (age2 != 18);



// console.log(adualt);


// // function greet(name) {
// //     return 'hello' + name;
// // }

// // let ans = greet('mohiz');
// // let ans2 = greet('farhan');
// // let ans3 = greet('saif');

// // console.log(ans);
// // console.log(ans2);
// // console.log(ans3);


// function sum(a, b) {
//     let totalSum =  a + b;
//     return totalSum
// }

// let ans = sum(12 ,2);
// let ans2 = sum (14 , 77)

// console.log(ans);
// console.log(ans2);


//   Assignment

// function canVote(age) {
//     return age > 18 ;
// }

// console.log(canVote(19));


// function canVote(age) {
//     if(age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }


// let ans = canVote(118);

// console.log(ans);

// function adualt(age) {
//     if(age > 18){
//         console.log('your are adult');
//     }else {
//         console.log('you are minor.')
//     }
// }


// let ans = adualt(90) ;
// console.log(ans);

// let users = ['abdul mohiz', 'Farhan', 'Saif','Annus','Azhar','king, '];

// let totalUsers = users.length;

// for (let i=0; i < totalUsers; i++) {
//     console.log(users[i]);
// }


// function greet(user) {
//     console.log('hi ' + user.name + ' your age is ' + user.age);
// }

// let user = {
//     name: "Abdul Mohiz",
//     age: 16
// }

// greet(user );



//         Assignment

// function greet(user) {
//     if(user.age > 18) {
//         console.log('hi ' + user.name + ' your are allow to vote');
//     }else {
//         console.log('hi ' + user.name + ' your are note                      allow to vote');   
//     }
// }

// let user = {
//     name: "Abdul Mohiz",
//     age: 16
// }

// greet(user );


// function greet(user) {
//     if(user.gender = 'Male') {
//         console.log('hi Mrs ' + user.name + ' your age is ' + user.age);
//     }else {
//        console.log('hi Miss ' + user.name +  ' your age is ' + user.age);   
//     }
// }

// let user = {
//     name: "Abdul Mohiz",
//     age: 16,
//     gender : 'Male'
// }

// greet(user );



// function Arr(users) {
//     if(users.age > 18 && users.gender == 'male'){
//       console.log(users)
//     }else {
//         console.log(users)
//     }
// }





function solve(arr) {
    let arr2 = [];
    for(let i=0; i < arr.length; i++) {
        if(arr[i].gender === 'male ' && arr[i].age > 18) {
           arr2.push(arr[i]);
        }
    }
    return arr2;
}


const users = [{
    name:'Abdul Mohiz Awan',
    age: 21,
    gender: 'male',
}, {
    name:'Farhan Awan',
    age: 16,
    gender: 'male',
}, {
    name:'priya',
    age: 21,
    gender: 'female'
    
}];

const ans = solve(users);

console.log(ans); 