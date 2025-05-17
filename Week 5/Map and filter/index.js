const input = [1,2,3,4,5,6,7,8,10, 12, 123,123123,123123,123,12,3324,1234];


//                                 Map

////2
// const NewArry = []; 

// for(let i = 0; i < input.length ; i ++){
//     NewArry.push(input[i] * 2);
// }

// console.log(NewArry);

///// 2
// const ans = input.map(function(i){
//     return i * 2;
// });

// console.log(ans);




////3


// const NewArry = [] ;

// for ( let i = 0 ; i<input.length; i ++){
//     if (input[i] %  2 == 0 ) {
//         NewArry.push(input[i]);
//     }
// };


// console.log(NewArry);



function filter(n){
   if(n % 2 == 0){
    return true
   }else{
    return false
   }
};


const ans = input.filter(filter);

console.log(ans);