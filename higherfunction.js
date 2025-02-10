// function repeat(n,action){
//     for(let i=0;i<n;i++){
//         action(i);
//     }
// }

// repeat(3,console.log)

// let labels = [];
// repeat(5, i => {
//   labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);


// let x = 5;
// for (let y=0;y<5;y++){
//     console.log(y+x);
// }


// function addFive(x){
//     x += 5;
//     return x=> x + 6;
// }

// let assigment = addFive(4)
// // console.log(addFive(4))

// assigment(4)
// console.log(assigment(10))

// function functionName(x,action){
//     return action(x)
// }


function makeNegativeNumber(y){
    return -y;
} 
// const ijeoma= functionName(5,makeNegativeNumber);
// console.log(ijeoma)


function functionName(x,action,cond){
    if (cond(x)){

        return action(x)
    }else{
        return "no dice";
    }
       
     }
function condCheck(x,){
    return x<5;
}
const ijeoma= functionName(5,makeNegativeNumber,condCheck);
console.log(ijeoma)



// const mine=functionName(2,3);
// console.log(mine);

// function greaterThan(n){
//     return m =>m>n;
// }
// let greater=greaterThan(10);
// console.log(greater(20));


// function loop(value,test,update,body){
// while (test(value)){
// body(value);
// x=update(value)
// }
// }

// function loop(value, test, update, body) {
//     while (test(value)) { // Check the test function with the current value
//       body(value);        // Call the body function with the current value
//       value = update(value); // Update the value using the update function
//     }
//   }
function loop(start, test, update, body) {
   for (let value = start; test(value); value = update(value)) {
     body(value);
   }
 }

 loop(3, n => n > 0, n => n - 1, console.log);